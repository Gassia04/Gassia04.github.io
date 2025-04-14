const config = {
    web_title: "Gassia's Portfolio",
    full_name: "Gassia Shnorhokian",
    profile_image: "images/Profilepic.jpg",
    about_me: "I am a mechanical engineer with with a strong foundation in design, analysis and hands-on problem solving. My background includes working on projects involving product development, CAD modeling, and structural analysis. I enjoy bringing ideas to life through innovative engineering solutions and practical design thinking. Whether it's improving everyday products or optimizing complex systems, I’m driven by a desire to create efficient and reliable results.",
    contact_email: "shnorhokiangassia@gmail.com",
    github: "https://github.com/Gassia04",
    linkedin: "https://www.linkedin.com/in/gassia-shnorhokian/",
    projects: [
        {
            title: "Thermodynamics Car Project",
            image: "project_images/thermocar.png",
            description: "Car running on a tea candle and some ice.",
            link: "https://drive.google.com/drive/folders/15M0fUEQSo-9hPJOiqwEBPcXTkYofV6Rh?usp=sharing",
            detailed_description: "This report provides a detailed overview of the creation of the Amryssa, a car powered through a thermoelectric generator (TEG) and a small motor, using a temperature differential. The purpose of the project was to design and evaluate the efficiency of the TEG when connected to the DC motor and compare it to theoretical values to achieve a better understanding of the importance of losses within a thermodynamic system. \n \n This project began first with a design process of the cars mechanical system, then the electrical one and then putting both together for the final design. The mechanical system consists of the chassis, positioning and attachment of the motor, the motor itself, the axles, the axle holders, and the wheels. The electrical system included the TEG, with a cold sink attached to one side of it and a hot sink attached to the other side of it. On the cold side, a chamber with a heat sink was used to hold the ice, and on the hot side, a chamber made of insulative material and an aluminum plate above, was made to hold the candle. Many tests were run to determine whether the Amryssa was functional or not, and troubleshooting was done after each test. After many design iterations, the Amryssa finally functioned as designed.",
            references: []
        },
        {
            title: "Simon Memory Game Using Digital Logic",
            image: "project_images/368project.png",
            description: "Works without any programmable chips, only digital logic.",
            link: "https://drive.google.com/drive/folders/1u5JLbzpYKLByyltD-0QNVZe7C78N3EFt?usp=sharing",
            detailed_description: `The project we chose is the P26, Simon memory game. In essence, the game consists of the circuit outputting a randomized sequence using 4 LED lights (red, blue, yellow and green). The user must then replicate the sequence by pressing the correct push buttons with its respective LED light. The sequence itself starts with one LED and every time the sequence is correct, the circuit will output a green light and add another light to the previous one. This continues until the sequence reaches 7 lights at which point the last green light is displayed and the game stops. If the sequence is correct, the circuit will output a green light. If the user inputs the wrong color light, then the game will automatically end.
            \n Here’s an example of how the game would progress (R: red, B: blue, G: green, Y: yellow)
            \n R → R, B → R, B, B → R, B, B, Y → R, B, B, Y, R → R, B, B, Y, R, G → R, B, B, Y, R, G, Y 
            \n \n While the P26 project on Excel expects the circuit to start with 4 LEDs until it reaches 8, our project follows the original Simon memory game, which starts the sequence with 1 light and adds one after every round. Additionally, every round adds an LED to the already displayed sequence, instead of having a random sequence at every round as specified in the project description. This not only makes the game longer and more complex to build, but it also gives the user a real Simon memory game experience.`,
            references: []
        },
        {
            title: "Power Transmission Drive Design",
            image: "project_images/313project.png",
            description: "With full assembly drawing and each individual solidworks part models.",
            link: "https://drive.google.com/drive/folders/1KJ23rGFCmEUqSVVAmITntYyMVabSvGk8?usp=sharing",
            detailed_description: `The following are the specifications for the design of the power transmission drive: 
            \n - The shaft is held by a radial ball bearing housing an inside diameter of 1.000 inches, an outside diameter of 2.000 inches and a width of .500 inches located in the housing. Estimate sizes that are not given. The end cap and a retaining ring hold the bearing in the housing. A single retaining ring hold the bearing in position on the shaft.
            \n - The end cap is held in the housing by a retaining ring.
            \n - The gear is held to the clutch by a key and retaining ring. A key locked in position by a setscrew holds the clutch in position on the shaft.
            \n - Dimensions shown are nominal sizes. Select proper fits for keys and bearings, using the tables in the Appendix, showing the limits of size for each.`,
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
