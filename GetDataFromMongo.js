const mongoose = require('mongoose');
5
// Connection URI
const uri = 'mongodb+srv://siddukargar:273301@cluster0.ontdz5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test';

// Define Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Define Model for the "users" collection
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
async function connectToDB() {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
}

// Retrieve data
async function getUserData() {
    try {
        await connectToDB();

        const users = await User.findById('665a09059f93e6f08583a216');
        console.log(users.toObject())

        // for await (const doc of users) {
        //     console.log(doc.toObject());
        //   }
        
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.disconnect();
    }
}

getUserData();