import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:8000/api/graphql"
});

export const fetchProfile = (username) => {
  return client.query({
    query: gql`
      query {
        User(username: "${username}") {
          username
          email
          bio
          src
          likes
          followers
        }
      }`
  });
};

export const fetchProfileImages = (username) => {
  return client.query({
    query: gql`
      query {
        Images(user: "${username}") {
          _id
          likes_total
          comments_total
          user
          src
      }
    }`
  });
};

export const fetchImageComments = (image) => {
  return client.query({
    query: gql`
      query {
        Comments(image: "${image}") {
          _id
          user_src
          user
          body
        }
    }`
  });
};

export const publishComment = (image, comment, user) => {
  return client.mutate({
    mutation: gql`mutation addComment {
      addcomment(data:{
        user: "${user}",
        body: "${comment}",
        image: "${image}",
      }){
        _id
        user_src
        user
        body
      }
    }`
  });
};

export const uploadFile = (imgUsr) => {
  console.log(imgUsr);

  return client.mutate({
    mutation: gql`mutation uploadFile {
      singleUpload(data: {
        user: "mensweardog",
        image: ${imgUsr}
      }) {
        _id
      }
    }`
  });
};
