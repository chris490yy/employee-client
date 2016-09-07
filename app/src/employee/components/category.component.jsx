import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import SingleTopicComponent from './singletopic.component.jsx';
import HeadSliderComponent from './headslider.component.jsx';

require('../../../styles/category.style.css');
require('../../../styles/headslider.style.css');


class CategoryComponent extends React.Component{

	constructor(){
		super();
	}

	render(){
	    let departments = this.props.departments.map((department) => {
	  	return (
		  			<div className="mdl-cell mdl-cell--4--col" key={Math.random()}>
				      	<SingleTopicComponent {...this.props} imgsrc={department.img} department={department.departmentName} description={department.description} effect={department.effect}/>
					</div>
	  		   )
	  });

	  let departments1 = this.props.departments.map((department) => {
	  	return (

		  			<div className="mdl-cell mdl-cell--12--col" key={Math.random()}>

				      	<SingleTopicComponent {...this.props} imgsrc={department.img} department={department.departmentName} description={department.description} effect={department.effect}/>

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