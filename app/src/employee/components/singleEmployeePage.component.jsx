import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import store from '../../../store.js';


require('../../../styles/singlearticlepage.style.css');


class SingleEmployeePageComponent extends React.Component{

    constructor(){

        super();
        this.showDate = this.showDate.bind(this);
    }
    showDate(date){
    var publishDate = new Date(date),
        year = publishDate.getFullYear(),
        month = publishDate.getMonth(),
        day = publishDate.getDate(),
        hour = publishDate.getHours(),
        minute = publishDate.getMinutes();
    var createdDate = month + "/" + day + "/" + year
                      + " " + hour +":"+ minute;
    return createdDate;
  }
    render(){
        console.log(store.getState().currentEmployee, "in single currentEmployee");
        return (
            <div className="signle-employee-page">
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--1-col"></div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                      <div className="employee-item-title">姓名</div>
                      <div className="employee-item-content">{this.props.employee.name}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">职位</div>
                        <div className="employee-item-content">{this.props.employee.position}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">工号</div>
                        <div className="employee-item-content">{this.props.employee.badgeNumber}</div>
                  </div>
                </div>

                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--1-col"></div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                      <div className="employee-item-title">性别</div>
                      <div className="employee-item-content">{this.props.employee.gender}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">出生日期</div>
                        <div className="employee-item-content">{this.getInitialDate(this.props.employee.birthday)}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">身份证</div>
                        <div className="employee-item-content">{this.props.employee.idNumber}</div>
                  </div>
                </div>

                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--1-col"></div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                      <div className="employee-item-title">联系电话</div>
                      <div className="employee-item-content">{this.props.employee.phoneNumber}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">入职时间</div>
                        <div className="employee-item-content">{this.getInitialDate(this.props.employee.onBoardDate)}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">部门</div>
                        <div className="employee-item-content">{this.props.employee.department}</div>
                  </div>
                </div>

                <div className="mdl-grid">
                      <div className="mdl-cell mdl-cell--7-col"></div>
                      <div className="mdl-cell mdl-cell--1-col">
                            <button className="mdl-button mdl-js-button mdl-button--primary employee-item-button"
                            onClick={this.editPost.bind(this, this.props.employee)}>
                              编辑
                            </button>
                      </div>
                      <div className="mdl-cell mdl-cell--1-col">
                            <button className="mdl-button mdl-js-button mdl-button--accent employee-item-button"
                            onClick={this.deletePost.bind(this, this.props.employee)}>
                              删除
                            </button>
                      </div>
                </div>
            </div>

            )
    }
    deletePost(employeeObj) {
        this.props.asynDeleteMiddleware(this.props.employee._id, this.props.employee.department);
        hashHistory.push('/employees');
    }
    editPost(employeeObj) {
        this.props.setCurrentEmployee(this.props.employee);
        this.props.asynGetEmployeeByDepartmentMiddleware("新员工");
        hashHistory.push('/employees');
    }

    getInitialDate(birthday) {
      if(!birthday) {
        console.log(birthday, "wrong birthday!!!!!")
        return;
      }
      return birthday.slice(0,10);
    }
}
export default SingleEmployeePageComponent;
