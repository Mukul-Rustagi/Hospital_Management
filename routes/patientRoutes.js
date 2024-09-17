const express = require('express');
const {
  getPatients,
  createPatient,
  getPatientById,
  updatePatient
//   deletePatient,
} = require('../controllers/patientController');
// const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/',getPatients).post('/',createPatient);        // Create a new patient
router.get('/:id', getPatientById);     // Get patient by ID
router.put('/:id',updatePatient);      // Update a patient
// router.delete('/:id', protect, deletePatient);   // Delete a patient

module.exports = router;
