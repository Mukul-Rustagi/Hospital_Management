const express=require("express");
const app=express();

require("dotenv").config();

const PORT=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const db = require("./config/database");
db.connect();

const patientRoutes = require('./routes/patientRoutes');

const billingRoutes=require('./routes/billingRoutes')

const doctorRoutes=require("./routes/doctorRoutes")

const appointmentRoutes=require("./routes/appointmentRoutes");

app.use('/api/billing', billingRoutes);

app.use('/api/patients', patientRoutes);

app.use('/api/doctors',doctorRoutes);

app.use('/api/appointment',appointmentRoutes);


app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
})