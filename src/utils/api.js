
let axios = require('axios');
let config = {
        headers: {
                "Authorization": "Basic bHVrZTpXYWxrZXIyMyE="
        } 
};

module.exports = {

	testJiraAuth : function (){
		var URL = 'http://support.taskretail.com.au:8080/rest/auth/1/session';

		return axios.get(URL)
			.then ( function (response){
					console.log(response.data);
				return;

			})
			 .catch(function (error) {
    			console.log(error);
			  });

	},
	testJiraIssue : function (){
		var URL = 'http://support.taskretail.com.au:8080/rest/api/2/issue/TC-236';
		console.log(config);

		return axios.get(URL, config)
			.then ( function (response){
					console.log(response.data);
				return;

			})
			 .catch(function (error) {
    			console.log(error);
			  });

	},
	getCompetedJira : function (){
		var URL = 'http://support.taskretail.com.au:8080/rest/api/2/';
		var search = "search?jql="
		var JQL = 'priority = Highest AND resolved > -24h OR priority changed from Highest to (High, Medium, Low, Lowest) after -24h '
		console.log(config);

		return axios.get(URL+search+JQL, config)
			.then ( function (response){
				let data = response.data
				let issues = data.issues
					console.log(issues);
				return issues;

			})
			 .catch(function (error) {
    			console.log(error);
			  });

	},
	getCriticleBlockers : function (){
		var URL = 'http://support.taskretail.com.au:8080/rest/api/2/';
		var search = "search?jql="
		var JQL = 'project in (BA, XE, TC, TP, TPUS) AND priority in (Highest) AND resolution = Unresolved AND issueFunction in hasLinks(blocks) ORDER BY created ASC'
		console.log(config);

		return axios.get(URL+search+JQL, config)
			.then ( function (response){
				let data = response.data
				let issues = data.issues
					console.log(issues);
				return issues;

			})
			 .catch(function (error) {
    			console.log(error);
			  });

	}


}
