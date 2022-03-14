import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';


function Menu() {


  return (
    <>
    <h1>Menu</h1>

    <div id="formContainer" class="formContainer">
        <div>
            <button type="button" id="BackBtn" class="btn">BACK</button>
        </div>
        <div>
        <Link to='/additem'>
        <button type="button" class="btn">AddItem</button>
        </Link>
        </div>
        <div>
        <Link to='/shopping'>
        <button type="button"  class="btn">Shopping</button>
        </Link>
        </div>
        <div>
        <Link to='/basket'>
        <button type="button" class="btn">Basket</button>
        </Link>
        </div>
    </div>
    </>
  );
}

export default Menu;
