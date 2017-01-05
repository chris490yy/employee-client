'use strict';

const currentEmployee = (state = {}, action) => {

  switch (action.type) {
    case 'SET_CURRENT_EMPLOYEE':
      return action.employee
    case 'RESET_CURRENT_EMPLOYEE':
      return {};
    default:
      return state;
  }
}

export default currentEmployee