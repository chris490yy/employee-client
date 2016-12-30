import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
// require('../../styles/navi.style.css');
require('../../../styles/category.style.css');

class SingleTopicComponent extends React.Component{

  constructor(){
    super();
    this.state = {
        employeesInDepartment : {}
    };
  }

  componentDidMount() {
      //this.setState({departments: departmentList})
  }

  render(){
    //console.log(this.props.asynGetEmployeeByDepartmentMiddleware(this.props.department), '!!!!!!!!!!!!!!!!!!!!!!');
    return (
        <div className="tt" onClick={this.jumpPage.bind(this, this.props.department)}>
          <figure className={this.props.effect}>
            <img src={this.props.imgsrc}/>
            <figcaption>
              <h2><span>{this.props.department}</span></h2>
              <p>{this.props.description}.</p>
            </figcaption>
          </figure>
        </div>
      )
  }

  jumpPage(department) {
    console.log("jump")
    if(department !== '新员工') {
      this.props.asynGetEmployeeByDepartmentMiddleware(department);
    }
    hashHistory.push('/employees');
  }
}


export default SingleTopicComponent;