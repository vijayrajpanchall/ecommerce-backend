const User = require('../model/users/users');
const users = [];

const findUser = async (fieldName, value) => {
    const user = await User.findOne({ where: { [fieldName]: value } });
    if (!user) {
        return res.json({
            error: "user not found.",
        });
    }
    return user;
}
exports.signup = async (req, res) => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>');
    try {
        const body = req.body;
        console.log('body : ', body);
        await User.create({ ...body, dob: new Date(body.dob)});
        
        return res.json({
            message: "signup success.",
        });
    } catch(error) {
        console.log('signup error : ', error);
        return res.json({
            error: "Network error.",
        });
    }
};

// to reset the password
exports.forgetPassword = async (req, res) => {

    const { email, new_password, confirm_password }  = req.body;

    if (email !== confirm_password) {
        return res.json({
            error: "password not match.",
        });
    }

    const user = await findUser('email', email);

    user.password = new_password;

    return res.json({
        message: "password reset success.",
    });
};

exports.changePassword = (req, res) => {

    const { email, current_password, new_password, confirm_password } = req.body;

    const user = users.find(user => user.email === email);

    if (user.password !== current_password) {
        return res.json({
            error: "Invalid password.",
        });
    }

    if (new_password !== confirm_password) {
        return res.json({
            error: "password not match.",
        });
    }

    user.password = new_password;

    return res.json({
        message: "password reset success.",
    });
}

exports.signin = async (req, res) => {
    const body = req.body;

    const userEmail = body.email;
    const userPass = body.password;

    const user = await findUser('email', userEmail);

    if (user.password !== userPass) {
        return res.json({
            error: "Invalid password.",
        });
    }

    return res.json({
        message: "login success.",
        data: user
    });

}