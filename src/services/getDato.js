import axios from "axios";

const getDato = query => {
  return axios("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer 741cdbc19428b443b9ded9d67b9aed`
    },
    data: {
      query
    }
  }).then(res => res.data.data);
};

export default getDato;
