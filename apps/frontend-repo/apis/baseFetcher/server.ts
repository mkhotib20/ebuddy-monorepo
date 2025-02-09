'server only';

import { headers } from 'next/headers';

import { GENERIC_ERROR_WORDING } from './const';
import optionParser from './parser';
import type { BaseFetchResult, DefaultData, FetchOption } from './types';

const serverBaseFetcher = async <DT = DefaultData>(url: string, init?: FetchOption): Promise<BaseFetchResult<DT>> => {
  const currentUrl = process.env.NEXT_PUBLIC_BASE_APP_URL;

  const rsp = await fetch(`${currentUrl}${url}`, {
    ...optionParser(init),
  headers: await headers(),
  });
  const jsonData = await rsp.json();

  if (!rsp.ok) {
    return { error: new Error(jsonData.message || GENERIC_ERROR_WORDING) };
  }

  return { data: jsonData };
};

export default serverBaseFetcher;
