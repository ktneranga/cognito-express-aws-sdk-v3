const { CognitoIdentityProviderClient, ConfirmSignUpCommand } = require('@aws-sdk/client-cognito-identity-provider');

const signupConfirm = (clientId, cognitoParams) => {
    const { username, confirmationCode } = cognitoParams;

    const client = new CognitoIdentityProviderClient({ region: process.env.AWS_COGNITO_REGION });

    const command = new ConfirmSignUpCommand({
        ClientId: clientId,
        Username: username,
        ConfirmationCode: confirmationCode,
    });

    return client.send(command);
};

module.exports = signupConfirm;
