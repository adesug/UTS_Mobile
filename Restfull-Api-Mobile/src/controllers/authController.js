const authModel = require('../models/authModel');

module.exports = {
    register: (req, res) => {

        const { body } = req;
        if(body.password !== body.conf_password){
            res.status(403).send({
                message: 'failed',
                status: false,
                error: 'Password is not match'
            });
        }else{
            authModel.register(body)
            .then((data) => {
                res.status(200).send({
                    message: 'success',
                    status : true
                });
            })
            .catch((error) => {
                res.status(500).send({
                    message: 'failed register'
                })

                console.log(error);
            })
        }
    },
    login: (req, res) => {
        const { body } = req;
        // console.log(body);
        authModel.login(body)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((error) => {
                res.status(500).send(error)
                console.log(error);
            })
    }
}