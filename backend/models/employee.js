import mongoose from 'mongoose';

// diese Vorgaben werden beim Erstellen des Dokumentes berücksichtig und überprüft
// Beim Ändern allerdings gilt es nicht mehr, heißt Angaben, die required sind beim Erstellen, sind es nicht beim Ändern eines Dokuments
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    salary: Number,
    hireDate: Date,
    department: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    }
});

const Employee = new mongoose.model('Employee', employeeSchema);

export default Employee;
