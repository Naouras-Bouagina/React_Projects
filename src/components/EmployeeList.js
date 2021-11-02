import React from 'react'
import { ListGroup } from 'react-bootstrap'
import EmployeeItem from './EmployeeItem'

function EmployeeList({employees,clickedEmployee,clickedItem}) {
    //const activeItem = () => (clickedEmployee ? active : null)
    return (
        <ListGroup>
            {employees.map((employee)=>( 
                <ListGroup.Item
                active={employee.id === clickedEmployee}> 
                    <EmployeeItem 
                        key={employee.id} 
                        employee={employee} 
                        clickedItem={clickedItem}  
                        clickedEmployee={clickedEmployee} 
                    />
                </ListGroup.Item> 
            ))}
        </ListGroup>
    )
}

export default EmployeeList