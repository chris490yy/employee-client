import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import store from '../../../store.js';
import departmentList from '../../../init/department.js';


require('../../../styles/singlearticlepage.style.css');


class PostComponent extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        position: '',
        badgeNumber: '',
        gender: '',
        birthday: '',
        idNumber: '',
        phoneNumber: '',
        onBoardDate: '',
        department: ''
      };
      this.employee = store.getState().currentEmployee;

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      if(this.employee.name) {
        let updatedEmployee = Object.assign({}, this.state, { _id : this.employee._id });
        this.props.asynPutMiddleware(updatedEmployee);
      } else {
        this.props.asynPostMiddleware(this.state);
      }

    }

    handleChange(event) {
       let obj = {};
       obj[event.target.name] = event.target.value;
       this.setState(obj);
    }

    handleBack() {
        hashHistory.push('/home');
    }

    getInitialDate(birthday) {
      return birthday.slice(0,10);
    }

    componentWillMount() {
        if(this.employee) {
          let employeeWithoutId = Object.assign({}, this.employee);
          delete employeeWithoutId._id;
          this.setState(employeeWithoutId);
        }

    }

    createDepartmentOption(department) {
      return (
        <option value={department} key={department} >{department}</option>
        );
    }

    render(){

        let departments = departmentList.map((department) => {
            return department.departmentName;
        });
        departments.shift();
        let options = departments.map(this.createDepartmentOption);

        return (
            <form className="signle-employee-page" onSubmit={this.handleSubmit}>
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--1-col"></div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                      <div className="employee-item-title">姓名</div>
                      <input type="text" value={this.state.name} onChange={this.handleChange} name="name" required/>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">职位</div>
                      <input type="text" value={this.state.position} onChange={this.handleChange} name="position" required/>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">工号</div>
                      <input type="text" value={this.state.badgeNumber} onChange={this.handleChange} name="badgeNumber" required/>
                  </div>
                </div>

                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--1-col"></div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                      <div className="employee-item-title">性别</div>
                      <input type="radio" value="男" onClick={this.handleChange} name="gender" required/>男
                      <br/>
                      <input type="radio" value="女" onClick={this.handleChange} name="gender" required/>女
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">出生日期</div>
                      <input type="date" value={this.getInitialDate(this.state.birthday)} onChange={this.handleChange} name="birthday" required/>


                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">身份证</div>
                      <input type="text" value={this.state.idNumber} onChange={this.handleChange} name="idNumber" required/>
                  </div>
                </div>

                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--1-col"></div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                      <div className="employee-item-title">联系电话</div>
                      <input type="text" value={this.state.phoneNumber} onChange={this.handleChange} name="phoneNumber" required/>                      

                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">入职时间</div>
                        <input type="date" value={this.getInitialDate(this.state.onBoardDate)} onChange={this.handleChange} name="onBoardDate" required/>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">部门</div>
                        <select name="department" value={this.state.department} onChange={this.handleChange} required>
                          {options}
                        </select>
                  </div>
                </div>

                  <div className="mdl-grid">
                      <div className="mdl-cell mdl-cell--7-col"></div>
                      <div className="mdl-cell mdl-cell--1-col">
                            <input className="mdl-button mdl-js-button mdl-button--primary employee-item-button"
                              type="submit" value={this.employee.name ? "更新" : "新建"} />

                      </div>
                      <div className="mdl-cell mdl-cell--1-col">
                            <button className="mdl-button mdl-js-button mdl-button--accent employee-item-button"
                            onClick = {this.handleBack}>
                              返回
                            </button>
                      </div>
                </div>
              </form>
              )
            }


}

export default PostComponent;