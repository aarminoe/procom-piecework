import { CognitoUserPool} from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: 'us-east-2_UPpavA3jF',
    ClientId: "5hmuo1ccvbq5vevdcmvle6gk03"
}

export default new CognitoUserPool(poolData)