import { Router } from 'express';

// alles was im departmentController definiert wird, wird mit dem * importiert
import * as departmentController from '../controllers/departmentController.js';

const departmentRouter = Router();

departmentRouter
    .post('/department', departmentController.createDepartment)
    .get('/departments', departmentController.getDepartments)
    .get('/department/:id', departmentController.getDepartment)
    .patch('/employee/:id', departmentController.updateDepartment)
    .delete('/employee/:id', departmentController.deleteDepartment)
    .delete('/department', departmentController.deleteDepartments);

export default departmentRouter;
