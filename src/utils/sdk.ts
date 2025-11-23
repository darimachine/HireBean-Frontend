import { BASE_URL } from 'config/urls';
import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import { toSearchParams } from './urls';
import ky from 'ky';
import useSWR from 'swr';
import * as url from 'node:url';

export { BASE_URL };

export const get = <R>(url: string): Promise<R> => {
  return ky<R>(url, {
    credentials: 'include',
  }).json();
};

export const post = <R, D = any>(url: string, data?: D): Promise<R> => {
  return ky
    .post(url, {
      json: data,
      credentials: 'include',
    })
    .json<R>();
};

export const useFetch = <D>(url: string | undefined) =>
  useSWR<D>(url && BASE_URL + url, get, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

export interface PaginatedResponse<T> {
  count: number;
  offset: number;
  limit: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

export const usePaginatedFetch = <T>({
  url,
  params,
}: {
  url: string | undefined;
  params: {
    [key: string]: string | number | boolean | undefined | null;
    limit: number;
  };
}) => {
  const limit = params.limit;
  const [offset, setOffset] = useState<number>(0);
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchResult = useFetch<PaginatedResponse<T>>(
    !_.isNil(url)
      ? `${url}?${toSearchParams({
          offset,
          ...params,
        })}`
      : undefined
  );

  const setPage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      setOffset(limit * (page - 1));
    },
    [limit]
  );

  useEffect(() => {
    if (!_.isUndefined(fetchResult.data)) {
      setPagesCount(Math.ceil(fetchResult.data.count / fetchResult.data.limit));
    }
  }, [fetchResult.data]);

  return {
    offset,
    setOffset,
    currentPage,
    setCurrentPage,
    pagesCount,
    setPagesCount,
    setPage,
    ...fetchResult,
  };
};
