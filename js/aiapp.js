function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// JavaScript code to dynamically load projects
    const projects = [
        { title: 'E-commerce Web shop',
          description: 'Description for Project 1',
          image: 'https://gifdb.com/images/high/programming-coding-digital-marketing-b63zccx04i4luhh9.gif'
        },
        { title: 'Cafe Jill shop',
          description: 'My 1st project',
          image: 'https://user-images.githubusercontent.com/115187902/230700872-d5f44b85-56c7-4e27-80a4-6e2db901e60c.gif'
        },
        { title: 'Project 1',
          description: 'Description for Project 1',
          image: 'https://gifdb.com/images/high/programming-coding-digital-marketing-b63zccx04i4luhh9.gif'
        },
        { title: 'Project 2',
          description: 'My 1st project',
          image: 'https://user-images.githubusercontent.com/115187902/230700872-d5f44b85-56c7-4e27-80a4-6e2db901e60c.gif'
        },
        { title: 'Project 1',
          description: 'Description for Project 1',
          image: 'https://gifdb.com/images/high/programming-coding-digital-marketing-b63zccx04i4luhh9.gif'
        },
        { title: 'Project 2',
        description: 'My 1st project',
        image: 'https://user-images.githubusercontent.com/115187902/230700872-d5f44b85-56c7-4e27-80a4-6e2db901e60c.gif'
       }
        // Add more projects here...
    ];

const projectSection = document.getElementById('projects');

projects.forEach(function(project) {
    let projectItem = document.createElement('div');
    projectItem.className = 'project-item';

    let img = document.createElement('img');
    img.src = project.image;

    let projectInfo = document.createElement('div');
    projectInfo.className = 'project-info';

    let h3 = document.createElement('h3');
    h3.textContent = project.title;

    let p = document.createElement('p');
    p.textContent = project.description;

    projectInfo.appendChild(h3);
    projectInfo.appendChild(p);

    projectItem.appendChild(img);
    projectItem.appendChild(projectInfo);

    projectSection.appendChild(projectItem);
});




// Aniomation of cursor

document.addEventListener('mousemove', e => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});
