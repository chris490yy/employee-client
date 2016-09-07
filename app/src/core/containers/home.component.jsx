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
		}
	}

	componentWillMount() {
		this.ajaxCallForCategory();
	}

	ajaxCallForCategory() {
	    let departmentNameList = departmentList.map((department) => {
	        return department.departmentName;
	    });
	    axios.get('http://localhost:8000/employees').then((res) => {
	        departmentNameList.forEach((departmentName, index) => {
	            let employeesByDepartment = [];
	            res.data.employees.forEach((employee) => {
	                if(employee.department === departmentName) {
	                    employeesByDepartment.push(employee);
	                }
	            });  
	            let totalNumber = employeesByDepartment.length;
	            if(departmentName !== '新员工') {	            	
		            if(totalNumber === 0) {
		                departmentList[index].description = departmentList[index].description.replace('Total', '0');
		                departmentList[index].description = departmentList[index].description.replace('Temp', '0');
		                departmentList[index].description = departmentList[index].description.replace('Perm', '0');
		            } else {
		                let temporaryNumber = employeesByDepartment.filter((employee) => {
		                    return employee.position === "临时工";
		                }).length;
		                let permanentNumber = totalNumber - temporaryNumber;
		                departmentList[index].description = departmentList[index].description.replace('Total', totalNumber);
		                departmentList[index].description = departmentList[index].description.replace('Temp', temporaryNumber);
		                departmentList[index].description = departmentList[index].description.replace('Perm', permanentNumber);
		            }                           
	            }
	        });
	        this.setState({departments: departmentList});
    }).catch((err) => console.log(err, 'get employees error'));
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
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(employeeActions, dispatch)
}


export default connect(null, mapDispatchToProps)(HomeComponent);