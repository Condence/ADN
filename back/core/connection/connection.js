const mongoose = require("mongoose");

// MONGODB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    poolSize: 10,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
    console.log('database connected.');
});

mongoose.connection.on("error", (err) => {

});

mongoose.connection.on("disconnected", () => {

});