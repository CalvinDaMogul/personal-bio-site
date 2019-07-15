import axios from 'axios';
import apiKeys from './apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getAssignmentsByUid = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/assignments.json`)
    .then((results) => {
      const assignmentResults = results.data;
      const assignments = [];
      Object.keys(assignmentResults).forEach((assignmentsId) => {
        assignmentResults[assignmentsId].id = assignmentsId;
        assignments.push(assignmentResults[assignmentsId]);
      });
      resolve(assignments);
    })
    .catch(err => reject(err));
});

export default { getAssignmentsByUid };
