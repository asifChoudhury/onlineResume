var bio = {
    "name": "Md Asif Choudhury",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "1234567890",
        "email": "abc@yahoo.com",
        "github": "gitpro",
        "twitter": "@webdev",
        "location": "New York, NY"
    },
    "welcomeMessage": "Welcome to my interactive resume.",
    "skills": ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap"/*, "AJAX", "Gulp", "Sass", "BabelJS", "Backbone.js", "Ember.js", "Angular.js"*/],
    "biopic": "images/fry.jpg",
    "display": function() {
        /*
         * Add name and role to the header.
         */
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        /*
         * Append contacts to the header.
         */
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);
        /*
         * Create a child of #header and add a bio pic.
         */
        $("#header").append('<div id="bioPic"></div>');
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#bioPic").append(formattedBioPic);
        /*
         * Create a child #header and add a welcome message.
         */
        $("#header").append('<div id="welcomeMsg"></div>');
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#welcomeMsg").append(formattedWelcomeMsg);
        /*
         * Create a child of #header and add skills.
         */
        $("#header").append('<div id="skills-header"></div>');
        $("#skills-header").append(HTMLskillsStart);

        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }

    }
}

bio.display();

var work = {
    jobs: [
        {
           employer: "ABC Industries",
           title: "Analyst",
           location: "Sanfrancisco, CA",
           dates: "In progress",
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula magna, volutpat nec est in, rutrum accumsan tellus. Nunc gravida massa dapibus ante scelerisque, eget rutrum tellus viverra. Sed sed lacus et urna placerat lacinia. Maecenas eleifend est nec erat porta ultricies. In aliquam dui lectus, id efficitur purus pharetra in. Aliquam neque nulla, viverra sed imperdiet et, tempor vel massa. Donec quis quam est. Sed dapibus cursus lorem, ac tincidunt neque volutpat quis. Integer dapibus ex id euismod mattis. Sed condimentum risus nulla, ut elementum tortor tempor eget. Pellentesque sit amet nunc tincidunt, cursus elit sit amet, malesuada mi. Ut sapien nisi, ullamcorper sed nisl imperdiet, luctus tincidunt elit. Proin condimentum varius enim at gravida. Suspendisse ut velit vitae odio volutpat semper quis et tortor. Nullam at metus et risus tincidunt commodo. Curabitur sit amet lacus ut libero cursus gravida nec nec lacus.."
        },
        {
           employer: "DEF Tech",
           title: "Supervisor",
           location: "London, United Kingdom",
           dates: "2006 - 2010",
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula magna, volutpat nec est in, rutrum accumsan tellus. Nunc gravida massa dapibus ante scelerisque, eget rutrum tellus viverra. Sed sed lacus et urna placerat lacinia. Maecenas eleifend est nec erat porta ultricies. In aliquam dui lectus, id efficitur purus pharetra in. Aliquam neque nulla, viverra sed imperdiet et, tempor vel massa. Donec quis quam est. Sed dapibus cursus lorem, ac tincidunt neque volutpat quis. Integer dapibus ex id euismod mattis. Sed condimentum risus nulla, ut elementum tortor tempor eget. Pellentesque sit amet nunc tincidunt, cursus elit sit amet, malesuada mi. Ut sapien nisi, ullamcorper sed nisl imperdiet, luctus tincidunt elit. Proin condimentum varius enim at gravida. Suspendisse ut velit vitae odio volutpat semper quis et tortor. Nullam at metus et risus tincidunt commodo. Curabitur sit amet lacus ut libero cursus gravida nec nec lacus."
        },
        {
           employer: "Lorem Ipsum",
           title: "Team Leader",
           location: "New York, NY",
           dates: "2004 - 2006",
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula magna, volutpat nec est in, rutrum accumsan tellus. Nunc gravida massa dapibus ante scelerisque, eget rutrum tellus viverra. Sed sed lacus et urna placerat lacinia. Maecenas eleifend est nec erat porta ultricies. In aliquam dui lectus, id efficitur purus pharetra in. Aliquam neque nulla, viverra sed imperdiet et, tempor vel massa. Donec quis quam est. Sed dapibus cursus lorem, ac tincidunt neque volutpat quis. Integer dapibus ex id euismod mattis. Sed condimentum risus nulla, ut elementum tortor tempor eget. Pellentesque sit amet nunc tincidunt, cursus elit sit amet, malesuada mi. Ut sapien nisi, ullamcorper sed nisl imperdiet, luctus tincidunt elit. Proin condimentum varius enim at gravida. Suspendisse ut velit vitae odio volutpat semper quis et tortor. Nullam at metus et risus tincidunt commodo. Curabitur sit amet lacus ut libero cursus gravida nec nec lacus."
        },
        {
           employer: "United Nations",
           title: "Project Lead",
           location: "New York, NY",
           dates: "2000 - 2003",
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula magna, volutpat nec est in, rutrum accumsan tellus. Nunc gravida massa dapibus ante scelerisque, eget rutrum tellus viverra. Sed sed lacus et urna placerat lacinia. Maecenas eleifend est nec erat porta ultricies. In aliquam dui lectus, id efficitur purus pharetra in. Aliquam neque nulla, viverra sed imperdiet et, tempor vel massa. Donec quis quam est. Sed dapibus cursus lorem, ac tincidunt neque volutpat quis. Integer dapibus ex id euismod mattis. Sed condimentum risus nulla, ut elementum tortor tempor eget. Pellentesque sit amet nunc tincidunt, cursus elit sit amet, malesuada mi. Ut sapien nisi, ullamcorper sed nisl imperdiet, luctus tincidunt elit. Proin condimentum varius enim at gravida. Suspendisse ut velit vitae odio volutpat semper quis et tortor. Nullam at metus et risus tincidunt commodo. Curabitur sit amet lacus ut libero cursus gravida nec nec lacus."
        }

    ],
    "display": function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
}

