import axios from 'axios';
const herokuapp = axios.create({ 
  baseURL:'https://vue-lessons-api.herokuapp.com/',
}); 

herokuapp.interceptors.request.use(
  (config) => {
    console.log("請求發起前",config)
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
);

herokuapp.interceptors.response.use(
  (response) => { 
    console.log("請求發起後",response)
    return response;
  },
  (error) => {
    return Promise.reject(error)
  }
);

export const getHKAphotoList = () => herokuapp.get("/photo/list");
export const getHKAdomContent = () => herokuapp.get("/dom/content");
export const getHKAcoursesList = () => herokuapp.get("/courses/list");
export const getHKAcourses_id = (id) => herokuapp.get("/courses/"+id);
export const getHKAcityList = () => herokuapp.get("/city/list");
export const getHKAapiDomainName = (domainName) => {
  console.log(domainName);
  return herokuapp.get(domainName)
};
export const postHKAauthRegistered = (reg) => herokuapp.post("/auth/registered",reg);
// export const postHKAauthRegistered2 = (data) => herokuapp.post("/auth/registered",{name:data});
