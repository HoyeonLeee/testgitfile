import React, { useState } from "react";

function Basket() {


  return (
    <>
    <h1>Basket</h1>

    <div id="container" class="container">
        <div id="testediv">
            <div>
                <input id="latlng" type="text"/>
                <button type="button" id="BackBtn" data-action="logintry" class="btn">Back</button>
                <button type="button" id="allbuy"  class="btn">GPS</button>
                <button type="button" id="alldelit"  class="btn">Clean</button>
                <button type="button" id="showGraph"  class="btn">show graph</button>
            </div>
            <div>
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
                    <th width="13%">allPrice</th>
                    <th width="13%">DAY</th>
                    <th width="13%">Delete</th>
                </tr>
            </thead>
            <tbody id="itemsbuyTbody">
            </tbody>
        </table>
    
    </div>


    </>
  
  );
}

export default Basket;
