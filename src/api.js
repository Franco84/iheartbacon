import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

export const fetchJobs = (callback) => {
  const response = axios.get('/jobs/')
    .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
      console.log(error);
});
}
