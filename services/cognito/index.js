require('dotenv').config();

const CognitoIdentityMethods = require('./methods');

const userPool = {
    userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    clientId: process.env.AWS_COGNITO_CLIENT_ID,
};

class ConitoIdentityService {
    constructor() {
        this.userPool = userPool;
    }

    signup(cognitoParams) {
        return CognitoIdentityMethods.signup(this.userPool.clientId, cognitoParams);
    }

    signupConfirm(cognitoParams) {
        return CognitoIdentityMethods.signupConfirm(this.userPool.clientId, cognitoParams);
    }

    signin(cognitoParams) {
        return CognitoIdentityMethods.signin(this.userPool.clientId, cognitoParams);
    }
}

module.exports = Wrapper = () => {
    return new ConitoIdentityService();
};
