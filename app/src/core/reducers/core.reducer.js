import { combineReducers } from 'redux';
import userReducer from '../../user/reducers/user.reducer';
import profileReducer from '../../user/reducers/profile.reducer';
import employeeReducer from '../../employee/reducers/employee.reducer';
import currentEmployeeReducer from '../../employee/reducers/currentEmployee.reducer';
import setEmployeeDepartment from '../../employee/reducers/setEmployeeDepartment.reducer';



const coreReducer = combineReducers({

  loginOrRegister: userReducer,
  editBaseInfo: profileReducer,
  employees : employeeReducer,
  department : setEmployeeDepartment,
  currentEmployee : currentEmployeeReducer 
})

export default coreReducer;