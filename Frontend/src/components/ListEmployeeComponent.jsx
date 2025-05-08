import { Component } from "react";
import EmployeeServices from "../services/EmployeeServices";
import { withRouter } from "../services/WithRouter";



class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

            this.state={
                employee:[]
            }
            this.addEmployee = this.addEmployee.bind(this);
            this.editEmployee = this.editEmployee.bind(this);
            this.deleteEmployee = this.deleteEmployee.bind(this);

    }

    viewEmployee(empId){
            this.props.navigate(`/view-employee/${empId}`);
    }

    deleteEmployee(empId){
            EmployeeServices.deleteEmployee(empId).then((res)=>{
                this.setState({employee:this.state.employee.filter(employee=>employee.empId!==empId)});
            });
    }

    editEmployee(empId){
            this.props.navigate(`/add-employee/${empId}`);
    }
    componentDidMount(){
        EmployeeServices.getEmployees().then((res)=>{
                this.setState({employee:res.data});
        });
    }

    addEmployee() {
        this.props.navigate("/add-employee/-1");
      }
    

    render() { 
        return ( 
            
            <>
            
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>

                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Designation</th>
                                <th>Department</th>
                                <th>Email Id</th>
                                <th>Action</th>
                        
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee =>
                                        <tr key={employee.empId}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.designation}</td>
                                            <td>{employee.department}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button onClick={()=>this.editEmployee(employee.empId)}
                                                    className="btn btn-info">Update</button>
                                                <button onClick={()=>this.deleteEmployee(employee.empId)}
                                                    className="btn btn-danger"
                                                    style={{marginLeft:"10px"}}>Delete</button>       
                                                <button onClick={()=>this.viewEmployee(employee.empId)}
                                                    className="btn btn-info"
                                                    style={{marginLeft:"10px"}}>View</button>  
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </>
         );
    }
}
 
export default withRouter(ListEmployeeComponent);