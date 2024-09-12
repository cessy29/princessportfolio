// dark mode 
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const lightModeIcon = document.getElementById('light-mode-icon');
    
    console.log(darkModeIcon, lightModeIcon);

    // Check if dark mode is already enabled
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeIcon.style.display = 'inline';  // Show dark mode icon
        lightModeIcon.style.display = 'none';   // Hide light mode icon
    } else {
        lightModeIcon.style.display = 'inline';  // Show light mode icon
        darkModeIcon.style.display = 'none';    // Hide dark mode icon
    }
    
    // Toggle to dark mode
    darkModeIcon.addEventListener('click', () => {
        console.log('Dark mode icon clicked');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        
        darkModeIcon.style.display = 'none';  // Hide dark mode icon
        lightModeIcon.style.display = 'inline'; // Show light mode icon
    });
    
    // Toggle to light mode
    lightModeIcon.addEventListener('click', () => {
        console.log('Light mode icon clicked');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        
        lightModeIcon.style.display = 'none';   // Hide light mode icon
        darkModeIcon.style.display = 'inline';  // Show dark mode icon
    });
});


// for about section 
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  // Automatically activate the first tab (e.g., Education) on page load
  const defaultTab = buttons[0]; // Adjust this to whichever tab you want to activate first
  const defaultContentId = defaultTab.getAttribute('data-target');
  
  defaultTab.classList.add('active');
  document.getElementById(defaultContentId).classList.add('active');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-target');

          // Remove 'active' class from all buttons and contents
          buttons.forEach(btn => btn.classList.remove('active'));
          contents.forEach(content => content.classList.remove('active'));

          // Add 'active' class to clicked button and corresponding content
          button.classList.add('active');
          document.getElementById(targetId).classList.add('active');
      });
  });
});


        // Reveal on Scroll Function
        function revealOnScroll() {
          const elements = document.querySelectorAll('.reveal-on-scroll');
          const windowHeight = window.innerHeight;
          elements.forEach(element => {
              const elementTop = element.getBoundingClientRect().top;
              if (elementTop < windowHeight - 100) {
                  element.classList.add('visible');
              }
          });
      }

      window.addEventListener('scroll', revealOnScroll);
      document.addEventListener('DOMContentLoaded', revealOnScroll);

      
       // Array of skill objects
    const skills = [
        {
            "name": "HTML5",
            "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
        },
        {
            "name": "CSS",
            "icon": "https://img.icons8.com/color/48/000000/css3.png"
        },
        {
            "name": "JavaScript",
            "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
        },
        {
            "name": "Bootstrap",
            "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
        },
        {
            "name": "Java",
            "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
        },
        {
            "name": "Python",
            "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
        },
        {
            "name": "VB.NET",
            "icon": "https://img.icons8.com/ios-filled/50/000000/visual-basic.png"
        },
        {
            "name": "C++",
            "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
        },
        {
            "name": "PHP",
            "icon": "https://img.icons8.com/color/48/000000/php.png"
        },
        {
            "name": "MySQL",
            "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
        },
        {
            "name": "Netlify",
            "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
        },
        {
            "name": "GitHub",
            "icon": "https://img.icons8.com/glyph-neue/48/000000/github.png"
        },

        {
            "name": "Figma",
            "icon": "https://img.icons8.com/color/48/000000/figma.png"
        },
        {
            "name": "Adobe Photoshop",
            "icon": "https://img.icons8.com/color/48/000000/adobe-photoshop.png"
        },
        {
            "name": "Illustrator",
            "icon": "https://img.icons8.com/color/48/000000/adobe-illustrator.png"
        }
     
        
    
    ];

    // Select the skills container
    const skillsContainer = document.getElementById('skillsContainer');

    // Loop through the skills array and create skill elements
    skills.forEach(skill => {
        // Create a div for each skill
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('bar');

        // Create a div for the skill info
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        // Create an img element for the skill icon
        const skillIcon = document.createElement('img');
        skillIcon.src = skill.icon;
        skillIcon.alt = skill.name;

        // Create a span for the skill name
        const skillName = document.createElement('span');
        skillName.textContent = skill.name;

        // Append the icon and name to the info div
        infoDiv.appendChild(skillIcon);
        infoDiv.appendChild(skillName);

        // Append the info div to the skill div
        skillDiv.appendChild(infoDiv);

        // Append the skill div to the container
        skillsContainer.appendChild(skillDiv);
    });
