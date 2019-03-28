import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SystemVariableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SystemVariableProvider {
  public SYSTEM_PARAMS = {
    REGION: "us-east-1",
    COGNITO_POOL: {
      UserPoolId: "us-east-1_iEAWxQYmX",
      ClientId: "tk031td9hkv7b7f3js5iatv9p"
    }
};
}
