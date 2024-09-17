const Doctor=require("../models/doctor")

exports.getDoctors=async(req,res)=>{
    try{
        const doctors=await Doctor.find();

        res.status(200).json({
            success:"true",
            meassage:"All the doctors are here",
            data:doctors
        });
    }

    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json
        ({
            success:"false",
            message:"All the doctors are here"
        })
    }
}


exports.createDoctor=async(req,res)=>{
    const newDoctor= new Doctor(req.body);
    try{
        const savedDoctor=await newDoctor.save();
        res.status(201).json({
            success:"true",
            message:"Doctor created successfully",
            data:savedDoctor
        });
    }

    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:"false",
            message:"Doctor not created successfully"
        });
    }
}


exports.getDoctorById = async (req, res) => {
    try {
      const doctor = await Doctor.findById(req.params.id); // Find doctor by ID
      if (!doctor) {
        return res.status(404).json({ 
            success:"true",
            message: 'Doctor not found',
            data:doctor 
        });
      }
    } catch (error) {
        console.log(error);
        console.error(error);
      res.status(500).json({ 
        success:"false",
        message:"Doctor not found",

    });
    }
  }

  exports.updateDoctor = async (req, res) => {
    try {
      const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedDoctor) {
        return res.status(404).json({ 
            success:"true",
            message: 'Doctor updated' 
        });
      }
    } 
    catch (error) {
      res.status(500).json({ 
        success:"false",
        message:"Doctor not Updated"});
    }
  };