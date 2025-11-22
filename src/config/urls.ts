export const BASE_BACKEND_URL = import.meta.env.VITE_BASE_BACKEND_URL;
export const BASE_URL = `${BASE_BACKEND_URL}/api`;

export enum URLS {
    LOGIN = '/auth/login/',
    LOGOUT = '/auth/logout/',
    REFRESH = '/auth/refresh/',
    USERS_ME = '/users/me/',
    USERS_DETAIL = '/users/:userId/',
    ITEMS_LIST = '/items/',
    ITEMS_DETAIL = '/items/:itemId/',
}