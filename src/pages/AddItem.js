import React, { useState } from "react";

function AddItem() {


  return (
    <>
    <h1>AddItem</h1>

    <div id="container" class="container">
        <div class="formContainer">
            <form id="itemForm">
                <div>
                    <input type="hidden" id="itemUid"/>
                    <label for="itemName">Name</label>
                    <input type="text" id="itemName" class="input-sm"/>
                    <label for="itemPrice">Price </label>
                    <input type="text" id="itemPrice" class="input-sm"/>
                </div>
                <div>
                    <button type="button" id="BackBtn" class="btn">BACK</button>
                    <button type="button" id="itemAddBtn" class="btn">ADDitem</button>
                    <button type="button" id="CleanBtn" class="btn">CLEAN</button>
                </div>
            </form>
        </div>
      

        <table class="itemTable" >
            <thead>
                <tr>
                    <th width="5%">ItemNum</th>
                    <th width="13%">Name</th>
                    <th width="13%">Price</th>
                </tr>
            </thead>
            <tbody id="itemsTbody">
            </tbody>
        </table>
    </div>

    </>
  
  );
}

export default AddItem;
