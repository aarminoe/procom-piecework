import { CognitoUserPool} from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: 'us-east-2_5zcAziG5P',
    ClientId: "5e2uf28ou6ni4mfvhjqk1meaif"
}

export default new CognitoUserPool(poolData)