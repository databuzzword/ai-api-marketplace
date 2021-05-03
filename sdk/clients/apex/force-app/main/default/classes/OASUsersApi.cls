/*
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the OAS code generator program.
 * https://github.com/OAS-api/OAS-codegen.git
 * Do not edit the class manually.
 */

public class OASUsersApi {
    OASClient client;

    public OASUsersApi(OASClient client) {
        this.client = client;
    }

    public OASUsersApi() {
        this.client = new OASClient();
    }

    public OASClient getClient() {
        return this.client;
    }

    /**
     * Read User Me
     * 
     * @return Object
     * @throws OAS.ApiException if fails to make API call
     */
    public Object readUserMeImageImageUncolorizationUsersMeGet() {
        List<OAS.Param> query = new List<OAS.Param>();
        List<OAS.Param> form = new List<OAS.Param>();

        return (Object) client.invoke(
            'GET', '/image/image/uncolorization/users/me', '',
            query, form,
            new Map<String, Object>(),
            new Map<String, Object>(),
            new List<String>{ 'application/json' },
            new List<String>(),
            new List<String>(),
            Object.class
        );
    }
}