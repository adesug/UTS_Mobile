const db = require('../config/connection');

module.exports = {
    getData: (token) => {
        return new Promise((resolve, reject) => {
            const queryGetUser = 'SELECT * FROM users WHERE token = ?';
            db.query(queryGetUser, token, (err, data) => {
                if (data[0]) {
                    const user_id = data[0].id
                    const queryString = 'SELECT * FROM tourism WHERE user_id = ?';
                    db.query(queryString, user_id, (err, data) => {
                        if (!err) {
                            if (data[0]) {
                                resolve(data)
                            } else {
                                reject({
                                    message: 'success',
                                    status: true,
                                    error: 'Data not Found'
                                })
                            }
                        } else {
                            reject(err)
                        }
                    })
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        error: 'Token is invalid'
                    })
                }
            })
        })
    },
    getDataById: (token, id) => {
        return new Promise((resolve, reject) => {
            const queryGetUser = 'SELECT * FROM users WHERE token = ?';
            db.query(queryGetUser, token, (err, data) => {
                if (data[0]) {
                    const user_id = data[0].id
                    const queryString = 'SELECT * FROM tourism WHERE user_id = ? AND id = ?';
                    db.query(queryString, [user_id, id], (err, data) => {
                        if (!err) {
                            if (data[0]) {
                                resolve(data[0])
                            } else {
                                reject({
                                    message: 'success',
                                    status: true,
                                    error: 'Data not Found'
                                })
                            }
                        } else {
                            reject(err)
                        }
                    })
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        error: 'Token is invalid'
                    })
                }
            })
        })
    },
    postData: (token, body) => {
        return new Promise((resolve, reject) => {
            const queryGetUser = 'SELECT * FROM users WHERE token = ?';
            db.query(queryGetUser, token, (err, data) => {
                if (data[0]) {
                    const user_id = data[0].id
                    const newData = {
                        ...body,
                        user_id: user_id
                    }
                    const queryString = 'INSERT INTO tourism SET ?';
                    db.query(queryString, newData, (err, data) => {
                        if (!err) {
                            resolve({
                                message: 'sucess',
                                status: true,
                                data: newData
                            })
                        } else {
                            reject(err)
                        }
                    })
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        error: 'Token is invalid'
                    })
                }
            })
        })
    },
    putData: (token, id, body) => {
        return new Promise((resolve, reject) => {
            const queryGetUser = 'SELECT * FROM users WHERE token = ?';
            db.query(queryGetUser, token, (err, data) => {
                if (data[0]) {
                    const queryString = 'UPDATE tourism SET ? WHERE id = ?';
                    db.query(queryString, [body, id], (error, data) => {
                        if (!error) {
                            resolve({
                                message: 'success',
                                status: true
                            })
                        } else {
                            reject({
                                message: 'failed',
                                status: false
                            })

                            console.log(err);
                        }
                    })
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        error: 'Token is invalid'
                    })
                }
            })

        })
    },
    deleteData: (token, id) => {
        return new Promise((resolve, reject) => {
            const queryGetUser = 'SELECT * FROM users WHERE token = ?';
            db.query(queryGetUser, token, (err, data) => {
                if (data[0]) {
                    const queryString = 'DELETE FROM tourism WHERE id = ?';
                    db.query(queryString, id, (err, data) => {
                        if (!err) {
                            resolve({
                                message: 'success',
                                status: true
                            })
                        } else {
                            reject({
                                message: 'failed',
                                status: false
                            })
                        }
                    })
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        error: 'Token is invalid'
                    })
                }
            })
        })
    }
}