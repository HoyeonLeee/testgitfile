import React, { useState } from "react";
import AddItemForm from "../components/AddItemForm";


function AddItem() {

    const addItem = (item) => {

      };

  return (
    <>
    <h1>AddItem</h1>

    <div id="container" class="container">
        <div class="formContainer">
            <AddItemForm addItem={addItem} />
            <form id="itemForm">
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
