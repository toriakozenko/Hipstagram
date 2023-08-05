import { gql  } from "../Gql/index";
import { actionPromise } from "../store/actionPromise";

  export const actionCollection = () =>
  actionPromise('collection', 
  gql (`query collection($q: String) {
    CollectionFind(query: $q) {
      _id
      text
      posts {
        title
        text
      }
      owner {
        _id
        login
      }
    }
  }`,  { q: "[{},{\"sort\":[{\"_id\":-1}]}]" }));
  


  