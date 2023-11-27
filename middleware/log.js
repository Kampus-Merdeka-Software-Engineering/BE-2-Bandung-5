const logRequest = (req, res, next) => {
    console.log('Log Requsest on', req.path);
    next();
}
module.exports = logRequest;