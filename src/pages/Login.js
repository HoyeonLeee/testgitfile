import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';
import Member from "../components/Member";


const Login = () => {

  let unetMembers = [];
  let cheakMembers = [];


  if (localStorage.length > 0) {
    unetMembers = [...JSON.parse(localStorage.getItem('MEMBER'))];
  };


  const sayHello = () => {

    cheakMembers = unetMembers.find(member => member.memberid === loginId);

    if(loginPw==cheakMembers.memberpw){
      window.location.replace("/menu");
    }else{
      alert("different password");
    }

    //alert(JSON.stringify(cheakMembers.memberpw));
    //alert(localStorage.getItem("MEMBER"));
  };

  //const selectid = unetMembers.find(members => member.memberId === loginId);


  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');


  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <h1>Login</h1>
    
    <form onSubmit={onSubmit}>
      <div class="container">
          <div id="formContainer" class="formContainer">
              <form id="memberForm">
                  <div>
                      <label for="memberId" >ID </label>
                      <input 
                      type="text" 
                      value={loginId}
                      onChange={e => setLoginId(e.target.value)}
                      id="filterBox"
                      class="input-sm"/>
                  </div>
                  <div>
                      <label for="memberPw">PW </label>
                      <input type="text"
                      value={loginPw}
                      onChange={e => setLoginPw(e.target.value)}
                      id="loginpw" 
                      class="input-sm"/>

                  </div>
                  <div>
                     <Link to='/memberslist'>
                    <button type="button" id="memberAddBtn" class="btn">
                      MAKEid
                      </button></Link>
                    
                      <button type="button" id="LoginBtn" class="btn" onClick={() => {sayHello();}}>
                          login
                      </button>
                  </div>
              </form>
          </div>
      </div>
    </form>

    </>
  
  );
}

export default Login;
