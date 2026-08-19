function login(username, password) {
    if (username === "admin" && password === "admin123") {
        return true;
    }

    return false;
}

module.exports = { login };
