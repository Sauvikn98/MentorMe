export const addPost = async (postData) => {
    console.log("inside post service", postData)
  return fetch(`http://127.0.0.1:5000/posts/addPost`, {
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': postData.jwt_token
      },
    body: JSON.stringify(postData),
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log({ data });
      return data;
    }).catch(err=> {
        console.log({err})
        return err
    })
};

export const getPostsFromMentors = async (jwt_token) => {
    console.log("inside post service", jwt_token)
  return fetch(`http://127.0.0.1:5000/posts/getPostsFromMentors`, {
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwt_token
      },
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log({ data });
      return data;
    }).catch(err=> {
        console.log({err})
        return err
    })
};

export const getPostsFromMentees = async (jwt_token) => {
    console.log("inside post service", jwt_token)
  return fetch(`http://127.0.0.1:5000/posts/getPostsFromMentees`, {
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwt_token
      },
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log({ data });
      return data;
    }).catch(err=> {
        console.log({err})
        return err
    })
};
const postService = {
    addPost,
   getPostsFromMentors,
   getPostsFromMentees
  };
  
  export default postService;