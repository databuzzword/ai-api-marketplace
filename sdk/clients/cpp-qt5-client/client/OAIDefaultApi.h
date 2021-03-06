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

#ifndef OAI_OAIDefaultApi_H
#define OAI_OAIDefaultApi_H

#include "OAIHttpRequest.h"

#include "OAIObject.h"
#include <QString>

#include <QObject>

namespace OpenAPI {

class OAIDefaultApi: public QObject {
    Q_OBJECT

public:
    OAIDefaultApi();
    OAIDefaultApi(QString host, QString basePath);
    ~OAIDefaultApi();

    QString host;
    QString basePath;
    QMap<QString, QString> defaultHeaders;

    void readUsersImageImageUncolorizationUsersGet();
    void rootGet();
    
private:
    void readUsersImageImageUncolorizationUsersGetCallback (OAIHttpRequestWorker * worker);
    void rootGetCallback (OAIHttpRequestWorker * worker);
    
signals:
    void readUsersImageImageUncolorizationUsersGetSignal(OAIObject summary);
    void rootGetSignal(OAIObject summary);
    
    void readUsersImageImageUncolorizationUsersGetSignalFull(OAIHttpRequestWorker* worker, OAIObject summary);
    void rootGetSignalFull(OAIHttpRequestWorker* worker, OAIObject summary);
    
    void readUsersImageImageUncolorizationUsersGetSignalE(OAIObject summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void rootGetSignalE(OAIObject summary, QNetworkReply::NetworkError error_type, QString& error_str);
    
    void readUsersImageImageUncolorizationUsersGetSignalEFull(OAIHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void rootGetSignalEFull(OAIHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    
};

}
#endif
