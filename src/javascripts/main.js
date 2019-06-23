
const assignments = [
  {
    title: 'Purplemonkeydishwashr',
    dueDate: '04/07/2019',
    topic: 'JavsScript',
    technologiesUsed: 'Vanilla JavaScript',
    available: true,
    assignmentUrl: 'www.chrome.com',
    assignmentUrl2: 'https://github.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr',
  },

  {
    title: 'Pet Adoption',
    dueDate: '03/19/2019',
    topic: 'Filter',
    technologiesUsed: 'HTML/CSS and JavaScript',
    available: true,
    assignmentUrl: 'www.chrome.com',
    assignmentUrl2: '',
  },

  {
    title: 'Doggy Day Care',
    dueDate: '06/25/2019',
    topic: 'React',
    technologiesUsed: 'React',
    available: true,
    assignmentUrl: 'www.chrome.comhttps://doggydaycare-e5942.firebaseapp.com/',
    assignmentUrl2: 'https://github.com/CalvinDaMogul/doggy_day_care',
  },

  {
    title: 'Sorting Hat',
    dueDate: '03/26/2019',
    topic: 'HTML/CSS',
    technologiesUsed: 'HTML/CSS and JavaScript',
    available: true,
    assignmentUrl: 'www.chrome.com',
  },

  {
    title: 'Favorite Places',
    dueDate: '04/09/2019',
    topic: 'HTML/CSS and JS',
    technologiesUsed: 'Use flexbox and React',
    available: true,
    assignmentUrl: 'www.chrome.com',
  },

  {
    title: 'Tamagotchi',
    dueDate: '04/23/2019',
    topic: 'HTML/CSS and JS',
    technologiesUsed: 'JavaScript',
    available: true,
    assignmentUrl: 'www.chrome.com',
  },
];


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
  console.error(selectedDiv);
};

const buildAssignmentsCards = () => {
  let domstring = '';
  assignments.forEach((assignment) => {
    domstring += '<div class="card" style="width: 18rem">';
    // domstring += `<img class="card-img-top" ${assignment.assignmentUrl} alt="Card image cap">`;
    domstring += '<div class="card-body">';
    domstring += `<h3 class="card-title">Title: ${assignment.title}<h3>`;
    // domstring += `<strong> Due Date:<p>${assignment.dueDate}</strong></p>`;
    // domstring += `<p class="card-text">${assignment.topic}</p>`;
    domstring += `<p class="card-text">Code Used: ${assignment.technologiesUsed}</p>`;
    // domstring += `<p class="card-text">${assignment.assignmentUrl}</p>`;
    domstring += `<a href=${assignment.assignmentUrl} class="btn btn-secondary">website</a>`;
    domstring += `<a href=${assignment.assignmentUrl2} class="btn btn-secondary">Github</a>`;
    domstring += '</div>';
    domstring += '</div>';
  });

  printToDom('projectsPage', domstring);
};

const navBtns = () => {
  document.getElementById('bioPage').addEventListener('click', buildAssignmentsCards);
  document.getElementById('technologiesPage').addEventListener('click', buildAssignmentsCards);
  document.getElementById('font').addEventListener('click', buildAssignmentsCards);
};


const init = () => {
  buildAssignmentsCards();
  navBtns();
};

init();
