import type { Nullable } from '$types';

export type CacheKey = `site_id:${string}`;
type CacheValue =
  | {
      token: string;
      expirationDate: Date;
    }
  | undefined;
type TokenCache = Record<CacheKey, CacheValue>;

const tokenCache: TokenCache = {};

export function set(key: CacheKey, value: CacheValue): void {
  tokenCache[key] = value;
}

export function get(key: CacheKey): Nullable<CacheValue> {
  const cacheValue = tokenCache[key];

  if (cacheValue != null && cacheValue.expirationDate > new Date(Date.now())) {
    return cacheValue;
  }

  return null;
}
