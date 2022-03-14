import React from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';

const Home = () => {

    const sayHello = () => {
        alert("Hello!");
      };
    

    return (
        <>
        
        <h1>Home</h1>
        <div class="container">
        <div id="formContainer" class="formContainer">
            <form id="memberForm">
                <div>
                    <label for="memberId" >ID </label>
                    <input type="text" id="filterBox" class="input-sm"/>
                </div>
                <div>
                    <label for="memberPw">PW </label>
                    <input type="text" id="loginpw" class="input-sm"/>

                </div>
                <div>
                <Link to='/menu'>
                  <button type="button" id="memberAddBtn" class="btn" onClick={() => {sayHello();}}>
                    MAKEid
                    </button></Link>
                  
                    <button type="button" id="LoginBtn" class="btn">login</button>
                </div>
            </form>
        </div>
</div>
        </>
    );
};

export default Home;