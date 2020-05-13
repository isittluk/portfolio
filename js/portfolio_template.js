// promote creatively
$(function() {
    let templateScript = $("#expressions-template").html();

    let theTemplate = Handlebars.compile(templateScript);
    let projects = ["first", "second"];
    let theCompiledHtml = null;
    let first = {
        "project": {
            "image": {
                "src": "/img/promote-creatively-min.png",
                "alt": "image preview of promote creatively project"
            },

            "title": "Promote Creatively",
            "statement": "Bringing Business to Fashion.",
            "date": "April 2020 - April 2020",
            "overview": {
                "pOne": "Promote Creatively began as a simple project, aiming to implement basic edits to refine the current brand. The goal of this project adapted quickly, becoming a complete website redesign. The new design should become more user-friendly, and better evoke the client's niche and skills.",
                "pTwo": "Promote Creatively is a social media management service that connects small business owners with their target audience through customer user experience. I was hired as the sole UI/UX designer in April, working directly with the small business owner. I was to design the Home, Stylists, and Blog page and was responsible for leading the User Experience and User Interface side of the platform.",
                "pThree": "Some key achievements of this project are listed as follows:"
            }
        },
        "pageOne": {
            "image": {
                "src": "/img/promote-creatively-2-min.png",
                "alt": "image preview of promote creatively home page"
            },

            "pOne": "Promote Creatively is a social media management service that connects small business owners with their target audience through customer user experience.",
            "pTwo": "I was hired as the sole UI/UX designer in April, working directly with the small business owner. I was to design the Home, Stylists, and Blog page and was responsible for leading the User Experience and User Interface side of the platform.",
            "pThree": "Some key achievements of this project are listed as follows",
            "liOneBold": "Implemented a design process.",
            "liOneDesc": "This helped me and the client establish structure to how we conduct our work and allow visibility and clarity for our upcoming sprint.",
            "liTwoBold": "Improved usability across the platform.",
            "liTwoDesc": "Conducted usability tests by external groups before launch. Implemented new elements to reduce user friction.",
            "liThreeBold": "Established high-fidelity prototypes.",
            "liThreeDesc": "This helped us to maintain consistency in the look and feel accross different parts of the website.",
            "liFourBold": "Establishing a design system.",
            "liFourDesc": "This helped the shareholders understand how and why I chose to implement certain components over others."
        },
        "goals": {
            "goal1": "Become an established brand in SSM and fashion industry.",
            "goal2": "Create a loyal customer base.",
            "goal3": "Establish trust and credibility through excellent service",
            "goal4": "Differentiate from competitors through design innovation."
        },
        "researchMethods": {
            "method1": "Market research analysis",
            "method2": "Prototype testng",
            "method3": "Customer journey",
            "method4": "Persona",
            "method5": "Information architecture"
        },
        "focusAreas": {
            "questions": "What are the challenges or barriers with site use and adoption? What's important for a great user experience? What are the clients' needs and unmet needs, both online and offline? High-fideliity prototype feedback."
        },
        "pageDesc": {
            "homeDesc": "Designing a content-rich landing page that can capture the amount of information the user feels necessary to know -- prioritizing SEO to make it simply known that Promote Creatively is a Social Media Management site and available for bookings.",
            "stylistsDesc": "Referencing a deeper explanation of packages, services, and history. Allowed the user to better get to know the brand and company.",
            "bookDesc": "Book a 1-on-1 appointment with a Cabi Stylists beauty brand specialist. "
        },
        "learnings": {
            "p1Title": "Our Target Audience",
            "p1Desc":  "When you're communicating your process and solutions to a client who isn't always the key decision maker, it's important to keep your points clear and concise enough for easy re-communication. Even though the client may appreciate the extra displayed effort, it can muddy the waters when feedback comes back out."
        }
    };

    let second = {
        "project": {
            "name": "Etsi Bravo",
            "type": "Website Redesign",
        }
    };

    if(window.location.href.indexOf("first") > -1) {
        theCompiledHtml = theTemplate(first);
        console.log("test1");
    } else if (window.location.href.indexOf("second") > -1) {
        console.log("test2");
        theCompiledHtml = theTemplate(second);
    } else console.log("uh oh");
    $('.image_present').attr("src", "/img/logo_1.png");
    $('.content-placeholder').html(theCompiledHtml);
});