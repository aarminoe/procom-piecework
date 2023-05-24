import { CognitoUserPool} from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: 'us-east-2_Lnd5VRIhj',
    ClientId: "5pb4akc86bi22qhv2hgflurqs3"
}

export default new CognitoUserPool(poolData)