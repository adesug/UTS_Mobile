const tourismModel = require('../models/tourismModel');

module.exports = {
    getData: (req, res) =>{
        const token = req.header('x-access-token')
        tourismModel.getData(token)
            .then((data) => {
                res.status(200).send({
                    message: 'success',
                    status: true,
                    data: data
                })
            })
            .catch((error) => {
                res.send(error)
            })
    },
    getDataById: (req, res) => {
        const token = req.header('x-access-token');
        const {id} = req.params
        tourismModel.getDataById(token, id)
            .then((data) =>{
                res.status(200).send({
                    message: 'success',
                    status: true,
                    data: data
                })
            })
            .catch((error) => {
                res.send(error)
            })
    },
    postData: (req, res) => {
        const token = req.header('x-access-token');
        const {body} = req
        tourismModel.postData(token, body)
            .then((data) => {
                res.send(data)
            })
            .catch((error) => {
                res.send(error)
            })
    },
    putData: (req, res) => {
        const token = req.header('x-access-token');
        const {id} = req.params
        const {body} = req
        tourismModel.putData(token, id, body)
            .then((data) => {
                res.send(data)
            })
            .catch((error) => {
                res.status(500).send(error)
            })
    },
    deleteData: (req, res) => {
        const token = req.header('x-access-token');
        const { id } = req.params;
        tourismModel.deleteData(token,id)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((error) => {
                res.status(500).send(error)
            })
    }
}