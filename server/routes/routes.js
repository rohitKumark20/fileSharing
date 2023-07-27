const express = require('express');
const {uploadImage, downloadImage} = require('../controller/image_controller.js')
// const  = require('../controller/image_controller.js')
const upload = require('../utils/upload.js')

const route = express.Router();

route.post('/upload',upload.single('file'),uploadImage);
route.get('/file/:fileId',downloadImage);

module.exports = route;