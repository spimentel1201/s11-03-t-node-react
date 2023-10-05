import mongoose from 'mongoose';

const petSchemaDefinition = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    size: { type: Number, required: true },
    weight: { type: Number, required: true },
    suffering: { type: String },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
        required: true
    },
});

const Pet = mongoose.model('Pet', petSchemaDefinition);

export default Pet;