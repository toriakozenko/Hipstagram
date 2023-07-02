import { API_URL_GRAPHQL } from "../constants/Api_Graphql";


// export const gql = async (url, query, variables) => {
//   const data = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
//     body: JSON.stringify({ query, variables }),
//   };
//   if (localStorage.authToken) {
//     data.headers.Authorization = "Bearer " + localStorage.authToken;
//   }

//   const response = await fetch(url, data);
//   const responseData = await response.json();
//   return responseData;
// };


export const gql = getGql(API_URL_GRAPHQL);

function getGql (endpoint){
  return async function gql(query, variables = {}){
    return fetch(endpoint,{
      method: 'POST',
      headers: {"Content-Type": "application/json","Accept": "application/json"},
      body: JSON.stringify({query, variables}),
    }).then(res => res.json())
    .then(res1 => {
      if (!res1.data && res1.errors){
        throw (new Error(JSON.stringify(res1.errors)));
      } else{
        return Object.values(res1.data)[0];
      }
    });
  }
}