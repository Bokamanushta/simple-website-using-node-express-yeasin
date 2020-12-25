const express = require('express')

const router = express.Router()

module.exports = (params) => {

    const {speakerService} = params

    router.get('/',async (req, res) => {
        const speakers = await speakerService.getList()
        return res.json(speakers)
    })

    router.get('/:name', (req, res) => {
        return res.send(`Speakers name is : ${req.params.name}`)
    })
    return router
}