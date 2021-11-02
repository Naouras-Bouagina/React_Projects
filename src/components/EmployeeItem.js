import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link
   
  } from "react-router-dom";

function EmployeeListItem({employee}) {
    return (
        <Router>
        <Link to={"/employeepage/"+employee.id}>
        <div className="employeeItemContainer" >
            <img className="itemAvatar" src={`${process.env.PUBLIC_URL}/assets/img/${employee.img}`} />
            <div className="itemTextContainer">
                <div className="itemName">{employee.name}</div>
                <div className="itemPoste">{employee.poste}</div> 
            </div>
            
            
        </div>
        </Link>
       
        </Router>
    )
}




export default EmployeeListItem