'use strict';
const employeeReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_EMPLOYEE' :
      return  [
          ...state,
          action.employee
        ]
    case 'GET_EMPLOYEES_BY_DEPARTMENT' :
      if(action.employees.length === 0){
        return [...state].concat(action.employees);
      } else {
        return [
          ...state
        ].filter((employee) => {
          return employee.department !== action.employees[0].department;
        }).concat(action.employees);
      }
    case 'DELETE_EMPLOYEE' :
      let index = state.indexOf(action.employee);
      return state.splice(index, 1);

    default:
      return state;
  }
}

export default employeeReducer