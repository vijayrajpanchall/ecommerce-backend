const USER_NOT_FOUND = {
    status: 401,
    message: "user not found.",
}

const PASSWORD_NOT_MATCH = {
    status: 401,
    message: "password not match.",
}

const INVALID_PASSWORD = {
    status: 401,
    message: "Invalid password.",
}

const USER_CREATED = {
    status: 200,
    message: "Signup has been completed.",
}

const PASSWORD_CHANGED = {
    status: 200,
    message: "Password has been changed.",
}

const PASSWORD_RESET = {
    status: 200,
    message: "Password has been reset.",
}



module.exports = {
    USER_NOT_FOUND,
    PASSWORD_CHANGED,
    USER_CREATED,
    PASSWORD_NOT_MATCH,
    PASSWORD_RESET,
    INVALID_PASSWORD
}
