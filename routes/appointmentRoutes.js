const express=require("express");
const router=express.Router();

const {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
    updateAppointmentStatus,
    deleteAppointment
}=require("../controllers/appointmentController");

router.post('/',createAppointment);
router.get('/',getAllAppointments);
router.get('/:id',getAppointmentById);
router.put('/:id/status',updateAppointmentStatus);
router.delete('/:id',deleteAppointment);

module.exports=router;