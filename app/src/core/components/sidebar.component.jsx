import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import store from "../../../store.js";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import departmentList from '../../../init/department.js';
import * as employeeActions from '../../employee/actions/employee.action.js';

require('../../../styles/sidebar.style.css');
class SidebarComponent extends React.Component{

	constructor(){
		super();
		this.state = { departments : [] };
	}

	componentDidMount(){
        this.setState({ departments :  departmentList});
	}

	render(){

		let departments = this.state.departments.map((department, index) =>{

			if(store.getState().department == department.departmentName)
				return (
							<span className="mdl-navigation__link selected" key={index} onClick={this.goToDepartment.bind(this,department.departmentName)}>
								<i className="material-icons">{department.icon}</i>
								{department.departmentName}
							</span>
 						)
	 		else
	 			return (
 							<span className="mdl-navigation__link" key={index} onClick={this.goToDepartment.bind(this,department.departmentName)}>
	 							<i className="material-icons">{department.icon}</i>
	 							{department.departmentName}
 							</span>
 						)
		});

		return (
			<div>

				<div className="demo-drawer mdl-layout__drawer ">

					<nav className="demo-navigation mdl-navigation ">

						{departments}
					</nav>
				</div>
			</div>

			)
	}


	logout() {
		cookie.remove('username', { path: '/' });
		cookie.remove('userId', { path: '/' });
		this.setState({username : undefined, userId : undefined});
	}

	goToDepartment(department){
		this.props.asynGetEmployeeByDepartmentMiddleware(department);
		this.props.resetCurrentEmployee();
		hashHistory.push('/employees');
	}
}


const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(employeeActions, dispatch)
}

export default connect(null, mapDispatchToProps)(SidebarComponent)

