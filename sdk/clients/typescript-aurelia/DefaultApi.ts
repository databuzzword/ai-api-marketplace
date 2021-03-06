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

import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import { Api } from './Api';
import { AuthStorage } from './AuthStorage';
import {
} from './models';

/**
 * readUsersImageImageUncolorizationUsersGet - parameters interface
 */
export interface IReadUsersImageImageUncolorizationUsersGetParams {
}

/**
 * rootGet - parameters interface
 */
export interface IRootGetParams {
}

/**
 * DefaultApi - API class
 */
@autoinject()
export class DefaultApi extends Api {

  /**
   * Creates a new DefaultApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Read Users
   */
  async readUsersImageImageUncolorizationUsersGet(): Promise<object> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/image/image/uncolorization/users/`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()

      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Root
   */
  async rootGet(): Promise<object> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()

      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

}

