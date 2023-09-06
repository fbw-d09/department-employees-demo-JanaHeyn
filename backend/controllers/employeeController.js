import Employee from '../models/employee.js';

export const createEmployee = async (req, res, next) => {
    try {
        const { name, email, salary, hireDate, department } = req.body;
        const newEmployee = new Employee({ name, email, salary, hireDate, department });

        await newEmployee.save();
        res.status(201).json(newEmployee);

    } catch(error) {
        // console.log({error});
        // res.status(500).json({
        //     message: 'Server error!'
        // });
        next(error);
    }
}

export const getEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Employee.findById(id).populate('department', '-_id');
        res.status(200).json(response);

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
}

export const getEmployees = async (req, res) => {
    try {
        const response = await Employee.find().populate('department', '-_id');
        res.status(200).json(response);

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
}

export const updateEmployee = async (req, res) => {
    try {
        const response = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // const response = await Employee.findByIdAndUpdate(req.params.id, req.body, 
        //     { new: true, overwrite: true });
        // const response = await Employee.findOneAndReplace({ _id: req.params.id }, req.body, 
        //     { new: true });
        // const response = await Employee.updateOne({ _id: req.params.id }, req.body);
        res.status(200).json(response);

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Employee removed!'});

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
}

export const deleteEmployees = async (req, res) => {
    try {
        await Employee.deleteMany();
        res.status(200).json({ message: 'All employees removed!'});

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
}
