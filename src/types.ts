/**
 * Given an object T return union of all possible property key types
 */
export type ValueOf<T> = T[keyof T];

/**
 * T or null
 */
export type Nullable<T> = T | null;
