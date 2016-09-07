'use strict';

import React from 'react';
import NameList from './nameList.component.jsx';
//import SearchPost from './searchPost.component.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as searchActions from '../actions/search.action.js';

require('../../../styles/article.style.css');

class Employees extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NameList/>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) =>{
//   return bindActionCreators(searchActions,dispatch)
// }

//export default connect(null, mapDispatchToProps)(Articles);
export default Employees
