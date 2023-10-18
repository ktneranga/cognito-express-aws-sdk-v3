const { CognitoIdentityProviderClient, SignUpCommand } = require('@aws-sdk/client-cognito-identity-provider');
require('dotenv').config();

const signup = async (clientId, cognitoParams) => {
    const client = new CognitoIdentityProviderClient({ region: process.env.AWS_COGNITO_REGION });

    const { email, password, nickname, phone_number } = cognitoParams;

    const command = new SignUpCommand({
        ClientId: clientId,
        Username: email,
        Password: password,
        UserAttributes: [
            { Name: 'email', Value: email },
            { Name: 'nickname', Value: nickname },
            { Name: 'phone_number', Value: phone_number },
        ],
    });

    return client.send(command);
};

module.exports = signup;
