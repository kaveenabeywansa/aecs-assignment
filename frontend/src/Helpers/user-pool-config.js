import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-north-1_KD6Um4On7",
    ClientId: "7ohj2tqr7b0ej9ri6l4t4rf21i"
}

export default new CognitoUserPool(poolData);