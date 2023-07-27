const File = require('../models/model.js')

const uploadImage = async(req,res) => {
    console.log(req.file)
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }
    try {
        const file = await File.create(fileObj);
        console.log(file);
        res.status(200).json({path:`http://localhost:8000/file/${file._id}`})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}

const downloadImage = async(req,res) => {
    try {
        const file = await File.findById(req.params.fileId);
        file.downloadCount++;

        await file.save();
        
        // console.log(file)
        res.download(file.path,file.name);
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: error.message});
    }
}

module.exports = {uploadImage, downloadImage};