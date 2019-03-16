
const assignments = [
    {
        title: 'product cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },

    {
        title: 'Bio Page',
        dueDate: '06/20/2020',
        topic: 'React',
        notes: 'use functions',
        assignmentUrl: 'www.freecodecamp.com',
    },

    {
        title: 'Song Maker',
        dueDate: '09/05/2019',
        topic: 'C#/.NET',
        notes: 'use SQL',
        assignmentUrl: 'www.google.com',
    },

    {
        title: 'Capstone',
        dueDate: '08/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },

    {
        title: 'Social Media Site',
        dueDate: '03/05/2024',
        topic: 'HTML/CSS and JS',
        notes: 'Use flexbox and React',
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
    for(let i = 0; i<assignments.length; i++){
        domstring += `<div id="assignment">`
        domstring += `<h3>${assignments[i].title}<h3>`;
        domstring += `<strong> Due Date:<p>${assignments[i].dueDate}</strong></p>`;
        domstring += `<p class="topic">${assignments[i].topic}</p>`;
        domstring += `<p>${assignments[i].notes}</p>`;
        domstring += `<p>${assignments[i].assignmentUrl}</p>`;
        domstring += `</div>`
    }
    printToDom('assignment', domstring);
};





const init = () => {

    buildAssignmentsCards();
};

init();