work.display();

var education = {
    "schools": [
        {
            "name": "Queens College",
            "location": "Flushing, NY",
            "degree": "Bachelor's Degree",
            "majors": "Computer Science",
            "dates": "2016",
            "url": "www.qc.cuny.edu"
        },
        {
            "name": "Stony Brook University",
            "location": "Stony Brook, NY",
            "degree": "Bachelor's Degree",
            "majors": "Biology",
            "dates": "2010",
            "url": "www.stonybrook.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "UDACITY",
            "date": "In Progress",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Building High Conversion Web Forms",
            "school": "UDACITY",
            "date": "In Progress",
            "url": "https://www.udacity.com/course/building-high-conversion-web-forms--ud890"
        },
        {
            "title": "Web Tooling & Automation",
            "school": "UDACITY",
            "date": "In Progress",
            "url": "https://www.udacity.com/course/web-tooling-automation--ud892"
        },
        {
            "title": "Front-End Frameworks",
            "school": "UDACITY",
            "date": "In Progress",
            "url": "https://www.udacity.com/course/front-end-frameworks--ud894"
        }
    ],
    "display": function() {
        /*
         * Add education header.
         */
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", education.schools[school].url);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolUrl);
        }
        /*
         * Add education header.
         */
        $(".education-entry:last").append(HTMLonlineClasses);
        for (onlineCourse in education.onlineCourses) {

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

            // $(".online-url").attr("href", education.onlineCourses[onlineCourse].url);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineUrl);
            $(".education-entry:last").append("      ");
        }
    }
}

education.display();

