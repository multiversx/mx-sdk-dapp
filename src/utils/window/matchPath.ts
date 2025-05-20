// credits go to: https://remix.run
// sourcecode: https://raw.githubusercontent.com/remix-run/react-router/6b44e99f0b659428ce2ec8d5098e90c7fddda2c5/packages/react-router/lib/router.ts

function warning(cond: any, message: string): void {
  if (!cond) {
    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty, @typescript-eslint/no-unused-vars
    } catch (error) {}
  }
}

type ParamParseFailed = { failed: true };

type ParamParseSegment<Segment extends string> =
  // Check here if there exists a forward slash in the string.

  Segment extends `${infer LeftSegment}/${infer RightSegment}`
    ? // If there is a forward slash, then attempt to parse each side of the
      // forward slash.
      ParamParseSegment<LeftSegment> extends infer LeftResult
      ? ParamParseSegment<RightSegment> extends infer RightResult
        ? LeftResult extends string
          ? // If the left side is successfully parsed as a param, then check if
            // the right side can be successfully parsed as well. If both sides
            // can be parsed, then the result is a union of the two sides
            // (read: "foo" | "bar").
            RightResult extends string
            ? LeftResult | RightResult
            : LeftResult
          : // If the left side is not successfully parsed as a param, then check
            // if only the right side can be successfully parse as a param. If it
            // can, then the result is just right, else it's a failure.
            RightResult extends string
            ? RightResult
            : ParamParseFailed
        : ParamParseFailed
      : // If the left side didn't parse into a param, then just check the right
        // side.
        ParamParseSegment<RightSegment> extends infer RightResult
        ? RightResult extends string
          ? RightResult
          : ParamParseFailed
        : ParamParseFailed
    : // If there's no forward slash, then check if this segment starts with a
      // colon. If it does, then this is a dynamic segment, so the result is
      // just the remainder of the string. Otherwise, it's a failure.
      Segment extends `:${infer Remaining}`
      ? Remaining
      : ParamParseFailed;

// Attempt to parse the given string segment. If it fails, then just return the
// plain string type as a default fallback. Otherwise return the union of the
// parsed string literals that were referenced as dynamic segments in the route.
type ParamParseKey<Segment extends string> =
  ParamParseSegment<Segment> extends string
    ? ParamParseSegment<Segment>
    : string;

/**
 * The parameters that were parsed from the URL path.
 */
type Params<Key extends string = string> = {
  readonly [_key in Key]: string | undefined;
};

/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */
interface PathPattern<Path extends string = string> {
  /**
   * A string to match against a URL pathname. May contain `:id`-style segments
   * to indicate placeholders for dynamic parameters. May also end with `/*` to
   * indicate matching the rest of the URL pathname.
   */
  path: Path;
  /**
   * Should be `true` if the static portions of the `path` should be matched in
   * the same case.
   */
  caseSensitive?: boolean;
  /**
   * Should be `true` if this pattern should match the entire URL pathname.
   */
  end?: boolean;
}

/**
 * A PathMatch contains info about how a PathPattern matched on a URL pathname.
 */
interface PathMatch<ParamKey extends string = string> {
  /**
   * The names and values of dynamic parameters in the URL.
   */
  params: Params<ParamKey>;
  /**
   * The portion of the URL pathname that was matched.
   */
  pathname: string;
  /**
   * The portion of the URL pathname that was matched before child routes.
   */
  pathnameBase: string;
  /**
   * The pattern that was used to match.
   */
  pattern: PathPattern;
}

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/utils/match-path
 */
export function matchPath<
  ParamKey extends ParamParseKey<Path>,
  Path extends string
>(
  pattern: PathPattern<Path> | Path,
  pathname: string
): PathMatch<ParamKey> | null {
  if (typeof pattern === 'string') {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }

  const [matcher, paramNames] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  );

  const match = pathname.match(matcher);
  if (!match) {
    return null;
  }

  const matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, '$1');
  const captureGroups = match.slice(1);
  const params: Params = paramNames.reduce<Mutable<Params>>(
    (memo, paramName, index) => {
      // We need to compute the pathnameBase here using the raw splat value
      // instead of using params["*"] later because it will be decoded then
      if (paramName === '*') {
        const splatValue = captureGroups[index] || '';
        pathnameBase = matchedPathname
          .slice(0, matchedPathname.length - splatValue.length)
          .replace(/(.)\/+$/, '$1');
      }

      memo[paramName] = safelyDecodeURIComponent(
        captureGroups[index] || '',
        paramName
      );
      return memo;
    },
    {}
  );

  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(
  path: string,
  caseSensitive = false,
  end = true
): [RegExp, string[]] {
  warning(
    path === '*' || !path.endsWith('*') || path.endsWith('/*'),
    `Route path "${path}" will be treated as if it were ` +
      `"${path.replace(/\*$/, '/*')}" because the \`*\` character must ` +
      'always follow a `/` in the pattern. To get rid of this warning, ' +
      `please change the route path to "${path.replace(/\*$/, '/*')}".`
  );

  const paramNames: string[] = [];
  let regexpSource =
    '^' +
    path
      .replace(/\/*\*?$/, '') // Ignore trailing / and /*, we'll handle it below
      .replace(/^\/*/, '/') // Make sure it has a leading /
      .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&') // Escape special regex chars
      .replace(/:(\w+)/g, (_: string, paramName: string) => {
        paramNames.push(paramName);
        return '([^\\/]+)';
      });

  if (path.endsWith('*')) {
    paramNames.push('*');
    regexpSource +=
      path === '*' || path === '/*'
        ? '(.*)$' // Already matched the initial /, just match the rest
        : '(?:\\/(.+)|\\/*)$'; // Don't include the / in params["*"]
  } else {
    regexpSource += end
      ? '\\/*$' // When matching to the end, ignore trailing slashes
      : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
        // parent routes to matching only their own words and nothing more, e.g. parent
        // route "/home" should not match "/home2".
        // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
        // but do not consume the character in the matched path so they can match against
        // nested paths.
        '(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)';
  }

  const matcher = new RegExp(regexpSource, caseSensitive ? undefined : 'i');

  return [matcher, paramNames];
}

function safelyDecodeURIComponent(value: string, paramName: string) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(
      false,
      `The value for the URL param "${paramName}" will not be decoded because` +
        ` the string "${value}" is a malformed URL segment. This is probably` +
        ` due to a bad percent encoding (${error}).`
    );

    return value;
  }
}
