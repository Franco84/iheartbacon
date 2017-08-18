import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

const helpers = {
  getJobs: function () {
    return axios.get('/jobs')
    .then(function (arr) {
      return {
        jobs: arr.data
      };
    });
  }
};

export default helpers;
