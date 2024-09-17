const mongoose=require('mongoose');

const doctorSchema=mongoose.Schema(
    {
    name:
    {
        type: String, 
        required: true
    },
    specialization:
    {
        type: String, 
        required: true
    },
    experience:
    {
        type: Number, 
        required: true
    },
},
{timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);
