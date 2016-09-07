import React from 'react';
import NavigationComponent from '../../core/components/navigation.component.jsx';
import SingleEmployeePageComponent from '../components/singleEmployeePage.component.jsx';
import SidebarComponent from '../../core/components/sidebar.component.jsx';
import * as employeeActions from '../actions/employee.action.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

require('../../../styles/article.style.css');

class SelectedEmployeeComponent extends React.Component{

  constructor() {
    super();
    this.state = { employee : {}};
  }
  componentDidMount(){
    axios.get('http://localhost:8000/employees/' + this.props.params.id ).then((data) => {
      this.setState({ employee :  data.data});
    }).catch((err) => console.log(err));
  }

  render() {

    return (
      <div>
        <div className='frame'>
          <NavigationComponent />
          <SidebarComponent {...this.props}/>
        </div>

        <div className='articleContent'>
          <SingleEmployeePageComponent {...this.props} employee={this.state.employee}/>
        </div>
      </div>
      )
  }
}


const mapStateToProps = (store) => {
  return {
    department: store.department,
    employees: store.employees
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(employeeActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedEmployeeComponent)


