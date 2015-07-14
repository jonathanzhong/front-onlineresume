
var bio = {
    "name" : "Yonglin Zhong",
    "role" : "Front-end Web Developer",
    "contacts" :{
        "mobile": "716-903-4505",
        "email": "zhongyl0722@hotmail.com",
        "location": "San Jose",
        "github":'<a href="https://github.com/jonathanzhong">jonathanzhong</a>',
        "twitter":'<a href="https://twitter.com/zhongyl0722">zhongyl0722</a>',
        "location": "San Jose",
        "blog": '<a href="http://www.yonglinzhong.com">http://yonglinzhong.com</a>'
    },
    "welcomeMessage" : "Hola! I am Yonglin Zhong, a recent new grad seeking for a front-end web developer opportunity.<br>There is so much fun playing around with the newest front-end technology. I love coding, which can lead to a result, bad or good. Most of the reason, I choose to become a front-end developer, is that awesome design and out of box thinking interest me! <br>Thank you for stopping by. If there is any question, more than welcome to contact me!",
    "skills" : [
    "HTML5", "CSS", "Javascript", "Jquery", "AJAX", "Responsive Design"
    ],
    "biopic" : "images/fry.jpg"
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#bio-name").append(formattedName);
    $("#bio-name").append(formattedRole);
    $("#bio-details").append(formattedBioPic);
    $("#bio-details").append(formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);

    $("#topContacts, #footerContacts").append(formattedMobile)
    .append(formattedEmail)
    .append(formattedTwitter)
    .append(formattedGithub)
    .append(formattedBlog)
    .append(formattedLocation);

    $("#skillset").prepend(HTMLskillsStart);

    /*for (var i = 0; i < bio.skills.length; i ++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    };*/

};

var work = {
    "jobs": [{
        "employer": "SGS S.A",
        "title": "Physical Inspection Engineer Intern",
        "location": "Shenzhen, China",
        "dates": "03/2013-05/2013",
        "description": "<ur><li>Established essential physical or mechanical tests toward exported products according to criteria of different countries.</li><li>Performed inspection to find out potential hazards that endanger the health of children.</li></ur>"
    }]
};

work.display = function () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var lastWorkEntry = $(".work-entry:last");
        lastWorkEntry.append(formattedEmployer + formattedTitle)
        .append(formattedDates)
        .append(formattedLocation)
        .append(formattedDescription);
    };
}


var projects = {
    "projectss": [
        {
            "title" : "Neighborhood Map",
            "dates" : "07/2015",
            "description" : '<a href = "http://neighborhoodmap.parseapp.com">Live Demo: Click Here</a>',
            "images": ["images/neighborhoodmap.png"],
            "details": {
                "url": "https://github.com/jonathanzhong/front-NeighborhoodMap",
                "image": "images/neighborhoodmap.png",
                "description": "<ur><li>Developed single page application featuring a map of neighborhood with Knockout.JS using MVVM architecture.</li><li>Implemented third party APIs (Google Map and Duckduckgo) to add functionalities of map markers to identify nearby popular locations and provide additional information.</li></ur>",
                "technologies": ["Browser Rendering Optimization", "Website Performance Optimization"]
            }
        },
        {
            "title" : "Website Optimization",
            "dates" : "06/2015",
            "description" : "Optimized a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
            "images": ["images/pageSpeed-mobile0.png"],
            "details": {
                "url": "https://github.com/jonathanzhong/front-webOptimization",
                "image": "images/pageSpeed-mobile0.png",
                "description": "<ur><li>Optimized critical rendering path of existing website to achieve PageSpeed Insights score above 90.</li><li>Eliminated inefficiencies in the website’s scroll animation. Site now scrolls at 60 frames per second.</li></ur>",
                "technologies": ["Browser Rendering Optimization", "Website Performance Optimization"]
            }
        },
        {
            "title" : "Arcade Game Clone",
            "dates" : "05/2015",
            "description" : "Provided with visual assets and a game loop engine; using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
            "images": ["images/classicalgame.png"],
            "details": {
                "url": "https://github.com/jonathanzhong/front-arcadeGame",
                "image": "images/classicalgame.png",
                "description": "<ur><li>Clone of the classic game, Frogger. Udacity provided the art assets and game engine.</li><li>Coded player, enemies and other game entities in JavaScript’s object-oriented pseudo-classical style.</li><li>Created enemy subclasses with different movement patterns and sprites.</li></ur>",
                "technologies": ["Browser Rendering Optimization", "Website Performance Optimization"]
            }
        },
        {
            "title" : "Interactive Resume",
            "dates" : "04/2015",
            "description" : "Implemented the knowledge of variables, objects, JSON, functions and control flow to manipulate DOM tree.",
            "images": ["images/onlineResume.png"],
            "details": {
                "url": "https://github.com/jonathanzhong/front-onlineresume",
                "image": "images/onlineResume.png ",
                "description": "<ur><li>Clone of the classic game, Frogger. Udacity provided the art assets and game engine.</li><li>Coded player, enemies and other game entities in JavaScript’s object-oriented pseudo-classical style.</li><li>Created enemy subclasses with different movement patterns and sprites.</li></ur>",
                "technologies": ["Browser Rendering Optimization", "Website Performance Optimization"]
            }
        }
    ],
};

