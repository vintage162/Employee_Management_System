import { Component } from "react";
import { withRouter } from "../services/WithRouter";
import EmployeeServices from "../services/EmployeeServices";
class AddEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            empId: this.props.params.empId,
            firstName:"",
            lastName:"",
            designation:"",
            department:"",
            emailId:""
        }
this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
this.addEmployee=this.addEmployee.bind(this);


    }
    componentDidMount(){
           if(this.state.empId == -1){
            return
           }
           else{
                EmployeeServices.getEmployeeById(this.state.empId).then((res)=>{
                    let employee = res.data;
                    this.setState({
                        firstName:employee.firstName,
                        lastName:employee.lastName,
                        emailId:employee.emailId,
                        designation:employee.designation,
                        department:employee.department
                    });
                });
           }
          }

    addEmployee=(e)=>{
        e.preventDefault();
        let employee = {firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId,
            designation:this.state.designation,department:this.state.department};
            console.log('employee =>'+JSON.stringify(employee));


            if(this.state.empId == -1){
                EmployeeServices.addEmployee(employee).then(res=>{
                    this.props.navigate("/employees");
                });
               }
               else{
                EmployeeServices.updateEmployee(employee,this.state.empId).then(res=>{
                                this.props.navigate("/employees");
                });

               }


            
    }


    changeFirstNameHandler=(event)=>{
        this.setState({firstName:event.target.value});
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName:event.target.value});
    }
    changeEmailIdHandler=(event)=>{
        this.setState({emailId:event.target.value});
    }
    changeDesignationHandler=(event)=>{
        this.setState({designation:event.target.value});
    }
    changeDepartmentHandler=(event)=>{
        this.setState({department:event.target.value});
    }

    cancel(){
        this.props.navigate("/employees");
    }

    getTitle(){
        if(this.state.empId==-1){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() { 
        return ( 
            <><br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                                <div className="card-body">
                                    <form>

                                        <div className="form-group">
                                            <label>First Name : </label>
                                                <input placeholder="First Name" name="firstName" 
                                                className="form-control" value={this.state.firstName}
                                                onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name : </label>
                                                <input placeholder="Last Name" name="lastName" 
                                                className="form-control" value={this.state.lastName}
                                                onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email  : </label>
                                                <input placeholder="EmailId" name="emailId" 
                                                className="form-control" value={this.state.emailId}
                                                onChange={this.changeEmailIdHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Designation : </label>
                                                <input placeholder="Designation" name="designation" 
                                                className="form-control" value={this.state.designation}
                                                onChange={this.changeDesignationHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Department : </label>
                                                <input placeholder="Department" name="department" 
                                                className="form-control" value={this.state.department}
                                                onChange={this.changeDepartmentHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.addEmployee}>ADD</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    </form>

                                </div>

                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default withRouter(AddEmployeeComponent);