var data = '%data%';

var bio = {
	"name": 'Jake Heggelke',
	"role": 'Web Developer',
	"contacts": {
		"email": "jacob.heggelke@gmail.com",
		"github": "jeggelke",
		"twitter": "@jeggelke",
		"location": "Brooklyn, NY"
		},
	"bioPic": "images/bioPic.jpg",
	"welcomeMessage": "I work as a Web Producer for a cool non-profit organization that provides practical, nonpartisan advice and evidence-based, consensus-driven strategies to increase public safety and strengthen communities. I like to do a lot of other things in my spare time. Thanks for checking out my resume!",
	"skills": ["Web Development", "Livestream Stuff", "Music"],


}

var work = {
	"jobs": [
		{
		"position": "Web Producer",
		"employer": "CSG Justice Center",
		"dates": "2013 - Present",
		"location": "New York, NY",
		"description": "I'm basically a code monkey.",
		"url": "http://csgjusticecenter.org"
		},
		{
		"position": "Technology Analyst",
		"employer": "NYPTI",
		"dates": "2011-2013",
		"location": "Albany, NY",
		"description": "I helped people use their computers.",
		"url": "http://nypti.org"
		}
	]

}

var education = {
	"schools": [
		{
		"schoolName": "University at Albany",
		"yearsAttended": "2007-2011",
		"location": "1400 Washington Ave - Albany, NY",
		"major": "Communications",
		"minor": ["Mathematics", "Music"],
		"graduationYear": "2011",
		"url": "http://albany.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML/CSS",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd",
			"description": "In this course you will learn how to convert digital design mockups into static web pages. We will teach you how to approach page layout, how to break down a design mockup into page elements, and how to implement that in HTML and CSS."
		},
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/javascript-basics--ud804-nd",
			"description": "In this course, you'll explore the JavaScript programming language by creating an interactive version of your résumé. You’ll learn the JavaScript programming fundamentals you need while building new elements and sections to enhance your résumé."
		},
		{
			"title": "Front End Web Developer Nano-Degree",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
			"description": "Learn the fundamentals of how the web works and gain a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript. This Nanodegree will provide a guided, efficient path for you to learn to build beautiful, responsive websites optimized for security and performance. You’ll see the efforts of your work with each click of the browser’s refresh button!"
		}
	]
}

var projects = {
	"projects": [
	{
		"title": "NCJI Map",
		"dates": "May 2015 - June 2015",
		"description": "This map pulls in data from a Fusion Table and plots it on a Google Map",
		"image": "images/ncjiMap.png"
	},
	{
		"title": "This Resume",
		"dates": "July 2015",
		"description": "This is my first online resume",
		"image": ""
	},
	{
		"title": "More to Come...",
		"dates": "Present - The Future",
		"description": "More projects forthcoming",
		"image": ""
	}
	]
}

bio.display = function(){
	var formattedPic = HTMLbioPic.replace(data, bio.bioPic);
	var formattedMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
	var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
	var formattedEmail = replaceAll(HTMLemail, data, bio.contacts.email);
	var formattedGithub = replaceAll(HTMLgithub, data, bio.contacts.github);
	var formattedTwitter = replaceAll(HTMLtwitter, data, bio.contacts.twitter);
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	var $nameTitleNav = $('#name-title-nav');
	$nameTitleNav.append(formattedName);
	$nameTitleNav.append(formattedRole);
	$nameTitleNav.append(HTMLheaderNav);
	$('#header').append(formattedPic, formattedMsg);
	$('#topContacts').append(formattedLocation,formattedEmail,formattedGithub,formattedTwitter);
	$('#footerContacts').append(formattedLocation,formattedEmail,formattedGithub,formattedTwitter);
	if (bio.skills.length) {
	$('#header').append(HTMLskillsStart);
		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
			$('#skills').append(formattedSkill);
		}
	};
};

work.display = function(){
		var len = work.jobs.length;
		if (len) {
			for (var i = 0; i < len; i++){
				$('#workExperience').append(HTMLworkStart);
				var workLine1 = HTMLworkEmployer.replace(data, work.jobs[i].employer).replace('#', work.jobs[i].url) + HTMLworkTitle.replace(data, work.jobs[i].position);
				$('.work-entry:last').append(workLine1);
				var workLine2 = HTMLworkDates.replace(data, work.jobs[i].dates);
				var workLine3 = HTMLworkLocation.replace(data, work.jobs[i].location);
				var workLine4 = HTMLworkDescription.replace(data, work.jobs[i].description);
				$('.work-entry:last').append(workLine2);
				$('.work-entry:last').append(workLine3);
				$('.work-entry:last').append(workLine4);
				}
				$('#nav').append(HTMLworkNav);
	}
};

projects.display = function(){
	var len = projects.projects.length;
	for (var i = 0; i < len; i++){
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
		$('.project-entry:last').append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace(data, projects.projects[i].image);
		$('.project-entry:last').append(formattedImage);
	}
	$('#nav').append(HTMLprojectsNav);
};

education.display = function(){
	var len = education.schools.length;
	for (var i = 0; i < len; i++) {
		$('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].schoolName);
		formattedSchoolName = formattedSchoolName.replace('#', education.schools[i].url)
		$('.education-entry:last').append(formattedSchoolName);

		var formattedYears = HTMLschoolDates.replace(data, education.schools[i].yearsAttended);
		$('.education-entry:last').append(formattedYears);

		var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
		$('.education-entry:last').append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].major);
		$('.education-entry:last').append(formattedSchoolMajor);
	}
	$('#education').append(HTMLonlineClasses);
	var len = education.onlineCourses.length;	
	for (var i = 0; i < len; i++) {
		var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
		formattedOnlineTitle = formattedOnlineTitle.replace('#', education.onlineCourses[i].url);
		$('#online-courses').append(formattedOnlineTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
		$('.online-title:last').append(formattedOnlineSchool);

		var formattedOnlineDate = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
		$('#online-courses').append(formattedOnlineDate);

		var formattedOnlineDescription = HTMLonlineDescription.replace(data, education.onlineCourses[i].description);
		$('#online-courses').append(formattedOnlineDescription);
	}
	$('#nav').append(HTMLeducationNav);
};
bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);