{-
   FastAPI
   No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

   The version of the OpenAPI document: 0.1.0

   NOTE: This file is auto generated by the openapi-generator.
   https://github.com/openapitools/openapi-generator.git
   Do not edit this file manually.
-}


module Data.ValidationError exposing (ValidationError, decoder, encode)

import Dict exposing (Dict)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (optional, required)
import Json.Encode as Encode


type alias ValidationError =
    { loc : (List String)
    , msg : String
    , type_ : String
    }


decoder : Decoder ValidationError
decoder =
    Decode.succeed ValidationError
        |> required "loc" (Decode.list Decode.string)
        |> required "msg" Decode.string
        |> required "type" Decode.string



encode : ValidationError -> Encode.Value
encode model =
    Encode.object
        [ ( "loc", (Encode.list Encode.string) model.loc )
        , ( "msg", Encode.string model.msg )
        , ( "type", Encode.string model.type_ )

        ]

