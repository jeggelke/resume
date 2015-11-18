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
	"welcomeMessage": "I work as a Web Producer for a cool non-profit organization that provides practical, nonpartisan advice and evidence-based, consensus-driven strategies to increase public safety and strengthen communities. I like to do a lot of other things such as write songs, play trivia with friends, and learn more about web development."
}

var work = {
	"jobs": [
		{
		"position": "Web Producer",
		"employer": "CSG Justice Center",
		"dates": "2013 - Present",
		"location": "New York, NY",
		"description": "<ul class='body-ul'><li>HTML/CSS/JS/PHP development for organization's Wordpress website.</li><li>Integrating 3rd party frameworks (jQuery, raphael.js), APIs (Google Fusion Tables/Maps), and other emerging technologies with the organization’s website</li><li>Visualizing datasets via interactive maps and graphs</li><li>Managing developer/designers during site redesign as well as on-going maintenance projects</li><li>UI development from wireframes created in Photoshop</li></ul>",
		"url": "http://csgjusticecenter.org"
		},
		{
		"position": "Technology Analyst",
		"employer": "NYPTI",
		"dates": "2011-2013",
		"location": "Albany, NY",
		"description": "<ul class='body-ul'><li>Developing and maintaining quarterly blog using Joomla CMS</li><li>Developing, testing, and debugging software applications in various programming languages (SQL, .aspx, HTML/CSS/JS)</li><li>Creating logos, instructional videos, and welcoming remarks videos for quarterly blog</li><li>Software training for users in person as well as via remote training (such as webinars)</li><li>Recording lectures and providing A/V support for presentations at various conferences</li></ul>",
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
		"minor": "Mathematics, Music",
		"graduationYear": "2011",
		"url": "http://albany.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer Nano-Degree",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
			"description": "Learn the fundamentals of how the web works and gain a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript. This Nanodegree will provide a guided, efficient path for you to learn to build beautiful, responsive websites optimized for security and performance. You’ll see the efforts of your work with each click of the browser’s refresh button!"
		},
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
		}
	]
}

var projects = {
	"projects": [
	{
		"title": "Neighborhood Map (Work in Progress)",
		"dates": "November 2015 - Present",
		"description": "This application shows my favorite places to hang out in my neighborhood. Utilizes knockout.js, Google Maps JavaScript API, JQuery, and Bootstrap. I plan on adding other features such as Yelp reviews and a Google Street View of each location.",
		"image": "images/neighborhoodMap-resized.png",
		"url": "http://jeggelke.github.io/neighborhood-map/"
	},
	{
		"title": "Interactive Checklist for Juvenile Justice Agency Leaders and Managers",
		"dates": "October 2015 - November 2015",
		"description": "This private assessment helps agencies conduct a detailed assessment of how current policy and practice align with what research has shown works to reduce recidivism and improve other outcomes for youth involved with the juvenile justice system. Upon completion, a score is calculated and returned to the user. This project uses JQuery, Bootstrap, and saves to Local Storage after moving on to the next section.",
		"image": "images/jj-checklist-resized.png"
	},
	{
		"title": "NCJI Map",
		"dates": "May 2015 - June 2015",
		"description": "This map pulls in data from a Fusion Table and plots it on a Google Map",
		"image": "images/ncjiMap.png",
		"url": "http://jeggelke.github.io/ncji/"
	}
	]
}

var skills = [
		"HTML5/CSS3/JS",
		"Using frameworks: JQuery, knockout.js, raphael.js, Bootstrap",
		"Version control with git",
		"APIs: Google Maps JavaScript API, Google Fusion Tables API, Wikipedia API",
		"Video and audio for livestreams",
		"Playing guitar, piano, and singing"
	]


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
};

skills.display = function(){
	var len = skills.length;
	if (len) {
		$('#skillz').append(HTMLskillsStart)
		for (var i = 0; i < len; i++){
					var formattedSkill = HTMLskills.replace(data, skills[i]);
					$('#skills').append(formattedSkill);
		}
	}
}

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
		if (projects.projects[i].url) {formattedTitle = formattedTitle.replace('#', projects.projects[i].url);}
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
		$('.project-entry:last').append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace(data, projects.projects[i].image);
		if (projects.projects[i].url) {formattedImage = formattedImage.replace('#', projects.projects[i].url);}
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

		var formattedSchoolMinors = HTMLschoolMinors.replace(data, education.schools[i].minor);
		$('.education-entry:last').append(formattedSchoolMinors);
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
skills.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