projects.display = function () {
    for (project in projects.projectss) {
    $('#projects .inner').append(HTMLprojectStart.replace('%id%', project));

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projectss[project].title).replace('%id%', project);
    formattedProjectTitle = formattedProjectTitle.replace('%id%', project);
    var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projectss[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projectss[project].description);
    var lastProjectEntry = $(".project-entry:last");

    lastProjectEntry.append(formattedProjectTitle)
    .append(formattedProjectDate)
    .append(formattedProjectDescription);

    $('.project-entry:last').append(HTMLprojectImagesStart);

    for (img in projects.projectss[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projectss[project].images);
        formattedProjectImage = formattedProjectImage.replace('%id%', project);
        $(".project-entry:last").append(formattedProjectImage)
    };

// Create 2 buttons, one to view details of the project and one to launch the live project
    var projectView = HTMLprojectView.replace('%data%', project);
    $('.project-entry:last').append(projectView);

    // Only display the "Launch Site" button if there is a live site to view
    if (projects.projectss[project].details.url.length > 0) {
        var projectURL = HTMLprojectURL.replace('%data%', projects.projectss[project].details.url);
        projectURL = projectURL.replace('%title%', projects.projectss[project].title)
        $('.project-entry:last').append(projectURL);
    }

    // Build the project details section. This section is hidden on the page with CSS and
    // is displayed within a lightbox when the project title, image or view details button
    // are clicked
    $('#project-details').append(HTMLprojectDetailStart.replace('%id', 'detail-' + project));

    // Get the image that will be displayed on the details page
    var detailImage = HTMLprojectDetailImage.replace('%data%', projects.projectss[project].details.image);
    detailImage = detailImage.replace('%name%', projects.projectss[project].title);
    $('.project-detail .inner:last').append(detailImage);

    // Get the detailed project description
    var detailDesc = HTMLprojectDetailDesc.replace('%name%', projects.projectss[project].title);
    detailDesc = detailDesc.replace('%data%', projects.projectss[project].details.description);
    $('.project-detail .inner:last').append(detailDesc);

    // Get the URL of the live project if one exists
    if (projects.projectss[project].details.url.length > 0) {
        projectURL = HTMLprojectDetailURL.replace(/%data%/g, projects.projectss[project].details.url);
        $('.project-url:last').append(projectURL);
    }

    // Loop through and create a list of the technologies used on this project
    if (projects.projectss[project].details.technologies.length > 0) {
        for (technology in projects.projectss[project].details.technologies) {
            $('.project-tech:last').append(HTMLprojectDetailTech.replace('%data%', projects.projectss[project].details.technologies[technology]));
        }
    }


    };
}

var education = {

    "schools": [
        {
            "name": "Udacity",
            "location": "Mountain View, CA, US",
            "degree": "Nanodegree",
            "major":["Front-end Web Developer"],
            "dates": "04/2015",
            "url": "www.udacity.edu"
        },
        {
            "name": "SUNY at Buffalo",
            "location": "Buffalo, NY, US",
            "degree": "Master of Science",
            "major":["Electrical Engineering"],
            "dates": "08/2013-02/2015",
            "url": "www.buffalo.edu"
        },
        {
            "name": "Shenzhen University",
            "location": "Shenzhen, China",
            "degree": "Bachelor of Science",
            "major": ["Applied Physics"],
            "dates":"09/2009-06/2013",
            "url" : "www.szu.edu.cn"
        }
    ],

    "onlineCourses": [
    ]
};

education.display = function () {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolHeader = formattedschoolName + formattedschoolDegree;
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);


        var lastSchoolEntry = $(".education-entry:last");
        lastSchoolEntry.append(formattedschoolHeader)
        .append(formattedschoolDates)
        .append(formattedschoolLocation);

        if (education.schools[school].major.length > 0) {
            for (item in education.schools[school].major) {
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[item]);
                $(".education-entry:last").append(formattedschoolMajor);
            }
        }
    }

    /*$("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedschoolTitle = formattedonlineTitle + formattedonlineSchool;
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#data#", education.onlineCourses[course].url)

        var lastOnlineEntry = $(".education-entry:last");
        lastOnlineEntry.append(formattedschoolTitle)
        .append(formattedonlineDates)
        .append(formattedonlineURL);
    }*/

}

bio.display();

projects.display();

education.display();

work.display();

function inName() {

    var firstName = bio.name.split(" ")[0];
    var lastName = bio.name.split(" ")[1];
    return firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase() + " "+ lastName.slice(0,1).toUpperCase() + lastName.slice(1).toLowerCase();
}

$("#mapDiv").append(googleMap);