const express = require('express');
const {
  getDoctors,
  createDoctor,
  getDoctorById,
  updateDoctor,
//   deleteDoctor,
} = require('../controllers/doctorController');

const router = express.Router();

router.get('/',getDoctors);           
router.post('/',createDoctor);        
router.get('/:id',getDoctorById);     
router.put('/:id',updateDoctor);      
// router.delete('/:id',deleteDoctor);   

module.exports = router;
