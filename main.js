
const assignments = [
    {
        title: 'product cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        available: true,
        assignmentUrl: 'www.google.com',
    },

    {
        title: 'Bio Page',
        dueDate: '06/20/2020',
        topic: 'React',
        technologiesUsed: 'use functions',
        available: true,
        assignmentUrl: 'www.freecodecamp.com',
    },

    {
        title: 'Song Maker',
        dueDate: '09/05/2019',
        topic: 'C#/.NET',
        technologiesUsed: 'use SQL',
        available: true,
        assignmentUrl: 'www.google.com',
    },

    {
        title: 'Capstone',
        dueDate: '08/05/2019',
        topic: 'HTML/CSS',
        technologiesUsed: 'Use flexbox',
        available: true,
        assignmentUrl: 'www.google.com',
    },

    {
        title: 'Social Media Site',
        dueDate: '03/05/2024',
        topic: 'HTML/CSS and JS',
        technologiesUsed: 'Use flexbox and React',
        available: true,
        assignmentUrl: 'www.google.com',
    }

   
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    console.log(selectedDiv);
};

const buildAssignmentsCards = () => {
    let domstring = '';
    assignments.forEach((assignment) => {
        domstring += `<div class="card">`
        domstring += `<h3>${assignment.title}<h3>`;
        domstring += `<strong> Due Date:<p>${assignment.dueDate}</strong></p>`;
        domstring += `<p class="topic">${assignment.topic}</p>`;
        domstring += `<p>${assignment.technologiesUsed}</p>`;
        domstring += `<p>${assignment.assignmentUrl}</p>`;
        domstring += `</div>`
    });

    printToDom('projectsPage', domstring);
};







const init = () => {

    buildAssignmentsCards(assignments);
};

init();