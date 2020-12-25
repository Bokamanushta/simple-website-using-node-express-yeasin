const express = require('express')

const speakerRoute = require('./speakers')
const feedbackRoute = require('./feedback')

const router = express.Router()

module.exports = (params) => {
    router.get('/', (req, res) => {
        res.render('pages/index', {
            pageTitle: 'welcome'
        })
    })

    router.use('/speakers', speakerRoute(params))

    router.use('/feedback', feedbackRoute(params))

    return router
}