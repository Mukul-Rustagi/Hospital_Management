const mongoose=require("mongoose");

const billingSchema=new mongoose.Schema({
    patientId:{
        type: mongoose.Schema.Types.ObjectId, // Reference to Patient
        ref: 'Patient',
        required: true
    },services:[
        {
            description: String,  
            amount: Number
        }
    ],
    totalAmount:{
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['Paid', 'Unpaid', 'Pending'],
        default: 'Unpaid'
    }
},{
    timestamps:true
});

module.exports=mongoose.model('Billing',billingSchema);