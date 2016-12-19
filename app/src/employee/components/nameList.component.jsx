import React from 'react';
import EmployeeItem from './employeeItem.component.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
require('../../../styles/articleList.style.css');

class NameList extends React.Component{

  constructor() {
    super();
    this.createEmployeeItem = this.createEmployeeItem.bind(this);
  }

  createEmployeeItem(employee){
    return (
        <EmployeeItem employee={employee} key={employee._id}/>
    );
  }
  render() {
    let employees;
    if(this.props.employees.length !== 0){
      employees = this.props.employees
      .filter((employee)=>{
        return employee.department === this.props.department;
      })
      .map((employee)=>{
        return this.createEmployeeItem(employee);
      });
    } else {
      employees = [];
    }

    return (
      <div>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--3dp  artiList-container artiList-table">
          <thead>
            <tr  className="artiList-title">
              <th className="mdl-data-table__cell--non-numeric artiList-postItem">姓名</th>
              <th className="mdl-data-table__cell--non-numeric artiList-postItem">性别</th>
              <th className="mdl-data-table__cell--non-numeric artiList-postItem">职位</th>
              <th className="mdl-data-table__cell--non-numeric artiList-postItem">工号</th>
            </tr>
          </thead>
          <tbody>
            {employees}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    employees: store.employees,
    department: store.department,
  }
}
export default connect(mapStateToProps, null)(NameList)
    // if(this.props.search.searchFlag == 'search'){
    //   posts = this.props.search.searchResult
    //   .map((post)=>{
    //     return this.createPostItem(post);
    //   });;
    //   console.log('enter search',posts);
    // } else {
    //    if(this.props.posts.length !== 0){
    //     posts = this.props.posts
    //     .filter((post)=>{
    //       return post.topic === this.props.topic;
    //     })
    //     .map((post)=>{
    //       return this.createPostItem(post);
    //     });
    //   }
    // }
