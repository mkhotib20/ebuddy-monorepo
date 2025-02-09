export interface FetchOption extends globalThis.RequestInit {
  jsonData?: any;
}

export type DefaultData = Record<string, unknown>;

export interface BaseFetchResult<DT> {
  data?: DT;
  error?: Error;
}
