import { Router } from 'express';

// alles was im employeeController definiert wird, wird mit dem * importiert
import * as employeeController from '../controllers/employeeController.js';

const employeeRouter = Router();

employeeRouter
    .post('/employee', employeeController.createEmployee)
    .get('/employee/:id', employeeController.getEmployee)
    .get('/employees', employeeController.getEmployees)
    .delete('/employee', employeeController.deleteEmployees);

export default employeeRouter;
