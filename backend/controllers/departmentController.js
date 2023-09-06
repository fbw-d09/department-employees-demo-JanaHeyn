import Department from '../models/department.js';

export const createDepartment = async (req, res) => {
    try {
        const { name, location } = req.body;
        const newDepartment = new Department({ name, location });

        await newDepartment.save();
        res.status(201).json(newDepartment);

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
};

export const getDepartment = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Department.findById(id);
        res.status(200).json(response);

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
}

export const getDepartments = async (req, res) => {
    try {
        const response = await Department.find();
        res.status(200).json(response);

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
}

export const updateDepartment= async (req, res) => {
    try {
        const response = await Employee.findByIdAndUpdate(req.params.id, req.body,{new:true}) 
        // const response = await Employee.findByIdAndUpdate(req.params.id, req.body, 
        //     { new: true, overwrite: true });
        // const response = await Employee.findOneAndReplace({ _id: req.params.id }, req.body, 
        //     { new: true });
        // const response = await Department.updateOne({ _id: req.params.id }, req.body);
        res.status(200).json(response);

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
}

export const deleteDepartment = async (req, res) => {
    try {
        await Department.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Department removed!'});

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
}

export const deleteDepartments = async (req, res) => {
    try {
        await Department.deleteMany();
        res.status(200).json({ message: 'All departments removed!'});

    } catch(error) {
        console.log({error});
        res.status(500).json({
            message: 'Server error!'
        });
    }
}
