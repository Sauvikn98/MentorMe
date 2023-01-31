export const createMentor = async (userData) => {
    console.log("inside service", userData)
  return fetch(`http://127.0.0.1:5000/user/register/mentor`, {
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(userData) ,
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

export const createMentee = async (userData) => {
  return fetch(`http://127.0.0.1:5000/user/register/mentee`, {
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(userData) ,
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

export const login = async (userData) => {
    return fetch(`http://127.0.0.1:5000/user/login`, {
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(userData) ,
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

  export const getCurrentUser = async (userData) => {
    return fetch(`http://127.0.0.1:5000/user/current`, {
      headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userData
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
  

export const addEducation = async (userData) => {
    return fetch(`http://127.0.0.1:5000/user/profile/addEducation`, {
      headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userData.jwt_token
        },
      body: JSON.stringify(userData) ,
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

  export const addExperience = async (userData) => {
    return fetch(`http://127.0.0.1:5000/user/profile/addExperience`, {
      headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userData.jwt_token
        },
      body: JSON.stringify(userData) ,
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

  export const requestForMentorship = async (userData) => {
    return fetch(`http://127.0.0.1:5000/connection/requestMentorship/${userData.mentorId}`, {
      headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userData.jwt_token
        },
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

  export const approveMentorship = async (userData) => {
    return fetch(`http://127.0.0.1:5000/connection/approveMentorship/${userData.menteeId}`, {
      headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userData.jwt_token
        },
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

const authService = {
  createMentee,
  createMentor,
  addEducation,
  addExperience,
  login,
  getCurrentUser,
  requestForMentorship
};

export default authService;
