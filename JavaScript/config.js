const config = {
    web_title: "Gassia's Portfolio",
    full_name: "Gassia Shnorhokian",
    profile_image: "images/profile_image.jpg",
    about_me: "I am a mechanical engineer with with a strong foundation in design, analysis and hands-on problem solving. My background includes working on projects involving product development, CAD modeling, and structural analysis. I enjoy bringing ideas to life through innovative engineering solutions and practical design thinking. Whether it's improving everyday products or optimizing complex systems, I’m driven by a desire to create efficient and reliable results.",
    contact_email: "shnorhokiangassia@gmail.com",
    github: "https://github.com/Gassia04",
    linkedin: "https://www.linkedin.com/in/gassia-shnorhokian/",
    projects: [
        {
            title: "Thermodynamics Car Project",
            image: "project_images/thermocar.png",
            description: "Car running on a tea candle and some ice.",
            link: "https://github.com/yourusername/project-link",
            detailed_description: "This report provides a detailed overview of the creation of the Amryssa, a car powered through a thermoelectric generator (TEG) and a small motor, using a temperature differential. The purpose of the project was to design and evaluate the efficiency of the TEG when connected to the DC motor and compare it to theoretical values to achieve a better understanding of the importance of losses within a thermodynamic system. \n This project began first with a design process of the cars mechanical system, then the electrical one and then putting both together for the final design. The mechanical system consists of the chassis, positioning and attachment of the motor, the motor itself, the axles, the axle holders, and the wheels. The electrical system included the TEG, with a cold sink attached to one side of it and a hot sink attached to the other side of it. On the cold side, a chamber with a heat sink was used to hold the ice, and on the hot side, a chamber made of insulative material and an aluminum plate above, was made to hold the candle. Many tests were run to determine whether the Amryssa was functional or not, and troubleshooting was done after each test. After many design iterations, the Amryssa finally functioned as designed.",
            references: []
        },
        {
            title: "Simon Memory Game Using Digital Logic",
            image: "project_images/368project.jpg",
            description: "Works without any programmable chips, only digital logic.",
            link: "https://github.com/yourusername/project-link",
            detailed_description: "This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.",
            references: []
        },
        {
            title: "Power Transmission Drive Design",
            image: "project_images/313project.png",
            description: "With full assembly drawing and each individual solidworks part models.",
            link: "https://github.com/yourusername/project-link",
            detailed_description: "This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.This is a detailed description of the project. It includes information about the technologies used, the challenges faced, and the solutions implemented.",
            references: []
        },


    ]
};
document.addEventListener('DOMContentLoaded', () => {
    // Immediately execute since the script tag is at the end of body


    console.log("Configuration loaded:", config);

    // Update the page title if the element exists
    const titleElem = document.getElementsByTagName('title')[0];
    if (titleElem) {
        titleElem.innerText = config.web_title;
    }

    // Update full name on any element using the "full-name" class
    document.querySelectorAll('.full-name').forEach(el => {
        el.innerText = config.full_name;
    });

    // Update mailto links to use the config email
    document.querySelectorAll("a[href^='mailto:']").forEach(anchor => {
        anchor.href = "mailto:" + config.contact_email;
    });

    // Update About page text if present
    const aboutElem = document.getElementById("about_me");
    if (aboutElem) {
        aboutElem.innerText = config.about_me;
    }

    // Update Profile Image (for the About page) if present
    const profileImg = document.getElementById("profile_image");
    if (profileImg) {
        profileImg.src = config.profile_image;
    }

    // Update GitHub and LinkedIn links using querySelectorAll
    document.querySelectorAll('a.github').forEach(anchor => {
        anchor.href = config.github;
    });
    document.querySelectorAll('a.linkedin').forEach(anchor => {
        anchor.href = config.linkedin;
    });





});
