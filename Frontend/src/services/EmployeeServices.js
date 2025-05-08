import axios from "axios";

const EMPLOYEE_API_BASED_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASED_URL);
    }
    addEmployee(employee){
        return axios.post(EMPLOYEE_API_BASED_URL,employee);
    }
    getEmployeeById(empId){
        return axios.get(EMPLOYEE_API_BASED_URL+'/'+empId);
    }
    updateEmployee(employee,empId){
        return axios.put(EMPLOYEE_API_BASED_URL+'/'+empId,employee);
    }
    deleteEmployee(empId){
        return axios.delete(EMPLOYEE_API_BASED_URL+'/'+empId);
    }

}

export default new EmployeeService()