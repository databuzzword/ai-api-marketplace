# openapi-client
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 2.7 and 3.4+

## Installation & Usage
### pip install

If the python package is hosted on Github, you can install directly from Github

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client 
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = openapi_client.DefaultApi(openapi_client.ApiClient(configuration))

try:
    # Read Users
    api_response = api_instance.read_users_image_image_uncolorization_users_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->read_users_image_image_uncolorization_users_get: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**read_users_image_image_uncolorization_users_get**](docs/DefaultApi.md#read_users_image_image_uncolorization_users_get) | **GET** /image/image/uncolorization/users/ | Read Users
*DefaultApi* | [**root_get**](docs/DefaultApi.md#root_get) | **GET** / | Root
*UsApi* | [**read_user_image_image_uncolorization_users_username_post**](docs/UsApi.md#read_user_image_image_uncolorization_users_username_post) | **POST** /image/image/uncolorization/users/{username} | Read User
*UsersApi* | [**read_user_me_image_image_uncolorization_users_me_get**](docs/UsersApi.md#read_user_me_image_image_uncolorization_users_me_get) | **GET** /image/image/uncolorization/users/me | Read User Me


## Documentation For Models

 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [ValidationError](docs/ValidationError.md)


## Documentation For Authorization

 All endpoints do not require authorization.

## Author




