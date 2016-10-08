/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var skills=["Android development", "Python", "Java", "Javascript", "Git", "Fullstack development"]
 var bio={
	 "display": function(){
		var out="";
		out=HTMLmobile.replace("%data%",this.contacts.mobile);
		$("#topContacts").append(out);
		out=HTMLemail.replace("%data%",this.contacts.email);
		$("#topContacts").append(out);
		out=HTMLtwitter.replace("%data%",this.contacts.twitter);
		$("#topContacts").append(out);
		out=HTMLgithub.replace("%data%",this.contacts.github);
		$("#topContacts").append(out);
		
	},
	 "name": "Mohamed Abd-Allah",
	 "role": "Android Developer",
	 "contacts": {
		 "mobile":"+201118523332",
		 "email": "mohamed.abd_allah@yahoo.com",
		 "github": "midoalageb",
		 "twitter": "@midoalageb",
		 "location": "ElSheikh Zayed, Egypt"
	 },
	 "biopic": "https://graph.facebook.com/611018086/picture?type=large",
	 "welcomeMessage": "Welcome to my profile",
	 "skills": skills
 };
 
 var work={
	"jobs": [{
		"employer": "Self",
		"title": "Android developer",
		"location": "ElSheikh Zayed, Egypt",
		"dates": "2011 - now",
		"description": "Design and develop Android Apps"
	}, {
		"employer": "Etisalat",
		"title": "VAS Operation Sr. Team leader",
		"location": "Smart Village, Egypt",
		"dates": "2015 - now",
		"description": "Leading a team of VAS engineers to operate and maintain Etisalat VAS network"
	}, {
		"employer": "Etisalat",
		"title": "PS Operation Sr. Team leader",
		"location": "Smart Village, Egypt",
		"dates": "2013 - 2015",
		"description": "Leading a team of PS engineers to operate and maintain Etisalat Packet Switched network"
	}, {
		"employer": "Etisalat",
		"title": "BSS Team leader",
		"location": "Smart Village, Egypt",
		"dates": "2010 - 2013",
		"description": "Leading a team of BSS engineers to operate and maintain Etisalat BSS network"
	}, {
		"employer": "Vodafone",
		"title": "Senior Technology Trainer",
		"location": "Smart Village, Egypt",
		"dates": "2005 - 2010",
		"description": "Developing and conducting technical trainning to Vodafone Egypt's technical team"
	}, {
		"employer": "Vodafone",
		"title": "NMC Engineer",
		"location": "Smart Village, Egypt",
		"dates": "2003 - 2005",
		"description": "Monitor and Operate Vodafone Egypt's BSS and Core network"
	}]
};

