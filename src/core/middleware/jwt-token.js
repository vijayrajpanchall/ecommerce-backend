const jwt = require('jsonwebtoken')

const createToken = (data) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY || "Vijat@123";
    try {
        const token = jwt.sign(data, jwtSecretKey);
        return token;
    } catch (error) {
        console.log();
    }
}

module.exports = createToken;