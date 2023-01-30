import axios from 'axios';
const runMocky = axios.create({ 
  baseURL:'https://run.mocky.io/v3/', 
});
// https://run.mocky.io/v3/667a75bc-2621-4bd8-8f8f-f2bb74ad3e21
runMocky.interceptors.request.use(
  (config) => console.log("請求發起前", config),
  (error) => Promise.reject(error)
);

runMocky.interceptors.response.use(
  (response) => console.log("請求發起後", response),
  (error) => Promise.reject(error)
);

export const getRunMockyIndex = () => runMocky.get("/667a75bc-2621-4bd8-8f8f-f2bb74ad3e21");
