import { API_URL_GRAPHQL } from "../constants/Api_Graphql";


export const gql = getGql("http://hipstagram.node.ed.asmer.org.ua/graphql");

function getGql (endpoint){
  return async function gql(query, variables = {}){
    return fetch(endpoint,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // ...(store.getState().auth.token ? {authorization : "Bearer " + store.getState().auth.token} : {})  
      },
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