const mongoose = require("mongoose");
require("dotenv").config();
// put your mongoAtlas DB link as string in connect function.
const connection = mongoose.connect("mongodb+srv://chetan:12345@cluster0.4jf6kcr.mongodb.net/cointab?retryWrites=true&w=majority");

module.exports = { connection };