var projects = {
    "projects": [
        {
            "title": "Online Resume",
            "dates": "April'16",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula magna, volutpat nec est in, rutrum accumsan tellus. Nunc gravida massa dapibus ante scelerisque, eget rutrum tellus viverra. Sed sed lacus et urna placerat lacinia. Maecenas eleifend est nec erat porta ultricies. In aliquam dui lectus, id efficitur purus pharetra in. Aliquam neque nulla, viverra sed imperdiet et, tempor vel massa. Donec quis quam est. Sed dapibus cursus lorem, ac tincidunt neque volutpat quis. Integer dapibus ex id euismod mattis. Sed condimentum risus nulla, ut elementum tortor tempor eget. Pellentesque sit amet nunc tincidunt, cursus elit sit amet, malesuada mi. Ut sapien nisi, ullamcorper sed nisl imperdiet, luctus tincidunt elit. Proin condimentum varius enim at gravida. Suspendisse ut velit vitae odio volutpat semper quis et tortor. Nullam at metus et risus tincidunt commodo. Curabitur sit amet lacus ut libero cursus gravida nec nec lacus.",
            "images": "images/fry.jpg"
        },
        {
            "title": "Portfolio",
            "dates": "April'16",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula magna, volutpat nec est in, rutrum accumsan tellus. Nunc gravida massa dapibus ante scelerisque, eget rutrum tellus viverra. Sed sed lacus et urna placerat lacinia. Maecenas eleifend est nec erat porta ultricies. In aliquam dui lectus, id efficitur purus pharetra in. Aliquam neque nulla, viverra sed imperdiet et, tempor vel massa. Donec quis quam est. Sed dapibus cursus lorem, ac tincidunt neque volutpat quis. Integer dapibus ex id euismod mattis. Sed condimentum risus nulla, ut elementum tortor tempor eget. Pellentesque sit amet nunc tincidunt, cursus elit sit amet, malesuada mi. Ut sapien nisi, ullamcorper sed nisl imperdiet, luctus tincidunt elit. Proin condimentum varius enim at gravida. Suspendisse ut velit vitae odio volutpat semper quis et tortor. Nullam at metus et risus tincidunt commodo. Curabitur sit amet lacus ut libero cursus gravida nec nec lacus.",
            "images": "images/fry.jpg"
        },
        {
            "title": "Animal Trading Cards",
            "dates": "April'16",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula magna, volutpat nec est in, rutrum accumsan tellus. Nunc gravida massa dapibus ante scelerisque, eget rutrum tellus viverra. Sed sed lacus et urna placerat lacinia. Maecenas eleifend est nec erat porta ultricies. In aliquam dui lectus, id efficitur purus pharetra in. Aliquam neque nulla, viverra sed imperdiet et, tempor vel massa. Donec quis quam est. Sed dapibus cursus lorem, ac tincidunt neque volutpat quis. Integer dapibus ex id euismod mattis. Sed condimentum risus nulla, ut elementum tortor tempor eget. Pellentesque sit amet nunc tincidunt, cursus elit sit amet, malesuada mi. Ut sapien nisi, ullamcorper sed nisl imperdiet, luctus tincidunt elit. Proin condimentum varius enim at gravida. Suspendisse ut velit vitae odio volutpat semper quis et tortor. Nullam at metus et risus tincidunt commodo. Curabitur sit amet lacus ut libero cursus gravida nec nec lacus.",
            "images": "images/fry.jpg"
        },
        {
            "title": "Timer App",
            "dates": "Jan'16",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula magna, volutpat nec est in, rutrum accumsan tellus. Nunc gravida massa dapibus ante scelerisque, eget rutrum tellus viverra. Sed sed lacus et urna placerat lacinia. Maecenas eleifend est nec erat porta ultricies. In aliquam dui lectus, id efficitur purus pharetra in. Aliquam neque nulla, viverra sed imperdiet et, tempor vel massa. Donec quis quam est. Sed dapibus cursus lorem, ac tincidunt neque volutpat quis. Integer dapibus ex id euismod mattis. Sed condimentum risus nulla, ut elementum tortor tempor eget. Pellentesque sit amet nunc tincidunt, cursus elit sit amet, malesuada mi. Ut sapien nisi, ullamcorper sed nisl imperdiet, luctus tincidunt elit. Proin condimentum varius enim at gravida. Suspendisse ut velit vitae odio volutpat semper quis et tortor. Nullam at metus et risus tincidunt commodo. Curabitur sit amet lacus ut libero cursus gravida nec nec lacus.",
            "images": "images/fry.jpg"
        },
        {
            "title": "Tip Calculator App",
            "dates": "Feb'16",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula magna, volutpat nec est in, rutrum accumsan tellus. Nunc gravida massa dapibus ante scelerisque, eget rutrum tellus viverra. Sed sed lacus et urna placerat lacinia. Maecenas eleifend est nec erat porta ultricies. In aliquam dui lectus, id efficitur purus pharetra in. Aliquam neque nulla, viverra sed imperdiet et, tempor vel massa. Donec quis quam est. Sed dapibus cursus lorem, ac tincidunt neque volutpat quis. Integer dapibus ex id euismod mattis. Sed condimentum risus nulla, ut elementum tortor tempor eget. Pellentesque sit amet nunc tincidunt, cursus elit sit amet, malesuada mi. Ut sapien nisi, ullamcorper sed nisl imperdiet, luctus tincidunt elit. Proin condimentum varius enim at gravida. Suspendisse ut velit vitae odio volutpat semper quis et tortor. Nullam at metus et risus tincidunt commodo. Curabitur sit amet lacus ut libero cursus gravida nec nec lacus.",
            "images": "images/fry.jpg"
        }
    ],
    "display": function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImages);
        }
    }
}

projects.display();

$("#mapDiv").append(googleMap);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);
