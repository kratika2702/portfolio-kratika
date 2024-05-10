

const components = [
    { 
        title: "HTML", 
        image: "images/html.png", 
        description: "HTML serves as my digital blueprint, shaping the structure of web pages and laying the groundwork for immersive online experiences." 
    },
    { 
        title: "CSS", 
        image: "images/css.png", 
        description: "CSS is my design brush, adding visual finesse and flair to websites, turning concepts into captivating digital realities." 
    },
    { 
        title: "JavaScript", 
        image: "images/js.png", 
        description: "JavaScript is my coding canvas, empowering me to create dynamic and interactive web experiences that captivate users and elevate brands." 
    },
    { 
        title: "React", 
        image: "images/react.png", 
        description: "React is my toolkit for crafting modern web applications, allowing me to build scalable, component-based UIs that seamlessly adapt to user needs." 
    },
    { 
        title: "Tailwind CSS", 
        image: "images/tailwind.png", 
        description: "Tailwind CSS is my design engine, enabling rapid development of stylish and responsive interfaces with its utility-first approach and extensive component library." 
    }
];



function generateComponents(containerId, components) {
    
    const container = document.getElementById(containerId);
    components.forEach(component => {
        const componentHTML = `
            <div class="component-container">
            <img src="${component.image}" alt="${component.title}" >
            <h3 >${component.title}</h3>
            <p>${component.description}</p>
        </div>
        `;
        container.innerHTML += componentHTML;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateComponents('skillCard', components);
});
