const rateLimit = require("express-rate-limit");
exports.vehicleLimiter = rateLimit({
    windowMs :60*1000,
    max:3,
    message: "too many requets.please rtry again later."
});