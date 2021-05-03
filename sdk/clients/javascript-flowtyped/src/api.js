// @flow
/* eslint-disable no-use-before-define */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 * NOTE: This class is auto generated by OpenAPI-Generator
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH: string = "http://localhost".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 */
export type FetchAPI = {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 */
export type FetchArgs = {
    url: string;
    options: {};
}


/**
 *
 * @export
 */
export type RequestOptions = {
    headers?: {};
    query?: {};
    body?: string | FormData;
}

/**
 * * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name:string = "RequiredError"
    constructor(field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 */
export type HTTPValidationError = {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}


/**
 * 
 * @export
 */
export type ValidationError = {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationError
     */
    loc: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    type: string;
}




/**
 * DefaultApi - fetch parameter creator
 * @export
 */
export const DefaultApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Read Users
         * @throws {RequiredError}
         */
        readUsersImageImageUncolorizationUsersGet(options: RequestOptions): FetchArgs {
            const localVarPath = `/image/image/uncolorization/users/`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Root
         * @throws {RequiredError}
         */
        rootGet(options: RequestOptions): FetchArgs {
            const localVarPath = `/`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

export type DefaultApiType = { 
    readUsersImageImageUncolorizationUsersGet(options?: RequestOptions): Promise<Object>,

    rootGet(options?: RequestOptions): Promise<Object>,
}

/**
 * DefaultApi - factory function to inject configuration 
 * @export
 */
export const DefaultApi = function(configuration?: Configuration, fetch: FetchAPI = portableFetch): DefaultApiType {
    const basePath: string = (configuration && configuration.basePath) || BASE_PATH;
    return {
        /**
         * 
         * @summary Read Users
         * @throws {RequiredError}
         */
        readUsersImageImageUncolorizationUsersGet(options?: RequestOptions = {}): Promise<Object> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).readUsersImageImageUncolorizationUsersGet(options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
        /**
         * 
         * @summary Root
         * @throws {RequiredError}
         */
        rootGet(options?: RequestOptions = {}): Promise<Object> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).rootGet(options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
    }
};

/**
 * UsApi - fetch parameter creator
 * @export
 */
export const UsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Read User
         * @throws {RequiredError}
         */
        readUserImageImageUncolorizationUsersUsernamePost(username: string, options: RequestOptions): FetchArgs {
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling readUserImageImageUncolorizationUsersUsernamePost.');
            }
            const localVarPath = `/image/image/uncolorization/users/{username}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

export type UsApiType = { 
    readUserImageImageUncolorizationUsersUsernamePost(username: string, options?: RequestOptions): Promise<Object>,
}

/**
 * UsApi - factory function to inject configuration 
 * @export
 */
export const UsApi = function(configuration?: Configuration, fetch: FetchAPI = portableFetch): UsApiType {
    const basePath: string = (configuration && configuration.basePath) || BASE_PATH;
    return {
        /**
         * 
         * @summary Read User
         * @throws {RequiredError}
         */
        readUserImageImageUncolorizationUsersUsernamePost(username: string, options?: RequestOptions = {}): Promise<Object> {
            const localVarFetchArgs = UsApiFetchParamCreator(configuration).readUserImageImageUncolorizationUsersUsernamePost(username, options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
    }
};

/**
 * UsersApi - fetch parameter creator
 * @export
 */
export const UsersApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Read User Me
         * @throws {RequiredError}
         */
        readUserMeImageImageUncolorizationUsersMeGet(options: RequestOptions): FetchArgs {
            const localVarPath = `/image/image/uncolorization/users/me`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions: RequestOptions = Object.assign({}, { method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

export type UsersApiType = { 
    readUserMeImageImageUncolorizationUsersMeGet(options?: RequestOptions): Promise<Object>,
}

/**
 * UsersApi - factory function to inject configuration 
 * @export
 */
export const UsersApi = function(configuration?: Configuration, fetch: FetchAPI = portableFetch): UsersApiType {
    const basePath: string = (configuration && configuration.basePath) || BASE_PATH;
    return {
        /**
         * 
         * @summary Read User Me
         * @throws {RequiredError}
         */
        readUserMeImageImageUncolorizationUsersMeGet(options?: RequestOptions = {}): Promise<Object> {
            const localVarFetchArgs = UsersApiFetchParamCreator(configuration).readUserMeImageImageUncolorizationUsersMeGet(options);
            return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        },
    }
};

export type ApiTypes = { 
    DefaultApi: DefaultApiType,

    UsApi: UsApiType,

    UsersApi: UsersApiType,
 }