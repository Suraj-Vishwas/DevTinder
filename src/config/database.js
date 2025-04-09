const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://vishwassuraj165:GzGMV1VBcio3FrdA@cluster0.slvsp.mongodb.net/devTinder"
    );
};

module.exports = {connectDB};

