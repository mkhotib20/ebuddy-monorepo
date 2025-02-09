'client only';

import { GENERIC_ERROR_WORDING } from './const';
import optionParser from './parser';
import type { BaseFetchResult, DefaultData, FetchOption } from './types';

const clientBaseFetcher = async <DT = DefaultData>(url: string, init?: FetchOption): Promise<BaseFetchResult<DT>> => {
  const rsp = await fetch(url, { ...optionParser(init), credentials: 'include' });
  const jsonData = await rsp.json();

  if (!rsp.ok) {
    return { error: new Error(jsonData.message || GENERIC_ERROR_WORDING) };
  }

  return { data: jsonData };
};

export default clientBaseFetcher;
