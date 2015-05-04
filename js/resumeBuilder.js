
var bio = {
    "name" : "Yonglin Zhong",
    "role" : "Web Developer",
    "contacts" :{
        "mobile": "xxx-xxx-xxxx",
        "email": "zhongyl0722@hotmail.com",
        "location": "San Jose",
        "github":"jonathanzhong",
        "twitter":"zhongyl0722",
        "location": "San Jose",
        "blog": "http://jonathanzhong.github.io"
    },
    "welcomeMessage" : "Hola! I am Yonglin Zhong, new grad seeking for front-end development opportunity. Thank you very much for stopping by. If there is matching position, welcome to contact me! ",
    "skills" : [
    "HTML5", "CSS", "Javascript", "Bootstrab", "Responsive Design", "Less/Sass"
    ],
    "biopic" : "images/fry.jpg"    
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole)
    .prepend(formattedName)
    .append(formattedBioPic)
    .append(formattedWelcomeMsg);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    $("#topContacts").append(formattedMobile)
    .append(formattedEmail)
    .append(formattedTwitter)
    .append(formattedGithub)
    .append(formattedBlog)
    .append(formattedLocation);
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i ++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    };
}

var work = {
    "jobs": [{
        "employer": "Apple",
        "title": "Front-end Engineer",
        "location": "Mountain View",
        "dates": "2014-01-01",
        "description": "Lead development efforts on large-scale, web-based projects, ensuring robust and lasting solutions are implemented."
    }, {
        "employer": "Google",
        "title": "Front-end Engineer",
        "location": "Mountain View",
        "dates": "2014-01-01",
        "description": "Collaborate with and support UX team leads in delivering the highest level of trust-building and strategic counsel through all project interactions."
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
            "title" : "2 x 2 Ethernet Switch Design and Verification",
            "dates" : "2015-04",
            "description" : " Implemented Verilog to design modules of FSM, FIFO and Ethernet Switch, and SystemVerilog to write testbenches in order to verify the design by simulation on Modelsim.",
            "images": ["images/197x148.gif"]
        },
        {
            "title" : "High Speed 8 Bit ALU (Arithmetic Logic Unit) Design",
            "dates" : "2014-08",
            "description" : " Utilized Cadence – Virtuoso to Complete logic schematics and layouts of 8 Bit AND, XOR, Krogge-Stone Adder, and Barrier Shifter, then verified the functionality by simulation on Cadence. ",
            "images": ["images/197x148.gif"]
        }
    ],
};

projects.display = function () {
    for (project in projects.projectss) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projectss[project].title);
    var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projectss[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projectss[project].description);
    var lastProjectEntry = $(".project-entry:last");

    lastProjectEntry.append(formattedProjectTitle)
    .append(formattedProjectDate)
    .append(formattedProjectDescription);

    for (img in projects.projectss[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projectss[project].images);
        $(".project-entry:last").append(formattedProjectImage)
    };
    };
}

var education = {
    
    "schools": [
        {
            "name": "SUNY at Buffalo",
            "location": "Buffalo",
            "degree": "Master of Science",
            "major":["Electrical Engineering"],
            "dates": "2015",
            "url": "www.buffalo.edu"
        },
        {
            "name": "Shenzhen University",
            "location": "New York",
            "degree": "Bachelor of Science",
            "major": ["Applied Physics"],
            "dates":"2013",
            "url" : "www.szu.edu.cn"
        }
    ],

    "onlineCourses": [
        {
            "title" : "Intro HTML5 and CSS3",
            "school" : "Udacity",
            "dates" : "2015/04",
            "url": "www.udacity.com"
        },
        {
            "title" : "JavaScript Basics",
            "school" : "Udacity",
            "dates" : "2015/04",
            "url": "www.udacity.com"
        },
        {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "dates":"2015/04",
            "url": "www.udacity.com"
        }
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

    $("#education").append(HTMLonlineClasses);
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
    }
    
}

bio.display();

work.display();

projects.display();

education.display();


function inName() {

    var firstName = bio.name.split(" ")[0];
    var lastName = bio.name.split(" ")[1];
    return firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase() + " "+ lastName.toUpperCase();
}

$("#mapDiv").append(googleMap);