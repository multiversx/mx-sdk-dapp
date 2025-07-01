declare type ParamParseFailed = {
    failed: true;
};
declare type ParamParseSegment<Segment extends string> = Segment extends `${infer LeftSegment}/${infer RightSegment}` ? ParamParseSegment<LeftSegment> extends infer LeftResult ? ParamParseSegment<RightSegment> extends infer RightResult ? LeftResult extends string ? RightResult extends string ? LeftResult | RightResult : LeftResult : RightResult extends string ? RightResult : ParamParseFailed : ParamParseFailed : ParamParseSegment<RightSegment> extends infer RightResult ? RightResult extends string ? RightResult : ParamParseFailed : ParamParseFailed : Segment extends `:${infer Remaining}` ? Remaining : ParamParseFailed;
declare type ParamParseKey<Segment extends string> = ParamParseSegment<Segment> extends string ? ParamParseSegment<Segment> : string;
/**
 * The parameters that were parsed from the URL path.
 */
declare type Params<Key extends string = string> = {
    readonly [key in Key]: string | undefined;
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
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/utils/match-path
 */
export declare function matchPath<ParamKey extends ParamParseKey<Path>, Path extends string>(pattern: PathPattern<Path> | Path, pathname: string): PathMatch<ParamKey> | null;
export {};
//# sourceMappingURL=matchPath.d.ts.map