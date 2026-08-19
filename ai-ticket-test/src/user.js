function getUserName(user) {
    return user.profile.name;
}

function getUserEmail(user) {
    return user.profile.email;
}

module.exports = {
    getUserName,
    getUserEmail
};
