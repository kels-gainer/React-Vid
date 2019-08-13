import axios from "axios";
const apiKey = "AIzaSyB8MPYmpMIAAnuoUtJ-BGn9oXrhYqUX6UA";

// group all API calls

export default {
    searchYouTube: function(term) {
        return axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                q: term,
                type: "video",
                key: apiKey
            }
        })
    }
}