var projects={
	"display": function(){
		this.projects.forEach(function(project){
			$("#projects").append(HTMLprojectStart);
			var mTitle=HTMLprojectTitle.replace("%data%",project.title);
			var mDates=HTMLprojectDates.replace("%data%",project.dates);
			var mDescription=HTMLprojectDescription.replace("%data%",project.description);
			var out=mTitle+mDates+mDescription;
			
			project.images.forEach(function(img){
				if(img.url!==""){
					out+=HTMLprojectImage.replace("%data%",img.url);
				}
			});
			
			$(".project-entry:last").append(out);
			
		});
	},
	
	"projects" : [
		{
			"title" : "Jumpsuite",
			"dates" : "2016",
			"description" : "Jumpsuite is a marketplace that connects you to best trainers and nutritionists out there. You can buy and review programs from international industry professionals, order a workout program, a nutrition plan or both, made just for you.",
			"images" : [
				{
					"url" : "images/jumpsuite.png"
				} , {
					"url" : ""
				} , {
					"url" : ""
				}
			]
		} , {
			"title" : "Tuner - elegant music player",
			"dates" : "2015",
			"description" : "Chosen as the 2nd best Music App in 2014.Want an unlimited music library? That's why we developed Tuner, the music player for your Android device.",
			"images" : [
				{
					"url" : "images/tuner.png"
				} , {
					"url" : ""
				} , {
					"url" : ""
				}
			]
		} , {
			"title" : "Movie Crew",
			"dates" : "2013",
			"description" : "Create great movies with your friends using your Samsung handsets. Manage your crew over the WiFi, see what their cameras see, talk to them and when the scene is ready, press ACTION to start recording your movie.",
			"images" : [
				{
					"url" : "images/movie_crew.png"
				} , {
					"url" : ""
				} , {
					"url" : ""
				}
			]
		} , {
			"title" : "GBR Financial Organizer",
			"dates" : "2014",
			"description" : "GBR Financial Organizer is your companion in all your financial transactions.",
			"images" : [
				{
					"url" : "images/fo.jpg"
				} , {
					"url" : ""
				} , {
					"url" : ""
				}
			]
		} , {
			"title" : "GBR Sudoku",
			"dates" : "2012",
			"description" : "Sudoku is a logic-based, combinatorial number-placement puzzle.",
			"images" : [
				{
					"url" : "images/sudoku.png"
				} , {
					"url" : ""
				} , {
					"url" : ""
				}
			]
		} , {
			"title" : "Number Modifier",
			"dates" : "2011",
			"description" : "This application modifies the mobile phone numbers in your contacts based on the new numbering plan that mobile operators in Egypt will follow. ",
			"images" : [
				{
					"url" : "images/number.png"
				} , {
					"url" : ""
				} , {
					"url" : ""
				}
			]
		}
	
	
	]
};

 var education={
	"schools": [{
		"name": "Cairo University",
		"location": "Faculty of Engineering, Cairo University, Egypt",
		"degree" : "B.Sc.",
		"majors": [
			{
				"major" : "Telecommunications"
			},
			{
				"major" : "Electronics"
			}
		],
		"dates": "1997 - 2002",
		"url":""
	}],
	"onlineCourses": [{
		"school": "Udacity",
		"title": "Git",
		"url": "https://classroom.udacity.com/courses/ud775",
		"date": "2016"
	}, {
		"school": "Udacity",
		"title": "HTML & CSS",
		"url": "https://classroom.udacity.com/courses/ud304",
		"date": "2016"
	}, {
		"school": "Udacity",
		"title": "Python",
		"url": "https://classroom.udacity.com/courses/ud036",
		"date": "2016"
	}, {
		"school": "Udacity",
		"title": "Relational DB",
		"url": "https://classroom.udacity.com/courses/ud197",
		"date": "2016"
	}, {
		"school": "Udacity",
		"title": "Fullstack development",
		"url": "https://classroom.udacity.com/courses/ud088",
		"date": "2016"
	}, {
		"school": "Udacity",
		"title": "Javascript",
		"url": "https://classroom.udacity.com/courses/ud804",
		"date": "2016"
	}]
};
 
var my_role=HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(my_role);
var my_name=HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(my_name);
var my_picture=HTMLbioPic.replace("%data%",bio.biopic); 
$("#header").append(my_picture);
var my_welcome_msg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage); 
$("#header").append(my_welcome_msg);

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

 if (bio.skills.length>0){
	 $("#header").append(HTMLskillsStart);
	 for (skill in bio.skills){
		 //console.log(HTMLskills);
		 var val = HTMLskills.replace("%data%",bio.skills[skill]);
		 $("#skills").append(val);
	 }		 
 }
 
$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});
 
 function display_work(){
	 if (work.jobs.length>0){
	 work.jobs.forEach(function(job){
	 //for (job in work.jobs){
		 $("#workExperience").append(HTMLworkStart);
		 var employer = HTMLworkEmployer.replace("%data%",job.employer);
		 
		 var title = HTMLworkTitle.replace("%data%",job.title);
		 //$(".work-entry:last").append(employer+title);
		 var dates = HTMLworkDates.replace("%data%",job.dates);
		 //$(".work-entry:last").append(dates);
		 var mlocation = HTMLworkLocation.replace("%data%",job.location);
		 //$(".work-entry:last").append(mlocation);
		 var description = HTMLworkDescription.replace("%data%",job.description);
		 //$(".work-entry:last").append(description);
		 var out=employer+title+dates+mlocation+description;
		 
		 $(".work-entry:last").append(out);
		 
	 });		 
 }
 }
 
 function inName(){
	 var name=bio.name;
	 var NameArray=name.split(" ");
	 var format_firstName=NameArray[0][0].toUpperCase()+NameArray[0].slice(1).toLowerCase();
	 var format_lastName=NameArray[1].toUpperCase();
	 
	 return format_firstName+" "+format_lastName;
 }
 
 display_work();
 projects.display();
 bio.display();
/* 
 
 
var my_role=HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(my_role);
var my_name=HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(my_name);
var my_contact=HTMLmobile.replace("%data%",bio.contact_info); 
$("#header").append(my_contact);
var my_picture=HTMLbioPic.replace("%data%",bio.picture_URL); 
$("#header").append(my_picture);
var my_welcome_msg=HTMLwelcomeMsg.replace("%data%",bio.welcome_msg); 
$("#header").append(my_welcome_msg);
var my_skills=HTMLskills.replace("%data%",bio.skills); 
$("#header").append(my_skills); */
