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
package org.openapitools.client.apis


import org.openapitools.client.infrastructure.ApiClient
import org.openapitools.client.infrastructure.ClientException
import org.openapitools.client.infrastructure.ClientError
import org.openapitools.client.infrastructure.ServerException
import org.openapitools.client.infrastructure.ServerError
import org.openapitools.client.infrastructure.MultiValueMap
import org.openapitools.client.infrastructure.RequestConfig
import org.openapitools.client.infrastructure.RequestMethod
import org.openapitools.client.infrastructure.ResponseType
import org.openapitools.client.infrastructure.Success
import org.openapitools.client.infrastructure.toMultiValue

class UsersApi(basePath: kotlin.String = "http://localhost") : ApiClient(basePath) {

    /**
    * Read User Me
    * 
    * @return kotlin.Any
    */
    @Suppress("UNCHECKED_CAST")
    fun readUserMeImageImageUncolorizationUsersMeGet() : kotlin.Any {
        val localVariableBody: kotlin.Any? = null
        val localVariableQuery: MultiValueMap = mapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        val localVariableConfig = RequestConfig(
            RequestMethod.GET,
            "/image/image/uncolorization/users/me",
            query = localVariableQuery,
            headers = localVariableHeaders
        )
        val response = request<kotlin.Any>(
            localVariableConfig,
            localVariableBody
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as kotlin.Any
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }

}