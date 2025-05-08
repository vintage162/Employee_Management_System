
import './App.css';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router ,Route , Routes} from 'react-router-dom'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (

    <> 
      <Router>
        
              <Header/>
                <div className="container">
                  <Routes>
                    <Route path='/' element={<ListEmployeeComponent />} />
                    <Route path='/employees' element={<ListEmployeeComponent />} />
                    {/* Here add both add and update functionality in single comp which is AddEmployeeComponent */}
                    <Route path='/add-employee/:empId' element={<AddEmployeeComponent/>} />
                    {/* <Route path='/update-employee/:empId' element={<UpdateEmployeeComponent/>} /> */}
                    <Route path='/view-employee/:empId' element={<ViewEmployeeComponent/>} />
                  </Routes>
                </div>
                
              <Footer/>
      
       </Router>
    </>

    
  );
}

export default App;
