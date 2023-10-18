const CognitoIdentity = require('../services/cognito');

const ConitoIdentityService = CognitoIdentity();

const signup = async (req, res) => {
    const { email, password, nickname, phone_number } = req.body;

    const cognitoParams = {
        email,
        password,
        nickname,
        phone_number,
    };

    try {
        const response = await ConitoIdentityService.signup(cognitoParams);
        res.status(200).json({
            msg: 'User signup successfully',
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

const signupConfirm = async (req, res) => {
    const { email, code } = req.body;

    const cognitoParams = {
        username: email,
        confirmationCode: code,
    };

    try {
        const response = await ConitoIdentityService.signupConfirm(cognitoParams);
        res.status(200).json({
            msg: 'Email confirmed successfully',
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;

    const cognitoParams = {
        username: email,
        password: password,
    };

    try {
        const response = await ConitoIdentityService.signin(cognitoParams);
        res.status(200).json({
            msg: 'User signin successfully',
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

module.exports = {
    signin,
    signup,
    signupConfirm,
};
