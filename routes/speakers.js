const express = require('express')

const router = express.Router()

module.exports = () => {
    router.get('/', (req, res) => {
        return res.send('Speakers List')
    })

    router.get('/:name', (req, res) => {
        return res.send(`Speakers name is : ${req.params.name}`)
    })
    return router
}