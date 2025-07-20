function chechIsAuth(req, res, next) {
    const { access_token } = req.cookies;
    if (!access_token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }

    try {
        const decoded = jwt.verify(access_token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token", error: error.message });
    }
}
module.exports = chechIsAuth;