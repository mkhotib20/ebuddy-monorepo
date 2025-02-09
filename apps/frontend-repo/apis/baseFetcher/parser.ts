import type { FetchOption } from './types';

const optionParser = (option?: FetchOption): FetchOption | undefined => {
  if (!option) return undefined;

  if (option.jsonData) {
    option.body = typeof option.jsonData === 'string' ? option.jsonData : JSON.stringify(option.jsonData);

    // auto post if not passed method but passed body data and the method is get
    option.method = (option.method || 'get')?.toLowerCase() === 'get' ? 'POST' : option.method;

    option.headers = {
      ...option.headers,
      'content-type': 'application/json',
    };
  }

  return option;
};

export default optionParser;
