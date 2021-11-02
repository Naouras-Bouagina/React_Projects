import React, { Component } from 'react'
import EmployeePage from './components/EmployeePage'
import HomePage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";



class App extends Component {
    constructor() {
        super()
        this.state = {
           // clickedEmployee : null,
            searchedText : '',
            employees: [{
                    id: 1,
                    name: 'Anis',
                    poste: 'CEO',
                    phone: 22323424,
                    email: 'anis@itbs.tn',
                    img: 'img_avatar.png',
                },
                {
                    id: 2,
                    name: 'Asma',
                    poste: 'CTO',
                    phone: 53525323,
                    email: 'asma@itbs.tn',
                    img: 'img_avatar3.png',
                },
                {
                    id: 3,
                    name: 'Ahmed',
                    poste: 'CMO',
                    phone: 98383484,
                    email: 'ahmed@itbs.tn',
                    img: 'img_avatar1.png',
                }
            ]
        }
    }

    /*clickedItem = (id=null)=>{
        this.setState({
          ...this.state,
          clickedEmployee : id
        })
      }*/
    
      handleSearch = (searchedText) => {
        this.setState({
          ...this.state,
          searchedText
        },()=>{console.log(this.state.searchedText)} )
      }
    
      render() {
        const filtredEmployees = this.state.employees.filter((employee)=>(
          employee.name.includes(this.state.searchedText) ||
          employee.poste.includes(this.state.searchedText) ||
          employee.phone.includes(this.state.searchedText) || 
          employee.email.includes(this.state.searchedText)
        ))
        return (
          
          <Router>
            <div className="App"  style={{display : 'flex'}}>
                <Link to='/employeepage/1'>Link</Link>
              
              
             
                <Switch>



                <Route path="/employeepage/:idEmployee">
                  <EmployeePage 
                  
                  employees={this.state.employees} 
                 />
              
                </Route>



                
                <Route exact path="/" >
                <HomePage  
                employees={!this.state.searchedText ? this.state.employees : filtredEmployees} 
                  handleSearch={this.handleSearch}
                 
                  />
              </Route>
               
             
            
               
                
                 
              </Switch>
              
              
            </div>
            </Router>
        )
      }
      
    }
    
    

export default App