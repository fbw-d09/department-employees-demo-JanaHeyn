import React, { useState } from 'react';
import './App.scss';


function App() {
  const [ showDepartments, setShowDepartments ] = useState(false);
    const [ showEmployees, setShowEmployees ] = useState(false);

    const [ depData, setDepData ] = useState([]);
    const [ empData, setEmpData ] = useState([]);


    const fetchDepartmentData = async () => 
    {
        const data = await ((await fetch('http://localhost:4000/api/departments'))).json();
        setDepData(data);
    }

    const fetchEmployeeData = async () => 
    {
        const data = await ((await fetch('http://localhost:4000/api/employees'))).json();
        setEmpData(data);
    }

    const handleDepartments = () => {
        if(!showDepartments) {
            fetchDepartmentData();
        }
        setShowDepartments(!showDepartments);
    }

    const handleEmployees = () => {
        if(!showEmployees) {
            fetchEmployeeData();
        }
        setShowEmployees(!showEmployees);
    }


    return (
        <div className="App">
            <h1>Bitte klicken</h1>
            <div className="App__box__btn">
                <button onClick={handleDepartments}>Departments</button>
                <button onClick={handleEmployees}>Employees</button>
            </div>

            <div className="App__box__list">
                <ul className='App__box__list__li'>
                    { 
                        showDepartments &&
                        depData.map((data, index) => {
                            return(
                                <li key={index}> 
                                    <div className='App__box__list__dep'>
                                        <h3>{data.name}</h3>
                                        <p>{data.location}</p>
                                    </div>
                                </li>
                            )})
                    }
                </ul>

                <ul className='App__box__list__re'>
                    {
                        showEmployees &&
                        empData.map((data, index) => {
                            return(
                                <li key={index}>
                                    <div className="App__box__list__emp">
                                        <h3>{data.name}</h3>
                                        <p>{data.department.name}</p>
                                        <p>{data.email}</p>
                                        <p>{data.salary}</p>
                                    </div>
                                </li>
                            )
                        })

                    }
                </ul>

            </div>
        </div>
    )
  
}

export default App
