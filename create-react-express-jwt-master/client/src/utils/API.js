import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', { username: username, email: email, password: password });
  },
  // add a family
  addFamily: (username, familyName) => {
    return axios.put('api/addFamily', { username: username, familyName: familyName })
  },
  // add a picture
  addPictureURL: (username, personalPic) => {
    return axios.put('api/addPicture', { username: username, personalPic: personalPic })
  },
};
