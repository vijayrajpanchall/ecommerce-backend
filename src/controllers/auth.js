const createToken = require("../core/middleware/jwt-token");
const errorMsgs = require("../core/static/error-msgs/user");
const User = require("../model/users/users");

const findUser = async (fieldName, value) => {
    try {
        const user = await User.findOne({ [fieldName]: value });
        if (!user) {
            throw errorMsgs.USER_NOT_FOUND;
        }
        return user;
    } catch (error) {
        throw error;
    }
};

exports.signup = async (req, res) => {
    try {
        const body = req.body;

        await User.create({ ...body, dob: new Date(body.dob) });

        return res.json(errorMsgs.USER_CREATED);
    } catch (error) {
        console.log("signin error : ", error);
        return res.status(401).json(error);
    }
};

exports.forgetPassword = async (req, res) => {
    try {
        const { email, new_password, confirm_password } = req.body;

        if (new_password !== confirm_password) {
            throw errorMsgs.PASSWORD_NOT_MATCH;
        }

        const user = await findUser("email", email);

        user.password = new_password;
        await user.save();

        return res.json(errorMsgs.PASSWORD_RESET);
    } catch (error) {
        console.log("signin error : ", error);
        return res.status(401).json(error);
    }
};

exports.changePassword = async (req, res) => {
    try {
        const { email, current_password, new_password, confirm_password } = req.body;

        const user = users.find((user) => user.email === email);

        if (user.password !== current_password) {
            throw errorMsgs.INVALID_PASSWORD;
        }

        if (new_password !== confirm_password) {
            errorMsgs.PASSWORD_NOT_MATCH;
        }

        user.password = new_password;

        await user.save();

        return res.json(errorMsgs.PASSWORD_RESET);
    } catch (error) {
        console.log("signin error : ", error);
        return res.status(401).json(error);
    }
};

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUser("email", email);

        if (!email || !password) {
            throw errorMsgs.USER_NOT_FOUND;
        }

        if (user.password !== req.body.password) {
            throw errorMsgs.INVALID_PASSWORD;
        }

        const token = createToken({
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
        });

        if (token) {
            user.token = token;
            user.save();
        }

        const userData = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        };

        return res.status(200).json({
            message: "login success.",
            userData,
            token,
        });
    } catch (error) {
        console.log("signin error : ", error);
        return res.status(401).json(error);
    }
};
