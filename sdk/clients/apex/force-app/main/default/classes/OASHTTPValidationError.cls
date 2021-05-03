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

/**
 * OASHTTPValidationError
 */
public class OASHTTPValidationError {
    /**
     * Get detail
     * @return detail
     */
    public List<OASValidationError> detail { get; set; }

    public OASHTTPValidationError() {
        detail = new List<OASValidationError>();
    }

    public static OASHTTPValidationError getExample() {
        OASHTTPValidationError htTPValidationError = new OASHTTPValidationError();
          htTPValidationError.detail = new List<OASValidationError>{OASValidationError.getExample()};
        return htTPValidationError;
    }

    public Boolean equals(Object obj) {
        if (obj instanceof OASHTTPValidationError) {           
            OASHTTPValidationError htTPValidationError = (OASHTTPValidationError) obj;
            return this.detail == htTPValidationError.detail;
        }
        return false;
    }

    public Integer hashCode() {
        Integer hashCode = 43;
        hashCode = (17 * hashCode) + (detail == null ? 0 : System.hashCode(detail));
        return hashCode;
    }
}
