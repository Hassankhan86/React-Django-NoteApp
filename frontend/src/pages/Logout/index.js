import React, { useState, useEffect, Fragment } from 'react';
import { Form, Input, Button, Modal } from 'antd';

const Logout = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (localStorage.getItem('token') == null) {
//       window.location.replace('http://localhost:3000/login');
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const handleLogout = e => {
//     e.preventDefault();

//     fetch('http://127.0.0.1:8000/api/v1/users/auth/logout/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Token ${localStorage.getItem('token')}`
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         localStorage.clear();
//         window.location.replace('http://localhost:3000/login');
//       });
//   };
const LocalStorageToken = localStorage.getItem('myData');

const onFinish = async (state) => {
    // loginApi = async (path, state) => {
        let response = await fetch('/accounts/logout/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${LocalStorageToken}` },
        //   body: JSON.stringify(state)
        })
        let data = await response.json();
        return data
    // const res = await API.loginApi('/accounts/login/', state)
    // if (res.token) {
        // localStorage.setItem('myData', res.token);
        // saveTokenInLocalStroage(res.token)   // Local Stroage
        // history.push('/');
    // } else {
    //     Modal.error({
    //         // title: 'Confirm',
    //         content: 'Unable to log in with provided credentials',
    //         okText: 'Ok',
    //         cancelText: 'Cancel',
        // });
    }


  return (
    <div>
      {/* {loading === false && ( */}
        <Fragment>
          <h1>Are you sure you want to logout?</h1>
          <input type='button' value='Logout' onClick={onFinish} />
        </Fragment>
      {/* )} */}
    </div>
  );
};

export default Logout;