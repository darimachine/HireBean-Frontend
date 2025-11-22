import {URLS} from "config/urls"

type ParamsInUrl<U> = U extends  `${string}:${infer Param}/${infer Rest}`
    ? Param | ParamsInUrl<Rest>
    :never;

export const reverse = <U extends URLS>(
    url: U,
    params: { [K in ParamsInUrl<U>]: string | number }
) => {
    let reversedUrl = url.toString();
    Object.keys(params).forEach((key) => {
        // @ts-expect-error
        const val = encodeURIComponent(String(params[key]));
        reversedUrl = reversedUrl.replaceAll(`:${key}`,val);
    });

    return reversedUrl;
};

export const addQueryParams = (
    url: string,
    queryParams: Record<string,string | number>
) => {
    const questionMarkSeparator = url.includes('?') ? '&' : '?';
    return (
        url +
        questionMarkSeparator +
            Object.keys(queryParams).map((key) => `${key}=${queryParams[key]}`)
                .join('&')
    );
};

export const toSearchParams = (
    params: Record<string, string | number | boolean | number[] | null>
) => {
    const result = new URLSearchParams();

    Object.keys(params).forEach((key) => {
        const param = params[key];

        if (param === null || param === undefined || param === "" ) {
            return;
        }
        if(Array.isArray(param)) {
            param.forEach((value) => {
                result.append(key, String(value));
            });
        }
        else {
            result.append(key, String(param));
        }
    });
    return result;
}

