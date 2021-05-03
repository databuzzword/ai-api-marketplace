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

package org.openapitools.client.model;

import java.util.*;
import org.openapitools.client.model.ValidationError;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class HTTPValidationError {
  
  @SerializedName("detail")
  private List<ValidationError> detail = null;

  /**
   **/
  @ApiModelProperty(value = "")
  public List<ValidationError> getDetail() {
    return detail;
  }
  public void setDetail(List<ValidationError> detail) {
    this.detail = detail;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    HTTPValidationError hTTPValidationError = (HTTPValidationError) o;
    return (this.detail == null ? hTTPValidationError.detail == null : this.detail.equals(hTTPValidationError.detail));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.detail == null ? 0: this.detail.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class HTTPValidationError {\n");
    
    sb.append("  detail: ").append(detail).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}