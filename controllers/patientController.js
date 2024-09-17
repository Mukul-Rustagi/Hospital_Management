const Patient=require('../models/patient');
exports.getPatients=async(req,res)=>{
    try{
        const getPatient=await Patient.find();
        res.status(201).json({
            success:true,
      data:getPatient,
      message:"Entire todo data is fetch"
        })
    }

    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}

exports.createPatient=async(req,res)=>{
    console.log(req.body);
    try {
        // Mongoose's create method handles the instantiation and saving to the database in one step
        const savedPatient = await Patient.create(req.body); 
        res.status(201).json({
      success:true,
      data:savedPatient,
      message:"Entire data is Create"
        });
      } 
      catch (error) {
        console.log(error);
        console.error(error);
        res.status(400).json({ message: error.message });
      }
}

exports.getPatientById=async(req,res)=>{
  try{
    const uupdatePatient=await Patient.findById(req.param.id);
    if(!updatePatient){
      return res.status(404).json({
        success:"false",
        message:"Patient not found"
      })
    }

    res.status(201).json({
      sucess:"true",
      message:"Patient found successfully",
      data:updatePatient
    });
  }
  catch(err){
    console.log(err);
    console.error(err);
    res.status(500).json({
      success:"false",
      message:"Patient not found"
    });
  }
}


exports.updatePatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json({
      success:"true",
      message:"Updation successfully",
      data:updatedPatient 
  });
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


