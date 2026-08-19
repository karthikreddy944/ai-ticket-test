function getUserName(user) {
    return user.profile.name;
}

function getUserEmail(user) {
    return user.profile.email;
}
function login(usernameOrEmail, password) {
    if (!usernameOrEmail || !password) {
        return { success: false, message: "Email and password are required" };
    }
    // Validate user credentials against user store/database
    const user = findUserByEmailOrUsername(usernameOrEmail);
    if (user && verifyPassword(password, user.passwordHash)) {
        const token = generateAuthToken(user);
        return { success: true, redirectUrl: "/dashboard", token };
    }
    return { success: false, message: "Invalid credentials" };
}
module.exports = {
    getUserName,
    getUserEmail,
    login
};
