import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID nfN0RVV983VcA3-ox4jab04EO5xjoAT0q4JU-nQMYFk",
      }
})