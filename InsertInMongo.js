const mongoose = require("mongoose");

// Define user schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Create User model
const User = mongoose.model('User', userSchema);

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://siddukargar:273301@cluster0.ontdz5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test')
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        
        // Insert user function
        async function insertUser(username, email, password) {
            try {
                const user = new User({
                    username: username,
                    email: email,
                    password: password
                });
                await user.save();
                console.log('User inserted successfully:', user);
            } catch (error) {
                console.error('Error inserting user:', error);
            }
        }

        // Invoke Insert Function
        insertUser('sanjay', 'sanjay@gmail.com', 'password123');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });
