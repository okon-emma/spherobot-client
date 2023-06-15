import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8443/",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN";

// Also add/ configure interceptors && all the other cool stuff
// instance.interceptors.request...

export default instance;
