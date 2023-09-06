import { Router } from 'express';

// alles was im employeeController definiert wird, wird mit dem * importiert
import * as employeeController from '../controllers/employeeController.js';

const employeeRouter = Router();

employeeRouter
    .post('/employee', employeeController.createEmployee)
    .get('/employees', employeeController.getEmployees)
    .get('/employee/:id', employeeController.getEmployee)
    .patch('/employee/:id', employeeController.updateEmployee)
    .delete('/employee/:id', employeeController.deleteEmployee)
    .delete('/employee', employeeController.deleteEmployees);

export default employeeRouter;
