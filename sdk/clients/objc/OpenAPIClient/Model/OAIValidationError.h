#import <Foundation/Foundation.h>
#import "OAIObject.h"

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





@protocol OAIValidationError
@end

@interface OAIValidationError : OAIObject


@property(nonatomic) NSArray<NSString*>* loc;

@property(nonatomic) NSString* msg;

@property(nonatomic) NSString* type;

@end