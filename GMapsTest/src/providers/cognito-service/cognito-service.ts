
import { Injectable } from '@angular/core';
import * as AWSCognito from "amazon-cognito-identity-js";
import { SystemVariableProvider } from "../system-variable/system-variable";


@Injectable()
export class CognitoServiceProvider {


    private POOL_SETTING = new SystemVariableProvider().SYSTEM_PARAMS.COGNITO_POOL;

  _USER_POOL = new AWSCognito.CognitoUserPool(this.POOL_SETTING);


  _POOL_DATA = {
     UserPoolId: "us-east-1_iEAWxQYmX",
     ClientId: "tk031td9hkv7b7f3js5iatv9p"
  };
  authenticate(email, password) {
    return new Promise((resolved, reject) => {
      const authDetails = new AWSCognito.AuthenticationDetails({
        Username: email,
        Password: password
      });

      const cognitoUser = new AWSCognito.CognitoUser({
        Username: email,
        Pool: this._USER_POOL
      });

      cognitoUser.authenticateUser(authDetails, {
        onSuccess: result => {
          resolved(result.getAccessToken().getJwtToken());
        },
        onFailure: err => {
          reject(err);
        },
        newPasswordRequired: userAttributes => {
          // User was signed up by an admin and must provide new
          // password and required attributes, if any, to complete
          // authentication.

          // the api doesn't accept this field back
          userAttributes.email = email;
          delete userAttributes.email_verified;

          cognitoUser.completeNewPasswordChallenge(password, userAttributes, {
            onSuccess: function(result) {},
            onFailure: function(error) {
              reject(error);
            }
          });
        }
      });
    });
} // End of authenticate function (LOG IN)

signUp(email, password) {
  return new Promise((resolved, reject) => {
    const userPool = new AWSCognito.CognitoUserPool(this._POOL_DATA);

    let userAttribute = [];
    userAttribute.push(
      new AWSCognito.CognitoUserAttribute({ Name: "email", Value: email })
    );

    userPool.signUp(email, password, userAttribute, null, function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolved(result);
      }
    });
  });
}

confirmUser(verificationCode, userName) {
  return new Promise((resolved, reject) => {
    const userPool = new AWSCognito.CognitoUserPool(this._POOL_DATA);

    const cognitoUser = new AWSCognito.CognitoUser({
      Username: userName,
      Pool: userPool
    });

    cognitoUser.confirmRegistration(verificationCode, true, function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolved(result);
      }
    });
  });
}

}
