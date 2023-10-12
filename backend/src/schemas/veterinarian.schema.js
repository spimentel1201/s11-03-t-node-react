import mongoose from 'mongoose';

const veterinarianSchemaDefinition = new mongoose.Schema({
    first_name: String,
    last_name: String,
    speciality: String,
    phone: String,
    license: String,
    photo_url: {
        type: String,
        default: 'https://res.cloudinary.com/dxq0pypxu/image/upload/v1696476957/nn12qmebo7v6qhbwbkdf.png',
    },
    isActive: { type: Boolean, default: true },
});

const Veterinarian = mongoose.model('Veterinarian', veterinarianSchemaDefinition);

export default Veterinarian;