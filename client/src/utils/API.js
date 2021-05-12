import axios from "axios";

export default {
    saveNum: function(numData) {
        return axios.post("/api/number", numData);
    }
};