import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import SingleTopicComponent from './singletopic.component.jsx';
import HeadSliderComponent from './headslider.component.jsx';

import departmentList from '../../../init/department.js';

require('../../../styles/category.style.css');
require('../../../styles/headslider.style.css');


class CategoryComponent extends React.Component{

	constructor(){
		super();
		this.state = {
            departments : [],
            employees : {}
        };
	}
	componentDidMount() {
	 	// $.ajax({
   //          url: 'http://localhost:8000/topics',
   //          dataType: 'json',
   //          type: "GET",
   //          cache: false,
   //          success: function(data) {
   //            this.setState({ topics :  data});
   //          }.bind(this),
   //          error: function(xhr, status, err) {

   //            console.error(error, err.toString());
   //          }.bind(this)
   //        });
        this.setState({departments: departmentList})
	}

	render(){
	    let departments = this.state.departments.map((department) => {
	  	return (
		  			<div className="mdl-cell mdl-cell--4--col" key={department._id}>
				      	<SingleTopicComponent {...this.props} imgsrc={department.img} topic={department.departmentName} description={department.description} effect={department.effect}/>
					</div>
	  		   )
	  });

	  let departments1 = this.state.departments.map((department) => {
	  	return (

		  			<div className="mdl-cell mdl-cell--12--col" key={department._id}>

				      	<SingleTopicComponent {...this.props} imgsrc={department.img} topic={department.departmentName} description={department.description} effect={department.effect}/>

					</div>


	  		   )
	  });


	  return (
			    <div>
			    <HeadSliderComponent />
				<ul className="demo-list-item mdl-list category-ul largedisplay">
					 <li className="mdl-grid">
				      {departments}
			   	 	</li>
				</ul>

				<ul className="demo-list-item mdl-list category-ul smalldisplay">
					 <li className="mdl-grid">
				      {departments1}
			   	 	</li>
				</ul>
				</div>
			)
	}

}

export default CategoryComponent;