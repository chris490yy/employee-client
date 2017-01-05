'use strict';

const setEmployeeDepartment = (state = '总经办', action) => {

  switch (action.type) {
    case 'SET_EMPLOYEE_DEPARTMENT':
      return action.department
    default:
      return state
  }
}

export default setEmployeeDepartment
