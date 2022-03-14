import React, { useState } from "react";

function Shopping() {


  return (
    <>
    <h1>Shopping</h1>

    <div id="container" class="container">

<div id="testediv">
    <div>
        <label for="filterBox">search</label>
        <input type="text" id="filterBox" class="input-lg"/>
    </div>
    <div>
        <button type="button" id="BackBtn" class="btn">BACK</button>
        <a href="buylist.html"><button type="button" id="memberAddBtn"  class="btn">shopping list</button></a>
        <label for="memberName">TOTAL</label>
        <text type="number" id="totalprice">0</text>
    </div>
</div>
<table class="itemTable">
    <thead>
        <tr>
            <th width="5%">ItemNum</th>
            <th width="13%">Name</th>
            <th width="13%">Price</th>
            <th width="13%">+</th>
            <th width="13%">TOTAL</th>
            <th width="13%">-</th>
            <th width="13%">AllPrice</th>
            <th width="13%">BUY</th>
        </tr>
    </thead>
    <tbody id="itemsTbody">
    </tbody>
    <tbody id="itemsbuyTbody">
    </tbody>
</table>

</div>


    </>
  
  );
}

export default Shopping;
