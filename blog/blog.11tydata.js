module.exports = async () => { 
  const axios = require("axios");
  const kitten = await axios.get("https://api.thecatapi.com/v1/images/search");
  
  return ({
    "layout": "layouts/post.njk",
    "permalink": "blog/{{ title | slug }}/index.html",
    "tags": [
      "post"
    ],
    "kitten": kitten.data[0]
  });
};
