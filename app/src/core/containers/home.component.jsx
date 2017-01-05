import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import NavigationComponent from '../components/navigation.component.jsx';
import SidebarComponent from '../components/sidebar.component.jsx';
import CategoryComponent from '../../employee/components/category.component.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as employeeActions from '../../employee/actions/employee.action';
import departmentList from '../../../init/department.js';


class HomeComponent extends React.Component{


	constructor() {
		super();
		this.state = {
			departments : []
		};
	}

	componentWillMount() {

		this.ajaxCallForCategory();
	}

	ajaxCallForCategory() {
		const NoEmployee = "总人数 0 人, 正式员工 0 人， 临时工 0 人";
	    let employeesByDepartment = [];
	    let departmentNameList = departmentList.map((department) => {
	        return department.departmentName;
	    });

	    departmentNameList.forEach((departmentName, index) => {
	    	if(departmentName !== '新员工') {	
		    	axios.get('http://localhost:8000/employees/number/' + departmentName).then((res) => {
		    		let employees = res.data.employees;
		    		if(employees.total === 0) {
		    			departmentList[index].description = NoEmployee;
		    		} else {
		                let permanentNumber = employees.total - employees.tempo;
		                departmentList[index].description = this.employeesNumber(employees.total, employees.tempo, permanentNumber);
		    		}
		    		employeesByDepartment.push(departmentList[index]);
	    			this.setState({departments: employeesByDepartment});
		    	})
		    	.catch((err) => console.log(err, 'get employees error'));
		    }
	    });
	}

	render() {
		return (
			<div>
				<div className="topbar">
					<NavigationComponent />
				</div>
				<div>
					<CategoryComponent {...this.props} departments={this.state.departments}/>
				</div>
			</div>

			)

	}

	employeesNumber(total, tempo, perma) {
		return "总人数 " + total + "人, 正式员工 " + perma + "人， 临时工 " + tempo + "人";
	}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(employeeActions, dispatch)
}


export default connect(null, mapDispatchToProps)(HomeComponent);