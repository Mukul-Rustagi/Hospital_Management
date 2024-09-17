const express = require('express');
const router = express.Router();
const { createBill, getBillsByPatient, updatePaymentStatus } = require('../controllers/billingController');

// Route to create a new bill
router.post('/create', createBill);

// Route to get all bills for a patient
router.get('/:patientId', getBillsByPatient);

// Route to update payment status
router.put('/:billId', updatePaymentStatus);

module.exports = router;
