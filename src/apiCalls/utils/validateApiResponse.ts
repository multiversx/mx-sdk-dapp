export type FieldCheckType = (value: unknown) => boolean;

export type ResponseSchemaType = Record<string, FieldCheckType>;

export const isString: FieldCheckType = (value) =>
  typeof value === 'string' && value.length > 0;

export const isNonNegativeInteger: FieldCheckType = (value) =>
  Number.isSafeInteger(value) && (value as number) >= 0;

export const isNonNegativeNumber: FieldCheckType = (value) =>
  typeof value === 'number' && Number.isFinite(value) && value >= 0;

/**
 * An integer the API may send either as a number or as a string of digits.
 */
export const isNumeric: FieldCheckType = (value) =>
  isNonNegativeInteger(value) ||
  (typeof value === 'string' && /^\d+$/.test(value));

export const isObject: FieldCheckType = (value) =>
  value != null && typeof value === 'object' && !Array.isArray(value);

export const optional =
  (check: FieldCheckType): FieldCheckType =>
  (value) =>
    value == null || check(value);

export const equals =
  (expected: unknown): FieldCheckType =>
  (value) =>
    value === expected;

const warned = new Set<string>();

const warnOnce = (source: string, fields: string[]) => {
  const key = `${source}:${fields.join(',')}`;

  if (warned.has(key)) {
    return;
  }

  warned.add(key);

  console.warn(
    `[sdk-dapp] Unexpected response from the \`${source}\` endpoint: ` +
      `${fields.join(', ')} ${fields.length > 1 ? 'are' : 'is'} missing or malformed.`
  );
};

export const validateApiResponse = ({
  data,
  schema,
  source
}: {
  data: unknown;
  schema: ResponseSchemaType;
  source: string;
}): boolean => {
  if (!isObject(data)) {
    warnOnce(source, ['the response body']);
    return false;
  }

  const record = data as Record<string, unknown>;
  const invalidFields = Object.keys(schema).filter(
    (field) => !schema[field](record[field])
  );

  if (invalidFields.length > 0) {
    warnOnce(source, invalidFields);
    return false;
  }

  return true;
};

export const validateApiListResponse = ({
  data,
  schema,
  source
}: {
  data: unknown;
  schema: ResponseSchemaType;
  source: string;
}): boolean => {
  if (!Array.isArray(data)) {
    warnOnce(source, ['the response body']);
    return false;
  }

  return data
    .map((item) => validateApiResponse({ data: item, schema, source }))
    .every(Boolean);
};

export const resetApiResponseWarnings = () => warned.clear();
