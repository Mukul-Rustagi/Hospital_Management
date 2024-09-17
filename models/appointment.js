const mongoose=require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    patientId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient',
            required: true
    },
    appointmentDate:{
        type:Date,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum: ['Scheduled', 'Completed', 'Cancelled'],
        default: 'Scheduled'
    }
},
{
    timestamps:true
});

module.exports=mongoose.model("Appointment",appointmentSchema);