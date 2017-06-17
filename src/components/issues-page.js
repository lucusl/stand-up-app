import React, { Component } from 'react';
import Navigation from '../components/main-nav.js';
import '../styles/issuespage.styles.css';
import api from '../utils/api.js';
import PropTypes from 'prop-types';




function Header(props){

return(
	 <header>
	 	<h2>{props.heading}</h2>
	  </header>
	
	  )
}



function Issue(props){

return(
	<div className='issue'>
		<p className='client-name'>{props.client}</p>
		<p className='issue-status'>{props.status}</p>
		<p className='issue-assignee'>{props.assignee}</p>
		<p> {props.description}</p>
	</div>
	  )
}


Issue.PropTypes = {
	assignee: PropTypes.string
};


class Issues extends Component {
	constructor(props){
	
	super(props);

		this.state = {
			heading: 'the closers',
			issues: null
		};

	this.getCompletedItems = this.getCompletedItems.bind(this);
	this.checkAssignee = this.checkAssignee.bind(this);
	this.getShortDesc = this.getShortDesc.bind(this);
	this.getClientName = this.getClientName.bind(this);

	}

componentDidMount(){
	this.getCompletedItems();
}


getCompletedItems(){
		this.setState( function (){
			return {
				issues : 'test'
			}
		})
		api.getCompetedJira()
		.then(function(completedIssues){
			this.setState( function () {
					console.log(completedIssues);	
					return {
						issues : completedIssues
					}
				})
		}.bind(this));

}	

checkAssignee(assignee){
	if( assignee ){
		return assignee.displayName
	} else {
		return 'Not Assigned'
	}
}

getShortDesc(description){
	let maxLength = 44
	if (description.length > maxLength){
		return description.substring(0, maxLength) +'...'
	}else {
		return description;
	}
}

getClientName(clientField1,clientField2 ){
	if(clientField1){
		return clientField1[0].value;
	}else if(clientField2){
		return clientField2.value;
	}else{
		return "no client"
	}
}

  render() {
  	const issues = this.state.issues;


    return (
      <div className="issue-container">	
      	<Header heading={this.state.heading}/>	
      	<Navigation />
      	<section>

      	{!issues ? <p>LOADING MUTHA FUK**A </p>: 	
      		<div className='issue-holder'>
      		{issues.map((issues) => {

      			let assignee= this.checkAssignee(issues.fields.assignee);
      			let cliOne= issues.fields.customfield_10100;
      			let cliTwo= issues.fields.customfield_10317;
      			let client= this.getClientName(cliOne,cliTwo);
      			let status= issues.fields.status.name;
      			let description= this.getShortDesc(issues.fields.summary);

      			return (
      				<Issue key={issues.id} client={client} status={status} assignee={assignee} description={description}/>	
					)
      		})}
      		</div>
      		}
      		      	<Issue key='123' client='test client' status='complete' assignee='jimmy buckets' description='place holder for issues here'/>	

      	</section>
      </div>


    );
  }
}

export default Issues;
