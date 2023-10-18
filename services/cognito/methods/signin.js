const { AuthFlowType, CognitoIdentityProviderClient, InitiateAuthCommand } = require('@aws-sdk/client-cognito-identity-provider');

const signin = (clientId, cognitoParams) => {
    const { username, password } = cognitoParams;

    const client = new CognitoIdentityProviderClient({ region: process.env.AWS_COGNITO_REGION });

    const command = new InitiateAuthCommand({
        AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password,
        },
        ClientId: clientId,
    });

    return client.send(command);
};

module.exports = signin;
