import type { DeepReadonly as _DeepReadOnly } from 'ts-essentials';

/**
 * Given an object T return union of all possible property key types
 */
export type ValueOf<T> = T[keyof T];

/**
 * T or null
 */
export type Nullable<T> = T | null;

/**
 * Recursive Readonly<T> supporting deeply nested objects
 */
export type DeepReadonly<T> = _DeepReadOnly<T>;
