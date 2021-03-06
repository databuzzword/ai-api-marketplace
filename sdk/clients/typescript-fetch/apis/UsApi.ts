// tslint:disable
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models';

export interface ReadUserImageImageUncolorizationUsersUsernamePostRequest {
    username: string;
}

/**
 * no description
 */
export class UsApi extends runtime.BaseAPI {

    /**
     * Read User
     */
    async readUserImageImageUncolorizationUsersUsernamePostRaw(requestParameters: ReadUserImageImageUncolorizationUsersUsernamePostRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling readUserImageImageUncolorizationUsersUsernamePost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/image/image/uncolorization/users/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response);
    }

    /**
     * Read User
     */
    async readUserImageImageUncolorizationUsersUsernamePost(requestParameters: ReadUserImageImageUncolorizationUsersUsernamePostRequest): Promise<object> {
        const response = await this.readUserImageImageUncolorizationUsersUsernamePostRaw(requestParameters);
        return await response.value();
    }

}
