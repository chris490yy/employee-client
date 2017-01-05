'use strict';

import store from '../../../store.js';

function addEmployee(employee) {
  return { type: 'ADD_EMPLOYEE', employee }
}
function deleteEmployee(employee) {
  return { type : 'DELETE_EMPLOYEE', employee}
}

function updateEmployee(employee) {
  return { type : 'UPDATE_EMPLOYEE', employee}
}
function getEmployeesByDepartment(employees) {
  return { type : 'GET_EMPLOYEES_BY_DEPARTMENT', employees}
}

function setEmployeeDepartment(department) {
  return { type: 'SET_EMPLOYEE_DEPARTMENT', department }
}

export function setCurrentEmployee(employee) {
  return { type: 'SET_CURRENT_EMPLOYEE', employee }
}

export function resetCurrentEmployee() {
  return { type: 'RESET_CURRENT_EMPLOYEE' }
}

function deletePostFromServer(employeeId) {
  return axios.delete('http://localhost:8000/employees/' + employeeId)
}

function postRequestToServer(employee) {
  return axios.post('http://localhost:8000/employees', {employee})
}

function putRequestToServer(employee) {
  return axios.put('http://localhost:8000/employees/' + employee._id, {employee})
}

function getRequestToServer(department) {
  return axios.get('http://localhost:8000/employees' + '/department/' + department)
}

export function asynDeleteMiddleware(employeeId, department) {
  return function (dispatch) {
    return deletePostFromServer(employeeId).then(
      employee => dispatch(deleteEmployee(employee))
    ).then(() => {
      getRequestToServer(department).then((res) => {
        setStoreAfterUpdate(res, department, dispatch);
      });
    })
    .catch(err => console.log(err));
  };
}
export function asynPostMiddleware(employee) {
  return function (dispatch) {
    return postRequestToServer(employee).then(
      newEmployee => dispatch(addEmployee(newEmployee))
    ).then(() => {
      getRequestToServer(employee.department).then((res) => {
        setStoreAfterUpdate(res, employee.department, dispatch);
      });
    })
    .catch(err => console.log(err));
  };
}

export function asynPutMiddleware(employee) {
  return function (dispatch) {
    return putRequestToServer(employee).then(
      updatedEmployee => dispatch(updateEmployee(updatedEmployee))
    ).then(() => {
      getRequestToServer(employee.department).then((res) => {
        setStoreAfterUpdate(res, employee.department, dispatch);
      });
    })
    .catch(err => console.log(err));
  };
}

export function asynGetEmployeeByDepartmentMiddleware (department) {
  return function (dispatch) {
    return getRequestToServer(department).then((res) => {
        setStoreAfterUpdate(res, department, dispatch);
    }).then(() => console.log('after choose department', store.getState()))
    .catch(err => console.log(err));
  }
}

function setStoreAfterUpdate(res, department, dispatch) {
    dispatch(getEmployeesByDepartment(res.data.employees));
    dispatch(setEmployeeDepartment(department));
}

