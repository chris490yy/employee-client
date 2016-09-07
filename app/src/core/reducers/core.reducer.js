import { combineReducers } from 'redux';
import userReducer from '../../user/reducers/user.reducer';
import profileReducer from '../../user/reducers/profile.reducer';
import searchFlagReducer from '../../article/reducers/searchFlag.reducer';
import employeeReducer from '../../employee/reducers/employee.reducer';
import setEmployeeDepartment from '../../employee/reducers/setEmployeeDepartment.reducer';



const coreReducer = combineReducers({

  loginOrRegister: userReducer,
  editBaseInfo: profileReducer,
  search : searchFlagReducer,
  employees : employeeReducer,
  department : setEmployeeDepartment
})

export default coreReducer;