const db = require('../config/connection');

module.exports = {
    checkLogin: (req, res, next) => {
        const token = req.header('x-access-token');
        
        if(!token){
            res.status(401).send({
                message: 'failed',
                status: false,
                error: 'Please login first'
            });
        }else{
            next();
        }
    }
}