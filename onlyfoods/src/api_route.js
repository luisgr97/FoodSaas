const wl = window.location;
var sub = wl.hostname.split(".")[0];

var api = {
    route: wl.protocol + "//" + wl.hostname + ":8000",
    subdomain: sub !== "localhost" ? sub : "OnlyFoods",
    isLocalhost: sub === "localhost" 
};

export default api;