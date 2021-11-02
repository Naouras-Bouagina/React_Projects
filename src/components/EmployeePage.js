import React from 'react'
import { useParams } from 'react-router'
import Header from './Header'

function EmployeePage({employees}) {
    let {idEmployee} = useParams()
    let employee = employees.find(employee => (idEmployee == employee.id))
    return ( <div style = {{ margin: '10px' }} >
        <Header parent = { 'EmployeePage' } /> 
        { employee ? employee.name : "Veillez choisir un employée" }<br/>
        { employee ? employee.poste : "" }<br/>
        { employee ? employee.email : "" }<br/>
        { employee ? employee.phone : "" }<br/>
        
        
        
        
        </div >
    )
}

export default EmployeePage