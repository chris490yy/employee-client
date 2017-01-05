'use strict';
import React from 'react';
import Employees from '../components/employees.component.jsx';
import PostComponent from '../components/post.component.jsx';

class ContentComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
      if(this.props.department === '新员工'){
          return (
              <div>
                <PostComponent {...this.props}/>
              </div>
            )
      } else {
          return (
                  <div>
                      <Employees />
                  </div>
                 )
      }
    }
}

export default ContentComponent
