exports.seed = function (knex) {
  // Deletes ALL existing entries
  console.log("seed courses");
  return createCourses(knex);
};

function createCourses(knex) {
  return knex("Courses")
    .del()
    .then(function () {
      return (
        knex("Courses")
          //  .returning("Id")
          .insert([
            {
              //'Id': 1,

              Author_Id: 1,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'IMPORTANT NOTE: The material of this course is also covered in my other course about web design and development with HTML5 & CSS3. Scroll to the bottom of this page to check out that course, too! If you\\'re already taking my other course, you already have all it takes to start designing beautiful websites today!\\n\"Best web design course on Udemy: If you\\'re interested in web design, but want more than just a \"how to use WordPress\" course, I highly recommend this one.\" — Florian Giusti\\n\"Very helpful to us left-brained people: I am familiar with HTML, CSS, JQuery, and Twitter Bootstrap, but I needed instruction in web design. This course gave me practical, impactful techniques for making websites more beautiful and engaging.\" — Susan Darlene Cain\\n\"The most educational instructor ever!: Everything is good about this course, you learn a lot, the instructor are excellent and the production is flawless. Love this course, simple as that!\" — Lovisa\\nDid you know that beautiful websites convert better that ones that don\\'t stand out at all? This means more sales, more signups, and ultimately more money for you. Do you want to learn how to do exactly that?\\n\\nIf you wonder how you can make your next website really good looking, then you\\'ve come to the right place! \\nIn this course, I will show you 25+ guidelines of amazing web design in less than 1 hour. No boring theory, no unnecessary stuff. You will learn dead simple web design rules and guidelines that go straight to the point — you can use them to improve your websites today!\\nIn this course, we will use beautiful web design examples together with my 25+ guidelines of amazing web design to learn:\\n• How to make text look professionally designed\\n• How to correctly use the power of colors\\n• How to get and use amazing images, fonts and icons to make your website shine — all for FREE.\\n• How to create a layout using whitespace and visual hierarchy\\n• How to keep yourself inspired to learn more and more about web design\\n• How to make your websites convert better using 8 simple-to-use techniques\\nBut there is even more: I provide you with tons of useful web design resources to get you started for your next web design project! You get immediate FREE access to the course e-book “Best Resources for Web Design and Development with HTML5 & CSS3\". These are real-world resources used by real professionals in the web design industry!\\nYou can use the rules and guidelines you\\'ll learn in this course for everything you want: design your own Wordpress theme, personalize a Bootstrap website, start from scratch with HTML and CSS or mockup a website in Photoshop. The 25+ guidelines of amazing web design are universal and ready-to-use for any project.\\nThis course is perfect for experienced web developers who want to learn how to make their websites look beautiful and professionally designed.\\nSo start designing websites that convert today! The thing is: you will have a hard time to find a compilation of guidelines like the one I show you in this course anywhere else. But see for yourself and click the “Take this course\" button right now.', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",
              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design resources included!",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/473160_d929_3.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/473160_d929_3.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/473160_d929_3.jpg",
              Title: "Web Design for Web Developers: Build Beautiful Websites!",
            },
            {
              //'Id': 2,

              Author_Id: 2,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"Learn the Javascript essentials for web development or any type of programming. Learn all the basics of Javascript including primitive types, arrays, functions, assignment operators, the window object and much more. Also I'll provide clear explanations of objects, constructors and arrays in a clear way for anyone to understand. We'll also dive into some more detail about how Javascript works and even advanced topics like prototype inheritance, scope, execution context and much more. So why should you learn Javascript? Well it's everywhere and is getting even bigger in 2016. It's available to mobile apps, desktop apps, server side nodeJS technology and as always in every single browser around the world. There has never been a better time to learn the basics of Javascript!\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",
              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn how Javascript works, some basic API's and finally create a mini project.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/707962_71f5_4.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/707962_71f5_4.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/707962_71f5_4.jpg",
              Title: "Javascript Essentials",
            },
            {
              //'Id': 3,

              Author_Id: 3,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"Welcome to the course in which you will learn how to create Q&A and Tab sections in your website using HTML, CSS, and JavaScript.This JavaScript course is designed to assist you in becoming more familiar with responsive designs.At end of this course, your will learn how to create responsive Q&A and Tab sections using HTML, CSS, and JavaScript that allow users to toggle between the questions and tabs by clicking on the icons.The CSS section will be covered after you finish with the HTML section, and you will learn how to use font awesome to add minus and plus icons, among other things.Simple HTML, CSS, and JavaScript projects like these ones will teach you many web development skills such as how to add Font Awesome icons, design a responsive and attractive Q&A section, and use some essential JavaScript methods such as the addeventlistener and toggle methods.It is acceptable to not have prior knowledge of HTML, CSS, and JavaScript before beginning. This web development course provides an overview of the fundamentals of HTML, CSS, and JavaScript. This is a brief course that will teach you about HTML, CSS, and JavaScript while having you create simple but functional Q&A and Tab sections for your website.If you are as enthusiastic as I am about learning how to create responsive and visually appealing Q&A and Tab sections, as well as the fundamentals of HTML, CSS, and JavaScript, then let's get started right away.\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",
              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Create a responsive Q&A and Tab sections for your website by utilizing only HTML, CSS, and JavaScript (JS)",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/4038786_c662.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/4038786_c662.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/4038786_c662.jpg",
              Title: "Q&A and Tab sections using HTML, CSS and JavaScript (JS)",
            },
            {
              //'Id': 4,

              Author_Id: 3,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"In this course, you will create a background video project and a counter project to learn the fundamentals of HTML, CSS, and JavaScript (JS), as well as to practice your skills in these areas. I am Sahand and I work as a web developer in the programming industry. I have more than 15 years of experience in the field of programming. In order to share my knowledge and experience with you, I created this introductory course for you. This course is intended to assist you in becoming familiar with the fundamentals of HTML, CSS, and JavaScript. It is divided into three sections.The course will teach you how to write the fundamental HTML, CSS, and JavaScript codes, as well as how to construct a simple but functional website with a video playing in the background. To get started, we'll go over how to install Visual Studio Code and its essential extensions in a straightforward and straightforward manner. After that, we'll write the HTML code for the website. You'll learn how to create a simple Bootstrap button, among other things, once you've finished with the fundamental HTML. After that, you'll move on to the CSS. The skills you will gain from this project include how to use Bootstraps and Font Awesome, how to add and locate a free preloader, how to find free background videos for your project, and all of the essential JavaScript methods, such as add and remove classes, that are used by the vast majority of websites today. Even if you have no prior experience with HTML, CSS, or JavaScript, it is perfectly acceptable to start from scratch with no prior knowledge. A brief overview of HTML, CSS, and JavaScript fundamentals is provided as part of the course's overall structure. A brief introduction to HTML, CSS, and JavaScript will be provided, and the development of a simple but functional website will follow as part of the course.Then let's get started. If you are as excited as I am about learning the fundamentals of HTML, CSS, and JavaScript in order to build an amazing website, then let's get started.\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",
              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Build 2 websites (Counter & background video webs) using HTML, CSS, and JavaScript and learn bootstrap and Font Awesome.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/4020696_7018.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/4020696_7018.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/4020696_7018.jpg",
              Title:
                "Learn HTML, CSS, and JavaScript through 2 simple projects.",
            },
            {
              //'Id': 5,

              Author_Id: 4,
              Category_Id: 3,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'Learn How to Code Dynamic Websites with PHP 5+ for absolute beginners!\\xa0 This course is a total beginners guide to coding dynamic websites with PHP so you need no prior knowledge or experience with PHP — although, it is a good idea if you know some HTML & CSS. (My beginner\\'s guide Build a Website from Scratch with HTML & CSS will teach you everything you need to know about HTML & CSS.)\\xa0 Practical Hands-on Approach\\xa0 My approach with this course, like many of my courses, is to take a practical \"hands on\" approach. While there will be some theory involved — every single lesson requires you to get your hands dirty and exercise what you\\'ve learned in that specific lesson. I find this to be the best approach, because you\\'re able to retain much more of what you learned, and therefore, get up and running with maximizing your practical knowledge of PHP quickly!\\xa0 Why Should I Learn PHP?\\xa0 So — why learn PHP? Well, PHP is a very powerful scripting language used by millions of websites. Some of the most popular websites and frameworks utilize PHP to build their dynamic websites. PHP works very well with HTML, and therefore will allow you to start coding dynamic websites quickly without having to learn some of the more complicated scripting languages out there.\\xa0 You Will Love This Course\\xa0 I think you\\'re going to love this course, and you\\'re going to especially love what you\\'re going to learn. When I first started learning PHP, I couldn\\'t wait to start implementing what I learned into my websites! I think you\\'ll feel the same.\\xa0 It\\'s Totally Free!\\xa0 Also, I am excited to be offering this course absolutely free for three reasons:\\xa0 I don\\'t want a purchasing decision to get in the way of you learning what I have to offer in this course.I want as many people as possible to be able access the content.I want to give you learning material so good that it should cost money.The Final Project\\xa0 Throughout the course you will be building a handful of dynamic PHP examples, but in the last section of the course, we will build a dynamic website for a (fictional) restaurant.\\xa0 So, I invite you to join me in learning how to Code Dynamic Websites with PHP!\\xa0 Let\\'s do this.', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",
              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Code Your Very Own Dynamic Websites by Learning PHP Through Real-World Application & Examples",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/130064_22b3_11.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/130064_22b3_11.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/130064_22b3_11.jpg",
              Title:
                "Practical PHP: Master the Basics and Code Dynamic Websites",
            },
            {
              //'Id': 6,

              Author_Id: 5,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'Are you interested in data science?\\nDo you want to learn R totally from scratch?\\nAre you looking for an easy step by step approach to get into R?\\n\\nDo you want to take an easy R course for BEGINNERS?Well, if your answer is YES to some of these questions, look no further, this course will help you.\\n\\nI created this course for the total beginner. That means for you: No prior knowledge required! If this is your first computer programming language to use - congratulations, you found your entry level material. If you are new to data science, no problem, you will learn anything you need to to start out with R.\\n\\nThat also means for you: if you are already used to R, you will likely benefit more from an advanced course. I have more than ten intermediate and advanced R courses available on Udemy, which might be more suited towards your needs. Check out the r-tutorials instructor profile for more info.\\n\\nLet’s take a look at the content and how the course is structured:\\n\\nWe will start with installation, the R and RStudio interface, add on packages, how to use the R exercise database and the R help tools.\\n\\nThen we will learn various ways to import data, first coding steps including basic R functions, functions and loops and we will also take a look at the graphical tools.\\n\\nThe whole course should take approx. 3 to 5 hours, and there are exercises available for you to try out R. You will also get the code I am using for the demos.\\n\\nAnything is ready for you to enter the world of statistical programming.What R you waiting for?\\n\\nMartin', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",
              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn the essentials of R Programming - R Beginner Level!",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/236676_881e_4.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/236676_881e_4.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/236676_881e_4.jpg",
              Title: "R Basics - R Programming Language Introduction",
            },
            {
              //'Id': 7,

              Author_Id: 6,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"Are you completely new to Data science?\\nHave you been hearing these buzz words like Machine learning, Data Science, Data Scientist, Text analytics, Statistics and don't know what this is?\\nDo you want to start or switch career to Data Science and analytics?\\nIf yes, then I have a new course for you. In this course, I cover the absolute basics of Data Science and Machine learning. This course will not cover in-depth algorithms. I\\xa0have split this course into 3 Modules. This module, takes a 500,000ft. view of what Data science is and how is it used. We will go through commonly used terms and write some code in Python.\\xa0I spend some time walking you through different career areas in the Business Intelligence Stack, where does Data Science fit in, What is Data Science and what are the tools you will need to get started. I will be using Python and Scikit-Learn Package in this course. I am not assuming any prior knowledge in this area. I have given some reading materials, which will help you solidify the concepts that are discussed in this lectures.\\nThis course will the first data science course in a series of courses. Consider this course as a 101 level course, where I don't go too much deep into any particular statistical area, but rather just cover enough to raise your curiosity in the field of Data Science and Analytics.The other modules will cover more complex concepts.\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",
              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn Data science / Machine Learning using Python (Scikit Learn)",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/1555134_031f_3.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/1555134_031f_3.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/1555134_031f_3.jpg",
              Title: "Introduction to Data Science using Python (Module 1/3)",
            },
            {
              //'Id': 8,

              Author_Id: 7,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'Recent\\xa0Review from Similar Course:\\n\"This was one of the most useful classes I have taken in a long time. Very specific, real-world examples. It covered several instances of \\'what is happening\\', \\'what it means\\' and \\'how you fix it\\'. I was impressed.\" \\xa0Steve\\n\\nWelcome to The Top 5 Machine Learning Libraries in Python.\\xa0 This is an introductory course on the process of building supervised machine learning models and then using libraries\\xa0in a computer programming language called Python.\\n\\nWhat’s the top career in the world? Doctor? Lawyer? Teacher? Nope. None of those.\\n\\nThe top career in the world is the data scientist. Great. What’s a data scientist?\\n\\nThe area of study which involves extracting knowledge from data is called Data Science and people practicing in this field are called as Data Scientists.\\n\\nBusiness generate a huge amount of data. \\xa0The data has tremendous value but there so much of it where do you begin to look for value that is actionable? That’s where the data scientist comes in.\\xa0 The job of the data scientist is to create predictive models that can find hidden patterns in data that will give the business a competitive advantage in their space.\\n\\nDon’t I need a PhD? \\xa0Nope. Some data scientists do have PhDs but it’s not a requirement.\\xa0 A similar career to that of the data scientist is the machine learning engineer.\\n\\nA machine learning engineer is a person who builds predictive models, scores them and then puts them into production so that others in the company can consume or use their model. \\xa0They are usually skilled programmers that have a solid background in data mining or other data related professions and they have learned predictive modeling.\\n\\nIn the course we are going to take a look at what machine learning engineers do. We are going to learn about the process of building supervised predictive models and build several using the most widely used programming language for machine learning. Python. There are literally hundreds of libraries we can import into Python that are machine learning related.\\n\\nA library is simply a group of code that lives outside the core language. We “import it” into our work space when we need to use its functionality. We can mix and match these libraries like Lego blocks.\\n\\nThanks for your interest in the The Top 5 Machine Learning Libraries in Python and we will see you in the course.', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",
              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "A Gentle Introduction to the Top Python Libraries used in Applied Machine Learning",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/1198574_369c_3.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/1198574_369c_3.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/1198574_369c_3.jpg",
              Title: "The Top 5 Machine Learning Libraries in Python",
            },
            {
              //'Id': 9,

              Author_Id: 8,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'Data science skills are in much demand today, but it is not just the mathematicians, statisticians, and the computer scientists who can benefit from acquiring them. Data science skills are for everyone!In this course, I help you to begin using R, one of the most important tools in data science, and the excellent graphics package for R, ggplot2. Along the way, I also show you the basics of simple linear regression. There are no prerequisites. We begin with installation of R and RStudio, and I introduce R and ggplot skills as they are needed as we progress toward an understanding of linear regression. Students should be able to complete the course within two weeks, working at an easy pace.Linear regression is a machine learning technique. I hope to create more courses like this one in the future, teaching machine learning, R, ggplot, dplyr, and programming, all at the same time.', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",
              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Begin to use R and ggplot while learning the basics of linear regression",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/487490_5f70_2.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/487490_5f70_2.jpg",
              Thumbnail_Small:
                'https://img-c.udemycdn.com/course/240x135/487490_5f70_2.jpg"}',
              Title: "R, ggplot, and Simple Linear Regression",
            },
            {
              //'Id': 10,
              Author_Id: 9,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'NON TECHNICAL COURSE specifically created for AI/ML/DL Aspirants, gives insight about Road map to A.IThis course will clear all doubts such as, 1. What are prerequisites for learning AI? 2. What is Road map to start Machine learning project(ML)3. How to choose the best programming language for AI ?4. How much Mathematical knowledge needed for AI ?5. Which is the best AI Engine/Tool/Framework for AI ? and so on... Each video is created with real time scenario examples in simple language. So that anyone without programming knowledge can understand in depth about Artificial Intelligence and Machine Learning.  The contents were prepared based on maximum queries searched in google or posted in AI forum. At the end of this course you will get clear clarity on how much effort needed to start your career in Artificial Intelligence or Machine Learning Projects.Note: 1. Students/Experienced professionals, who expects sample coding can skip this course :)\\xa0But soon case study with coding course will be launched :)\\xa02. For Non-English speaking students, I enabled the Auto Caption now. But still the text won’t 100% correct. So I will be updating the captions manually as soon as possible. 3. All AI prerequisites topics like programming language , Mathematics , Machine Learning Algorithms will be posted soon as free course. Keep following.\\xa0 Happy Learning !!', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "NON TECHNICAL COURSE specifically created for AI/ML/DL Aspirants, gives insight about Road map to A.I",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/2155538_297b.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/2155538_297b.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/2155538_297b.jpg",
              Title: "Welcome to Artificial Intelligence !",
            },
            {
              //'Id': 11,
              Author_Id: 10,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"Tired of seeing endless 'How to code 50 Android apps in 10 days' courses?Ever just wanted to get stuck in to Android app development right away?Well, that's why I created this Android development course! No other course takes you from beginner (with no experience) to a full Android app in less time than it takes to make a sandwich! I will show you how to:Install Android Studio (and required extras)Setup the graphical look of your appConnect layout elements like buttons and Text Fields to your java code Code in Java within an Android activityStore items in Android Shared Preferences, making them accessible across app restartsThis course is for you if you:Are a beginner or novice to Android App developmentWant to understand Android apps in a short period of timeLove proceeding at an awesomely brisk pace!This course is not for you if:You are an expert or intermediate programmerWhat software do you need?Android Studio (free) which runs on PC / Mac / LinuxDo you need experience?No. I assume you are a complete beginner to apps and development in generalWhat makes this course different?It's just so quick! Take i right now and you'll learn Android apps before you can even blink! Everyone used to tell me apps were hard to make - but they're wrong. It's probably because they had bad teachers - join me and I'll show you what good teaching is!------------------------------------------------PLEASE NOTE: This course is designed to get you up and running with Android and Android Studio in record time. Therefore we have limited time to actually explain everything. My other course on Android app development explains everything we do in much more detail.\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Android app in Android studio. Learn Android app development now!",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/695836_2fba.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/695836_2fba.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/695836_2fba.jpg",
              Title: "Mobile App Development in 27 Minutes: Android",
            },
            {
              //'Id': 12,
              Author_Id: 11,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'Hello everyone, Welcome to the beginners course of flutter, This course will teach you how to create\\xa0 Flutter application in a very practical & simple manner, as every lecture comes with full coding screencast & corresponding code in notebook\\xa0.\\nThis course will be updates frequently as flutter and dart are in their early stages of development.\\nSo what are you waiting for?', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Build Android and iOS apps with a flutter framework",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/1644780_cd06_3.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/1644780_cd06_3.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/1644780_cd06_3.jpg",
              Title: "Learn Flutter - Beginners Course",
            },
            {
              //'Id': 13,
              Author_Id: 12,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"Android Programming lets you create stuff that's meaningful\\xa0. And that's what we focus on !\\xa0\\nAny programming language is just another language unless you learn it the right way. A programmer can not benefit from its features if she/he does not appreciate a Programming Language's core concepts.\\nBeing an open source platform, it is very important to learn how to solve the problems taking help from other Android Developers. During the course , we guide students how to be not just a programmer but be an active participant in the Android Open Source Community !\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "We start learning Android Programming by understanding concepts and implementing them live!",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/1000888_e8cb_3.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/1000888_e8cb_3.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/1000888_e8cb_3.jpg",
              Title: "Android Development from Scratch to Create Cool Apps!",
            },
            {
              //'Id': 14,
              Author_Id: 10,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'The Complete iOS\\xa010 Developer has just\\xa0ONE goal - to turn you\\xa0into the best developer,\\xa0freelancer and\\xa0entrepreneur that\\xa0you can possibly\\xa0be!\\xa0\\nOther iOS\\xa0courses COMPLETELY\\xa0miss why you\\'re learning to become a developer. How do I know this? Well I\\'ve taken their courses\\xa0because I\\xa0wanted to\\xa0see what the competition is up to!\\nAnd what do these other guys miss?\\nWell they haven\\'t thought about you\\xa0and what your needs are!\\xa0Let me tell you why I think you\\'re here.\\xa0I\\xa0think it\\'s because\\xa0maybe\\xa0you are looking for a way to improve yourself - either via high paying jobs, freelancing or by creating your very own successful startup.\\nI\\xa0get that.\\nSo whilst this course gives you all the developer skills you could ever want - it also\\xa0has more. A complete section on how\\xa0you\\xa0create a startup. Right from\\xa0idea all the way through to raising millions in venture capital\\xa0funding.\\n--------------------------------------------------------\\nWhich one are you?\\n- Six figure salaried developer?\\n- Someone who likes earning between $60 - $120 p/h as a freelancer?\\n- Someone who wants to free themselves from the 9 - 5 jive\\xa0and create a successful\\xa0startup?\\xa0\\n--------------------------------------------------------\\nHere\\'s a recent message I received from one of my students:\\n\"\\xa0Hi Grant, I\\xa0managed to land the fabled 6 figure developer job yesterday\\xa0thanks to your course. In the interview they asked me\\xa0complicated questions and luckily you\\'d explained the majority of those. Thanks for a great course and I\\'m off to buy the\\xa0rest of your courses now that I have a little extra change :)\\xa0\"\\n--------------------------------------------------------\\nBonus For You\\nMany courses offer a few extras here and there. That\\'s nice but they don\\'t have any real value. By real value I\\xa0mean, can it earn you passive\\xa0revenue day after day, week after week or month after month?\\nThis course contains an app that no other course contains. One that I\\'m releasing in time for iOS 10 and one\\xa0that I\\xa0foresee as having HUGE potential. The source code is contained in this course. In fact I\\xa0invite you to compete against me with the\\xa0release. If your app has more users than mine I\\xa0will refund you the price of this course :)\\n------------------------------------------------------\\nWho Am I?\\nEveryone wants to know who\\'s teaching them. Well, here\\'s my bio:\\nI started out as NOT\\xa0A\\xa0PROGRAMMER.\\xa0Hard to believe when I tell you that I\\'ve worked on dozens of the most popular\\xa0apps out there right?\\nThe fact that I didn\\'t start out as a programmer means that\\xa0I actually remember what it\\'s like to be a beginner. I\\xa0remember teachers throwing useless jargon at me and you know what?\\xa0\\nIt sucked!\\nThat\\'s why in this course I\\xa0tell you everything you need to know in plain English!\\nCreating useful appsMaking GPS mapsMaking ticking clock\\xa0appsTranscription appsCalculator appsConverter appsRESTful and JSON appsFirebase appsInstagram clones (but better ;)Fancy animations to WOW\\xa0usersCreating compelling appsHow to start your own startup from idea to financing to selling\\nAnd a ton more!\\nIn Silicon valley venture capitalists talk about return on investment a lot. A good return averaged over all their assets is something like 10%.\\xa0\\nImagine if you could have a return in the thousands of percent?\\nWell that\\'s what you get when you take this course. An investment of a few coffees returns your investment multiple times over.\\nYou are your biggest asset. Invest in it accordingly and take this course today!', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn iOS and Swift to become an app entrepreneur. Includes FREE AWS service, Swift tvOS and Sketch training.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/877482_cfa8_2.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/877482_cfa8_2.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/877482_cfa8_2.jpg",
              Title:
                "The Complete Swift iOS Developer - Create Real Apps in Swift",
            },
            {
              //'Id': 15,
              Author_Id: 13,
              Category_Id: 1,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"I'll teach you how to make iPhone apps with this complete iOS development tutorial. You'll learn how to create apps using the same tools and techniques used to make the top apps in The App Store.  No coding experience? No problem. We'll create our first app in Lesson 2 without writing a single line of code. Then in Lesson 3 of this iOS app development tutorial, we'll learn how to write code in Apple's Objective-C programming language.  Once we've gotten the hang of programming, we'll create three more apps as we explore Apple's iOS software development kit. I'll walk you through every detail of developing the apps from project creation, through every line of code, and on to testing the app.  Finally, in the last lesson I'll let you watch over my shoulder as I submit an app to The App Store.  Take the course now, learn iOS development now and have your first fully functional iPhone app before the end of the day.\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn every step in iOS App Development with iOS app development tutorial, from creating to submitting to app store.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/20366_6760_9.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/20366_6760_9.jpg",
              Thumbnail_Small:
                'https://img-c.udemycdn.com/course/240x135/20366_6760_9.jpg"}',
              Title:
                "This Is How You Make iPhone Apps - iOS Development Course",
            },
            {
              //'Id': 16,
              Author_Id: 14,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'Learn How To Create A Website Using WordPress...A Step by Step Tutorial for Beginners!*** NOW UPDATED FOR 2019 ***Why Take This Course?Learn To Create A WordPress Website in Less Than 1 HourThe Website Will Be Fully Responsive (Mobile Friendly)I Will Share A Coupon Which Gets Your First Month Hosting For 1 Penny!Learn To Create A Logo For Free!Using Most Up To Date Version of WordPress (unlike some others here on Udemy)Get A Certificate of Completion (This is from Udemy)All Lectures Are DownloadableI have got 6+ Years experience of working with WordPressI own 2 different websites which combined have taught thousands of people how to create websites with WordPressThis course is 100% FREE to enroll and always will be!I always respond to my students questions!There are a total of 10 Lectures (plus an intro and an outro) over a total of 55 Minutes. This seems like very little time, but believe me when I say that its MORE than enough time to create a website using WordPress!!Don\\'t worry if all you have you used your computer for so far is sending and receiving emails... by following this course I can almost guarantee that you will be able to create a website using WordPress... and another thing... It will be awesome!Not only will you learn to create a website, step by step but I have also included a link to another video of mine which will show you how to make a logo for free!So go ahead and enroll today and let\\'s make a WordPress Website... TOGETHER!Martie\"', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "A Step by Step Instructional Guide on How To Create A Fully Functional Website Using WordPress in Around 1 Hour!",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/648102_bbdd_2.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/648102_bbdd_2.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/648102_bbdd_2.jpg",
              Title: "How To Create A Website using WordPress (Step by Step)",
            },
            {
              //'Id': 17,
              Author_Id: 4,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"Do you want to know how to get your website live on the web with your own domain name and hosting? You've come to the right place!Buying a domain name, hosting package and getting your website live can be an incredibly intimidating and confusing process if you're unfamiliar with the territory, but let me tell you a secret: It's surprisingly easy! And I'm going to show you exactly how to do all of these things in no time by guiding you in a simple, step-by-step process.In less than 1-hour, you will no longer be uncomfortable with the process of purchasing a Domain Name & Hosting Package, or Uploading your Website Live to the Web via FTP.Don't have a Website or Blog yet? No problem! I will also be showing you how to set up a Wordpress Website (and write your first blog post) in less than 5 minutes.So, what do you say? Want me to teach you how to get your website live on your own domain? Sign up for free today!\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn how to publish your own website live on the web in no time with this web hosting crash course.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/40017_84f0_5.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/40017_84f0_5.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/40017_84f0_5.jpg",
              Title:
                "Web Hosting 101: Get Your Website Live on the Web in No Time",
            },
            {
              //'Id': 18,
              Author_Id: 15,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'Do you Want to Learn Photoshop in a Fun Way Taught by a Friendly Education Expert?After the huge success of the first version we had to do another to help more people like you create designs for the web. This course is IDEAL for total beginners who want to know why behind each of the tools, why behind the methods and why even use Photoshop for web design in the first place. The course is very well explained, gives you lots of nice files to practice with and you will be able to create a web page design at the end of it!Course DescriptionThis course is designed to teach you the basics of Photoshop, even if you have little to no experience with it, to create profitable web designs that help you stand out from the competition.Over 20,000 Students has been taking the old course already, this is the new version of Photoshop (cc)Are you new to Photoshop (cc) or Need a refresher? Then this course will help you learn the basics of Photoshop.Why Choose This Course?Have you ever noticed how beautiful some websites look? That\\'s because of the perfect design that have been made in Photoshop. Also you can definitely make a substantial income once you learn more about Photoshop.“I created this course to teach you the knowledge that will help you with Photoshop since I was in your shoes some years ago. If you need support, my company Web Courses Bangkok will be just a message or an email away, feel free to visit our website. I love when my students succeed and that for me is priceless. You success depends on yours and I will make sure with that you get all the help you need when you need it.\" – Carl Heaton, Senior Instructor We take our courses very seriously but at the same time we try to make it fun since we know how difficult it can be learning from an instructor over the web. This course is fun, and when you need some energy to keep going, you will get it from me. Also the courses are well illustrated and easy to understand.The Approach Practice, practice and more practice. In every lecture you will find the required .psd files to download. Along the way I will be explaining what to do with the files and how to use them.This Photoshop course Covers the following;Explanation about the interface of Photoshop ccUsing the paint brushUsing shapes and making custom shapesUsing layers and groupsExplanation about moving and resizingZooming and panningUsing different blending modes and effectsInsterting and adjusting text into PhotoshopDuring the course you will also learn some keyboard shortcuts Some of my students reviews for the older version of this course:\"great course. Thank you Mr Carl Heaton for this great and simple course!\" - Vili\"Thank You !! Even though I\\'ve played around with Photoshop before this course was really worthwhile and I learnt things which will definitely help me. You are a really good presenter and you make it easy to understand, I\\'ll definitely be taking more of your courses :-)\" - Sue Henderson\"The Way that the Courses are put together are awesome. Love the Way that you Put the Courses Together. The Second Showing is what makes the difference.\" - Marc Antonio Turner\"Excellent course for web designers that want to make there page designs in Photoshop. It explains all I needed to know to design my first website.\" - Koen van Dieren', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learning the basics of Photoshop CC for Web Design Beginners",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/599170_aa50_3.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/599170_aa50_3.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/599170_aa50_3.jpg",
              Title: "Photoshop CC for Web Design Beginners",
            },
            {
              //'Id': 19,
              Author_Id: 16,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': '\"I\\'ve already started setting up my site while I\\'m learning because I\\'m new to wordpress but it\\'s easier than I expected! Thank you!\" - Chris Livingston   Have you ever wanted to create your own website but don\\'t know how to code?    Good news, you\\'re in the right place!   This course is designed to walk you step-by-step through setting up your own WordPress website without any experience or coding required.   Specific action steps are included to walk you through setting up your website so by the end of this course you will have launched your very own WordPress website!Over 74 million websites use WordPress. And almost 50% of the top blogs are built on WordPress. Do you know how to use WordPress to get ahead?  As a web designer for over 10 years, I\\'m here to help you get your website online. I\\'m here to show you exactly how everything in WordPress works. No fancy terminology or complex methods used here. Just exactly what you need to know to set-up a fully functioning website.   \"I have gone through a number of basic WordPress courses on Udemy and this is my favorite so far. I liked the included term definitions and resources as well as practical examples such as setting up email list. Good site example.\" - Christopher Kearney    Get Ready to Cover:   How to set-up a nicely designed site so you will save thousands of $ on hiring a designer. How to add new functionality to your website so you will save even more $ on not having to hire a developer. How to quickly and easily update and manage your own website without having to hire someone to do it for you. How you can start earning money tomorrow by setting up websites for others. And lots more!    \"Excellent training course, one of the best around, if not the best.\" - Brad   My Guarantee   I personally guarantee you will be able to set-up your own WordPress website today without ever touching any code.  I make myself available so you will have access to me if you have questions or need feedback along the way. You\\'re not in this alone!    Click the \\'Take This Course Now\\' button in the top right of your screen to get your website online today.', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "A beginner's guide to creating a WordPress website without any coding for your web design & SEO business.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/149006_b92e_8.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/149006_b92e_8.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/149006_b92e_8.jpg",
              Title: "Create a WordPress Website for Your Web Design Business",
            },
            {
              //'Id': 20,
              Author_Id: 17,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'There are a lot of HTML and CSS courses out there. A lot. How do you choose the one that\\'s right for you?\\nI\\xa0made this course for you--the beginner; the person who has never touched a tag or seduced a selector. Heck, you can learn HTML and CSS even if you\\'re new to computers.\\nSome \"free\" classes are actually disguised\\xa0marketing devices to try to get you to purchase other content from the author(s). I assure you this class is the real deal. I genuinely want to help, and although I do offer paid classes, this one will always be free and good.\\nSure, you could purchase one of the more\\xa0popular courses that has hours and hours of video and 30 or 45 lectures. And, in fact, I encourage you to do so after you take this course. This course is the starting place for all the other web development courses out there.\\nHow can HTML and CSS\\xa0help you?\\nYeah, there are a lot of \"drag \\'n drop\" website creators out there. But behind them all are HTML and CSS, and knowing how HTML and CSS works can be immensely valuable to you.\\nAfter you complete this course, you will be able to make your own website using only Notepad or TextEdit (or a text editor of your choice)! You\\'ll also be able to manipulate existing code in Wordpress, Drupal, and Joomla sites.\\xa0\\nYou can also feel confident in taking a more advanced web design course.\\xa0\\nSTART\\xa0HERE!', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "The starting place for all the other HTML courses out there!",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/1192478_0bde_8.jpg",
              Thumbnail_Medium:
                'https://img-c.udemycdn.com/course/480x270/1192478_0bde_8.jpg"}',
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/1192478_0bde_8.jpg",
              Title: "HTML and CSS: The Super Fun Beginner's Course",
            },
            {
              //'Id': 21,
              Author_Id: 18,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"Logos are a critical part of the modern visual landscape. To learn how to create your own, it's important to be able to identify the components and design techniques behind the most successful Logos. In this course, we will be deconstructing Challenging logos in order to explain why and how they work, and offers a methodical approach to creating a logo in Illustrator. These tutorials combine theory with nuts-and-bolts techniques that emphasize simplicity and readability: the principles that ground the best logo designs. \\nTopics include:\\nChoosing the right typefaceDesigning with simple shapesAdding shine, texture, beveled edges, and transparencyDesigning with negative spaceChoosing logo colorsPreparing final files* Note: I have use used Adobe\\xa0Illustrator cc\\xa0version\\xa0for this course.\\nDesign a logo that stands out from the crowd with the help of these video tutorials. \\n* Fully explained tutorial from starting to end.\\n* Provided you secret techniques of creation.\\nYou also get the Project file to enhance your work flow..\\n Contents and Overview \\n This course, containing over 45 lectures and 2.5 hours of content, provides step-by-step instructions on logo design. \\n Along with this you also get the AI. Working File to download and practice along the tutorials. \\n No logo design experience is required; however, you should have a full or free trial version of Adobe Illustrator, even though you don't need prior knowledge working in this program. \\n Upon completion of this course. You'll know how to create unique symbols, add elements to a word, use geometric shapes and initials, and position text properly. \\n Students will nail the basics of Illustrator, and create logos in color, black and white, and in different formats. All of these skills will make you a more valuable designer or allow you to use your creativity to make your own logos.\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn how to design a logo that stands out from the crowd.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/399938_e897_5.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/399938_e897_5.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/399938_e897_5.jpg",
              Title: "Professional Logo Design in Adobe Illustrator",
            },
            {
              //'Id': 22,
              Author_Id: 19,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"If you’ve ever wanted to try digital painting, but you’re intimidated by photoshop, this course is for you! We’ll go through all of the software’s core functions and tools in a series of easy-to-follow lessons that will have you up and running in no time.\\nThese lessons are the building blocks that you will carry forward to the incredibly cool digital painting courses that we offer. Best of all, this course is absolutely FREE!\\xa0So enroll today and let's get you on board with Photoshop!\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "The power of the digital art standard at your finger tips",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/1298462_38dd.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/1298462_38dd.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/1298462_38dd.jpg",
              Title: "Photoshop Fundamentals",
            },
            {
              //'Id': 23,
              Author_Id: 19,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'This course distills semesters of art school into series of fun, engaging and succinct lessons. We’ll go over all of the core concepts and terminology that you’ll need to start understanding and creating art like a professional and I’ll even teach you my habits for success! Anyone who has a passion for art, but may not know all of the technical terminology or concepts - you have come to the right place.\\nThese lessons are the building blocks that you will carry forward to the incredibly cool digital painting courses that we offer.\\xa0Best of all, if you enroll today, this course is FREE!', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "A beginner's guide to the building blocks of digital art",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/1298438_2631.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/1298438_2631.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/1298438_2631.jpg",
              Title: "Art Fundamentals - Building Blocks of Digital Painting",
            },
            {
              //'Id': 24,
              Author_Id: 20,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'This Frank Reilly method drawing course in fifteen lectures covers the details of the \"Reilly\" drawing technique and demonstrations using it. This technique allows for complete figure drawings from life in less than 45 minutes. Starting with the lines of action and large abstract shapes, the course proceeds through small shapes, negative space, value, perspective, foreshortening, edge, line, details (face, hands and feet), and drapery on the figure. The final two lectures summarize the entire technique and give two examples using it to draw complete figures in under five minutes by Reilly Method Drawing. There are also five complete demonstrations using this technique done in 4- 7 minutes of figures drawn from life in a variety of positions. The driving principal behind this course is that the \"whole is more important than the parts\" which is the reason that I start with a gesture drawing and build on its structure until completion with anatomy and details. Also, I cover how to apply drapery to the figure using the same principles.', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn to draw the figure from life in less than 45 minutes.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/17349_932f_8.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/17349_932f_8.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/17349_932f_8.jpg",
              Title: "Figure Drawing From Life Using The Reilly Technique.",
            },
            {
              //'Id': 25,
              Author_Id: 21,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"Welcome to Logo Design-Fundamentals of Building a Great Brand Logo. Our course teacher, Lauren, walks you through the steps he takes to come up and create a logo design. In Logo Design Fundamentals, Lauren describes his process from start to finish using all the elements it takes to create and build a unique logo. With a Bachelor’s degree in Fine Arts and an Associates degree in Graphic Design, Lauren has the professional experience needed to be the perfect instructor for this course. He has been our lead designer for over 5 years, and we are happy to have him on the Elevated team.  Our Logo Design course is shown using mostly screen casts video. We use the best tools and provide lot's of fun and exciting tips.   Tools Adobe Illustrator, Photoshop and Reader    All the sound is recorded using a Blue Yeti microphone for maximum clarity and we use the Camtasia screen capture for high quality video.   This is a fun course, weather you have little or now background with Adobe products suite or you are seasoned vet looking to pick up some fun tips and tricks from another peer professional logo designer.   Using Adobe and showing how you can help brand someones company with a great logo design is an important skill to have. We are here to add value to your life and want you to feel happy with the content we have created and are providing in this course. We want to be new valuable members of the Udemy family and are excited for the journey.   This class is about 54 mins long and moves pretty fast. We have also included different AUDIO VERSION: Special Bonus Audio Only version, not the same as the course.   Terminology that will be used is very Adobe heavy, but we also include the fundamentals. Fonts, Colors, Tones, Black and White, Feathers, Vertical and Horizontal.   Looking for free logo design? Design Logo Fundamentals. Design process, Adobe Illustrator, Adobe Photoshop, Professional Design, Development, Flat Design, Adobe.   Elevated courses are geared for you to understand not only what design is, but how to recognize great design and understand why it's great. To clarify further this class walks you through the process of developing and designing a logo and doesn't focus just on the tools and little micro pieces of Adobe, it's more of the A-Z process of a professional as he walks you through how to set up each stage of the process. The Process is covered very thoroughly.   Why you should take this course?   Lauren is very proficient in the skills that it takes to make and master a branded logo design. We use a real world example and we are going to take this even further as we walk you through the process to creating the big brand down the road.   Why Again?   Branding is a key element of design Logo represents your company Creating quality work as a professional is paramount  We teach you the process of black and white vs. color Importance of vertical and Horizontal and many other aspects of branded logo design    This Logo Design Fundamentals course is geared towards teaching you the different key components to creating and managing a logo for a company, it's more then just putting together some shapes, with font. This is about identity and craftsmanship   As well about details of the preparation it takes to turn your finished product over to your client a print shop. If you are looking to make a career from your design or even brand identity, this course is perfect for you. These important details can't go over looked and must be included in your final product. From A-Zed we will push you ahead!   Stay tuned for our Big Brand course, as we walk through in more detail the creation of a envelope, stationary, company business card and promotional card.   Once again thank you for taking our course and engaging with our company.\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Logo Design! Not just the basics, it's the fundamentals. Lauren guides you in building and preparing a branded logo.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/270454_23ec_5.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/270454_23ec_5.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/270454_23ec_5.jpg",
              Title: "Logo Design Fundamentals",
            },
            {
              //'Id': 26,
              Author_Id: 22,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': \"This introductory course gives the student an understanding of how we should separate Analysis from Design issues. It does this by looking at the many things that are simply perpetuated from old designs and taking a humorous look at where those old designs originated. The course uses pictures, graphics, both static and animated, with voice-over to show the various real world examples of the perpetuation of old designs. It does this by progressing through basic examples in everyone's regular life to business issues that restrict us as customers. There is no support material needed for this course. The course video is approximately one hour in duration. The student will see the importance of applying analysis concepts to every new invention or system be it a manual task or a computer business system. There are no exercises or questionnaires to complete.\", 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "A look at how the old ways of doing things get perpetuated causing us problems today.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/45551_8735_15.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/45551_8735_15.jpg",
              Thumbnail_Small:
                'https://img-c.udemycdn.com/course/240x135/45551_8735_15.jpg"}',
              Title: "Analysis of Everyday Things.",
            },
            {
              //'Id': 27,
              Author_Id: 23,
              Category_Id: 8,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'Creativity is not a divine gift conceded only to a few.\\xa0It is a heritage of everyone, but people lose their creative potential through life due to many different reasons.But don’t worry, it can be turned around! With the combination of knowledge, tools, exercises and tasks,\\xa0it is possible to bring back to life the creativity inside you!For this reason, this course presents all the stages of the creative process and, for each phase, it teaches a collection of tools and techniques which aim to stimulate and guide creativity! \\xa0In total,\\xa0you will learn more than THIRTY tools and techniques which stimulate the creative process!\\xa0They come from different areas and are not restricted only to the famous Brainstorming and Mind Maps.\\xa0\\xa0Of course, such tools are also explained in the course, but you will learn many others to support creativity, which will\\xa0help you think outside the box and have original ideas!To make your life easier, all these tools are accompanied by\\xa0support materials that were developed exclusively for this course and that can be downloaded and printed\\xa0in order to be used where and when you need them!\\xa0In this course, you will learn:- Ways to identify opportunities and have ideias, through tools such as\\xa0Convergence Map, Behavioral Tendencies Map, Popular Media Scanning, amongst others;- Forms to cllect data that relate directly or indirectly to your idea, like\\xa0Eras Map, Types of Innovation Evaluation, Sociocultural Scanning, etc;- Tips to incubate your idea with the development of activities and challenges, based on\\xa0Creative Idleness;- Many practices to warm up you ideas, such as\\xa0Tool 635, Scamper, 4 Types of Brainstorming, Mind Map, Wordcloud, amongst others;- Practices to illuminate and evalate your ideas, like\\xa0Stakeholder Evaluation, 6 Hats, Role Playing Game and Attributes Evaluation, etc.;- Ways to elaborate your idea through\\xa0Moodboaboards, Canvas, Storyboard, 5W1H,\\xa0and others;- And, finally, you will get to know tools to\\xa0evaluate your idea with potential users, partners and in the market.', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn more than 30 tools to potentialize your creative process and have innovative ideas.",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/1898726_5870_3.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/1898726_5870_3.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/1898726_5870_3.jpg",
              Title: "Guide to Unblock Creativity and Have Original Ideas!",
            },
            {
              //'Id': 28,
              Author_Id: 24,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'A machine generally consists of a motor, a drive, and an actuating element. The mechanical power driving a machine constitutes the rotary motion energy of a motor shaft. Electric motors, internal-combustion motors, or turbines are the most common types of motors. The mechanical power transmission from the motor to the actuating element is accomplished by various driving gears. These include gearings, worm gearings, belt drives, chain drives, and friction gears. Some examples of actuating elements are car steering wheels, work spindles, and screw propellers of ships. This course covers the design of machine elements, in particular all common types of knuckle joint and the needed machine components. The in-depth description, including stress and strength analysis, materials, tables and assembly recommendations allows for a comprehensive and detailed calculation and design of these most important. The course provides the practicing engineer with a clear understanding of the theory and applications behind the fundamental concepts of knuckle joint elements.The aim of the course is to develop the concept for knuckle joint based on the available space and its need. After developing concept design the all elements, including selection of material, factor of safety and calculation of final dimensions. To design the element basic steps were used as 1.Material selection, 2.Factor of safety, 3.Calculate permissible stresses, 4.Free body diagram\\xa0 the element, 5.Deciding weakest cross section and calculate its dimensions.', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Design of Knuckle Joint Elements based on Static load condition",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/3901046_c8ee.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/3901046_c8ee.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/3901046_c8ee.jpg",
              Title: "Design Simple Machine Element",
            },
            {
              //'Id': 29,
              Author_Id: 25,
              Category_Id: 2,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': 'New products and services are the foundation of any long term successful strategy in a business.\\xa0 But when we think about new products and services, we often think only about those groundbreaking products that have changed the world in some way.\\xa0 We often forget that most of the new successful product introductions are much smaller in scale, leverage from the strengths of the organization and its connection with it\\'s customer base.\\xa0 This introductory course will lay the framework for the many different types of new products and services that we can offer our customers.\\xa0 Follow-on courses will develop the details of how to define, develop and launch highly successful new products and services. In this course we will cover:PRODUCT FLOP OR SUCCESS?Learning from failure is a key ingredient of success. This lecture will examine a few of the big product failures in the past and examine what caused those.TYPES OF NEW PRODUCTSWe all think about that earth shattering, revolutionary brand new product that rocks the world. But most successful products are extensions of our current product line or improvements on a current product. This course will review the basic types of new products and how they can be great business investments.SERVICES AS PRODUCTSThe conventional method of thinking about new products is the development and launch of a new physical item...\\xa0 something we can see and feel and hold. We often forget that there are huge opportunities in launching \"New Services\" as a stand alone item or in conjunction with a new physical product. We will review the different classes of services and how they relate to overall business success.This \"PLAIN AND SIMPLE\" series strives to describe all course content\\xa0 in a simple and easy to understand manner, using many practical examples throughout.\\xa0 It is targeted at those learners who have minimal familiarity with the subject matter.The content of the series is based on the author\\'s 35 plus years experience in New Product Development from Concept to Product End of Life. The author started out his career as a product development engineer and progressed to technical marketing, business development and then finally to senior management as a VP and then President of a high tech firm. Following his retirement the author was invited to teach New Product Development to MBA students at the University of Washington in Seattle and to EMBA and Healthcare students at the University of New Haven in Connecticut.', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 1,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description:
                "Learn about new ways to think about defining new products and services. Understand success or failure with new products",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/4199640_d240_11.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/4199640_d240_11.jpg",
              Thumbnail_Small:
                "https://img-c.udemycdn.com/course/240x135/4199640_d240_11.jpg",
              Title: "B03: New Product, Boom or Bust?, Plain & Simple",
            },
            {
              //'Id': 30,
              Author_Id: 26,
              Category_Id: 8,
              Description:
                "{'entityMap': {}, 'blocks': [{'key': '', 'text': '世界中でデジタルトランスフォーメーション（デジタル革命）が急速に進行しています。この時に求められるのはいわゆるSoEとよばれている中でも顧客に新しい経験を提供できる「攻め」のシステムです。この様なシステムはSoRに適した従来型のシステム設計の手法では対応できません。本コースでは、最も重要となる要件定義のパートにおいて適用する「サービスデザイン」の手法について必要性を学習し、習得して頂きます。なお、本コースは情報サービス産業協会(JISA)で開催する実践サービスデザイン講座に向けた事前学習教材です。講師は宗平順己氏が担当します。■講師プロフィール氏名：宗平 順己京都大学理学部大学院中退後、総合電機メーカーを経て、1986年にオージス総研に入社。コンサルティング部長、ソフトウェア工学センター長を経て、2014/3/31まで取締役執行役員技術部長。在任中は、クラウドインテグレーションセンター、アジャイル開発センター、エンタープライズオープンソースセンター、IoTセンター、データサイエンスセンターの技術系組織とビジネスイノベーションセンターのコンサルティング組織を率いる。2014/4/1より株式会社ロックオン特別顧問\\u3000執行役員商流プラットフォーム事業本部長。2016/10/1よりKyotoビジネスデザインラボ主宰し、デジタルリテールやIoT、Logistics4.0に代表されるデジタルトランスフォーメーションを専門研究分野としている。主にIT投資マネジメント、IT統制、ビジネスモデリング、BPM、SOA、EA、BSC、サービスデザインに関する研究活動を行いながら、IT顧問として複数の企業のCIO/CDO補佐、CTO/CSO補佐の任に就く。Service Design Network Japan Chapter 関西支部世話人 。', 'type': 'unstyled', 'depth': 0, 'inlineStyleRanges': [], 'entityRanges': [], 'data': {}}]}",

              Is_Completed: true,
              Language_Id: 5,
              Price: 0,
              Promote_Id: 1,
              Rating: 0,
              Sub_Description: "顧客のデジタル革命の推進役となるために",
              Thumbnail_Large:
                "https://img-c.udemycdn.com/course/750x422/1785082_7651_2.jpg",
              Thumbnail_Medium:
                "https://img-c.udemycdn.com/course/480x270/1785082_7651_2.jpg",
              Thumbnail_Small:
                'https://img-c.udemycdn.com/course/240x135/1785082_7651_2.jpg"}',
              Title: "デジタルトランスフォーメーション(DX)とサービスデザイン",
            },
          ])
      );
    });
}
