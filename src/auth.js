// src/auth.js
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_3CWAtYwo4', // Replace with actual User Pool ID
    ClientId: '2m1tp4vpapf6o4aemu5h51oj6d',  // Replace with actual App Client ID
};

export default new CognitoUserPool(poolData);
