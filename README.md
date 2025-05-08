# 🧑‍💼 Employee Management System

This is a full-stack web application for managing employee records. It includes a 
**React.js frontend** and a **Spring Boot backend**, designed to perform CRUD operations on employee data.

---
Project Structure

Employee_Management_System/
├── frontend/ # React.js application
└── backend/ # Spring Boot application

## 🚀 Features

### Frontend (React.js)
- List all employees
- Add a new employee
- Update employee details
- Delete an employee
- Routing with `react-router-dom`

### Backend (Spring Boot)
- REST APIs for employee management
- Uses Spring Data JPA with H2/MySQL
- Cross-Origin Resource Sharing (CORS) enabled

---

## 🛠 Tech Stack

- **Frontend**: React.js, Axios, Bootstrap
- **Backend**: Spring Boot, Spring Data JPA
- **Database**: MySQL (or H2 for testing)
- **Tools**: Maven, Postman

---

## ⚙️ Getting Started

### Backend Setup

1. Navigate to `backend/`
2. Open in your IDE Spring Tool Suite (like IntelliJ or Eclipse)
3. Run "EmployeeManagementSystemApplication.java"
4. Ensure MySQL is running or use H2

### Frontend Setup

1. Navigate to `frontend/`
2. Run:
bash
npm install
npm start

API Endpoints

Method          	Endpoint	                 Description
GET	         /api/v1/employees           	Get all employees
POST	       /api/v1/employees           	Add a new employee
PUT       	 /api/v1/employees/{id}	     Update an employee
DELETE     	/api/v1/employees/{id}  	    Delete an employee


