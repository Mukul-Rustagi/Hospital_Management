const Billing = require('../models/billing');
const Patient = require('../models/patient');

const createBill=async(req,res)=>{
    try{
        const {patientId,services}=req.body;
        let totalAmount=services.reduce((total,service)=>total+service.amount,0);

        const bill=await Billing.create({
            patientId,
            services,totalAmount
        });

        res.status(201).json({
            success:"true",
            message:'Billing record created successfully',
            message:bill
        })
    }

    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
          success:"false",
          message:"updation not complete"
        })
      }
};




const getBillsByPatient = async (req, res) => {
    try {
        const patientId = req.params.patientId;

        // Find all bills related to the patient
        const bills = await Billing.find({ patientId }).populate('patientId');

        res.status(200).json({
      sucess:"true",
      message:"Patient found successfully",
      data:bills
        });
    } 
    catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
          success:"false",
          message:"Patient not found successfully"
        });
    }
};


const updatePaymentStatus = async (req, res) => {
    try {
        // const billId = req.params.billId;
        const { patientId } = req.params;
        const { paymentStatus } = req.body;

        // Update the payment status of the bill
        // const updatedBill = await Billing.findByIdAndUpdate(billId, { paymentStatus }, { new: true });
        // console.log(updatedBill);


        const updatedBill = await Billing.updateMany({ patientId: patientId }, {$set: { paymentStatus: paymentStatus }}, { new: true });


        if (!updatedBill) {
            return res.status(404).json({ message: 'Bill not found' });
        }

        res.status(200).json({ 
            success:"true",
            message: 'Payment status updated', updatedBill });
    } 
    
    catch (error) {
        res.status(500).json({ 
            success:"false",
            message: 'Error updating payment status', error });
    }
};


module.exports = {
    createBill,
    getBillsByPatient,
    updatePaymentStatus
};