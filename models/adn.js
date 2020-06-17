var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adnSchema = new Schema({
    dna: [{
        type: String,
        required: [true, 'Es necesario mandar los DNA'],
        default: undefined,
    }, ],
    mutation: { type: Boolean, required: false, default: false },
    date: { type: Date, required: false },
});

module.exports = mongoose.model('ADN', adnSchema);