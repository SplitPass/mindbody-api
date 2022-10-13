import type { QueryParams } from '$http/types';
import type { Kv } from '$http/types/Kv';
import type { DeepReadonly } from '$types';

export type GetRequestConfig = { autoPaginate?: boolean };

export type RequestArgsGet<TParam extends Kv> = DeepReadonly<{
  siteID: string;
  params: QueryParams<TParam>;
  config?: GetRequestConfig;
}>;

export type RequestArgsGetOptionalParams<TParam extends Kv> = DeepReadonly<{
  siteID: string;
  params?: QueryParams<TParam>;
  config?: GetRequestConfig;
}>;

export type RequestArgsPost<TPayload extends Kv> = DeepReadonly<{
  siteID: string;
  payload: TPayload;
  config?: GetRequestConfig;
}>;

export type RequestArgsDelete<TParam extends Kv> = DeepReadonly<{
  siteID: string;
  params?: TParam;
}>;
