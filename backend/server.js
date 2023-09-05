import express from "express";
import departmentRouter from './routes/departmentRoute.js';
import employeeRouter from './routes/employeeRoute.js';
import "./lib/connect_db.js";
import setCors from './middleware/cors.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// middleware um den body zu lesen
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middelware
app.use(setCors);

// eigene middlewares für routen
app.use('/api', departmentRouter);
app.use('/api', employeeRouter);

// Fehlermeldungen behandeln
app.use((req, res) => {
    res.status(404).json({ message: 'Page not found!'});
});

// spezieller Errorhandler
// 4 Parameter sind nötig, damit express diesen speziellen Errorhandler erkennt

// zb in einer Funktion irgendeines Controllers:
// wenn error in catch landet und wir im next() was reinschreiben
app.use((err, req, res, next) => {
    console.log(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send(err.message);
});


app.listen(port, () => console.log("Server is running on port: " + port));
