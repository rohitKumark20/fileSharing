const {mongoose } = require("mongoose");

const DBconnection = async() => {
    const URI = 'mongodb+srv://FileSharing:filesharingmern2023@cluster0.girumau.mongodb.net/?retryWrites=true&w=majority'
    try {
        await mongoose.connect(URI,{useNewUrlParser: true});
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error while connecting the database",error.message);
    }
}

module.exports = DBconnection;