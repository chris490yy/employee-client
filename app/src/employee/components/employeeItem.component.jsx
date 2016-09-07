import React from 'react';
import { hashHistory } from 'react-router';
require('../../../styles/articleList.style.css');

class PostItem extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
        <tr onClick={this.visitEmployee.bind(this, this.props.employee._id)} className="artiList-postLine">
          <td className="mdl-data-table__cell--non-numeric artiList-postItem">{this.props.employee.name}</td>
          <td className="mdl-data-table__cell--non-numeric artiList-postItem">{this.props.employee.gender}</td>
          <td className="mdl-data-table__cell--non-numeric artiList-postItem">{this.props.employee.position}</td>
          <td className="mdl-data-table__cell--non-numeric artiList-postItem">{this.props.employee.badgeNumber}</td>
        </tr>
    )
  }

  showDate(date){
    var publishDate = new Date(date),
        year = publishDate.getFullYear(),
        month = publishDate.getMonth(),
        day = publishDate.getDate(),
        hour = publishDate.getHours(),
        minute = publishDate.getMinutes();
    var createdDate = month + "/" + day + "/" + year
                      + " " + hour +":"+ minute;
    return createdDate;
  }
  
  visitEmployee(id){
    hashHistory.push('/employees/' + id);
  }
}

export default PostItem;
//<td className="mdl-data-table__cell--non-numeric artiList-postItem">{this.showDate(this.props.post.publishDate)}</td>