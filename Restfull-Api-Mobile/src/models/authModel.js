const db = require('../config/connection');
const bcrypt = require('bcrypt');

module.exports = {
    register: (body) => {
        delete body.conf_password;

        return new Promise((resolve, reject) => {
            const saltRounds = Math.floor(Math.random() * 10) + 1;
            bcrypt.hash(body.password, saltRounds, (err, newPassword) => {
                const newUser = {
                    ...body,
                    password: newPassword
                }
                const queryString = "INSERT INTO users SET ?";
                db.query(queryString, newUser, (error, data) => {
                    if(!error){
                        resolve(data)
                    }else{
                        reject(error);
                    }
                })
            })
            
        })   
    },
    login: (body) => {
        const {email, password} = body;

        return new Promise((resolve, reject) => {
            const querySelectUser = 'SELECT id, name, email, password FROM users WHERE email = ?';
            db.query(querySelectUser, email, (err, data) => {
                if(!data[0]){
                    reject({
                        message: "failed",
                        status: false,
                        error : 'User not found'
                    })
                }else{
                    const passwordIsValid = bcrypt.compareSync(password, data[0].password)
                    if(!passwordIsValid){
                        reject({
                            message: 'failed',
                            status: false,
                            error : 'Wrong Password'
                        })
                    }else{

                        const saltRounds = Math.floor(Math.random() * 10) + 1;
                        bcrypt.hash(email, saltRounds, (err, token ) => {
                            const queryUpdateTokenUser = "UPDATE users SET token=? WHERE id = ?"
                            db.query(queryUpdateTokenUser, [token, data[0].id]);
                            let newResponse = {
                                id_user: data[0].id ,
                                name: data[0].name,
                                email: data[0].email,
                                token : token
                            }

                            resolve({
                                message: 'success',
                                status: true,
                                data: newResponse
                            });
                        })
                    }
                }
            })
        })
    }
}