
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
        domstring += `<div class="card" style="width: 18rem;">`
        // domstring += `<img class="card-img-top" ${assignment.assignmentUrl} alt="Card image cap">`;
        domstring += `<div class="card-body">`;
        domstring += `<h3 class="card-title">${assignment.title}<h3>`;
        domstring += `<strong> Due Date:<p>${assignment.dueDate}</strong></p>`;
        domstring += `<p class="card-text">${assignment.topic}</p>`;
        domstring += `<p class="card-text">${assignment.technologiesUsed}</p>`;
        domstring += `<p class="card-text">${assignment.assignmentUrl}</p>`;
        // domstring +=  `<a href="#" class="btn btn-primary">click</a>`;
        domstring += `</div>`
        domstring += `</div>`
    });

    printToDom('projectsPage', domstring);
};

{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}





const init = () => {

    buildAssignmentsCards();
};

init();