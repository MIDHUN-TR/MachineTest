const express  = require('express')
const Usercontroller = require('../Authentication/UserAuth')
const jwtmiddle  = require('../MiddleWare/jwtmiddleware')
const serviceControl = require('../Authentication/ServicesController')


const router =express.Router()

// for user
router.post('/userlog',Usercontroller.UserLogin)
router.post('/userreg',Usercontroller.userReg)
router.get('/allusers',Usercontroller.allusers)


// for service 
router.post('/addservice',jwtmiddle,serviceControl.addservice)
router.put('/updateservice/:id',jwtmiddle,serviceControl.editService)
router.delete('/deleteService/:id',jwtmiddle,serviceControl.deleteService)
router.get('/allservices' ,jwtmiddle,serviceControl.allservices)

module.exports = router

