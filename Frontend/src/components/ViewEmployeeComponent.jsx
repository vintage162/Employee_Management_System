import { Component } from "react";
import EmployeeServices from "../services/EmployeeServices";
import { withRouter } from "../services/WithRouter";

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            empId: this.props.params.empId,
            employee:{}
        }
    }
    close(){
        this.props.navigate("/employees");
    }
   componentDidMount(){
    EmployeeServices.getEmployeeById(this.state.empId).then((res)=>{

        this.setState({employee:res.data});

    });
   }
    render() { 
        return ( <>
        
        <br></br><br></br>
                <div>
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Employee Details</h3>
                            <div className="card-body">
                                <div className="row">
                                    <label>Employee First Name : </label>
                                    <div>{this.state.employee.firstName}</div>
                                </div>
                                <div className="row">
                                    <label>Employee Last Name : </label>
                                    <div>{this.state.employee.lastName}</div>
                                </div>
                                <div className="row">
                                    <label>Employee Email : </label>
                                    <div>{this.state.employee.emailId}</div>
                                </div>
                                <div className="row">
                                    <label>Employee Designation : </label>
                                    <div>{this.state.employee.designation}</div>
                                </div>
                                <div className="row">
                                    <label>Employee Department : </label>
                                    <div>{this.state.employee.department}</div>
                                </div>

                            </div>
                            <button className="btn btn-info" onClick={this.close.bind(this)} style={{marginLeft:"10px"}}>Close</button>
                    </div>
                </div>



        </> );
    }
}
 
export default withRouter(ViewEmployeeComponent);