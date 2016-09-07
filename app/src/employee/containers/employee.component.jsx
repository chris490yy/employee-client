import React from 'react';
import { bindActionCreators } from 'redux';

import NavigationComponent from '../../core/components/navigation.component.jsx';
import SidebarComponent from '../../core/components/sidebar.component.jsx';
import ContentComponent from '../containers/content.component.jsx';
import * as employeeActions from '../actions/employee.action.js';
import store from '../../../store';
import { connect } from 'react-redux';

require('../../../styles/article.style.css');

class EmployeeComponent extends React.Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className='frame'>
          <NavigationComponent />
          <SidebarComponent {...this.props}/>
        </div>

        <div className='articleContent'>
          <ContentComponent {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeComponent)

