import React, { useState,useEffect } from "react";
import AddItemForm from "../components/AddItemForm";
import Items from "../components/Items";

function AddItem() {

    const [items, setItems] = useState([]);
    let unetItems;

    useEffect(() => {
      if (localStorage.getItem('ItemList') !== null) {
        setItems(JSON.parse(localStorage.getItem('ItemList')))
      };
    }, []);


    const removeItems = (id) => {


      unetItems=items;

      unetItems = unetItems.filter(item => item.id !== parseInt(id));
      localStorage.setItem('ItemList', JSON.stringify(unetItems));

        setItems(items.filter(item => {
            return item.id !== id;
          }));
  
        };
  
      const renderItems = items.length ? items.map(item => {
          return (
            <Items 
              item={item} 
              key={item.id}
              removeItems={removeItems}
            />
          );
        }) : 'Dont have member data.';



    const addItem = (item) => {
        
        unetItems = [...items, item];
        setItems(unetItems);
        localStorage.setItem('ItemList', JSON.stringify(unetItems));
      
    };



  return (
    <>
    <h1>AddItem</h1>

    <div id="container" class="container">
        <div class="formContainer">
            <AddItemForm addItem={addItem} />
        </div>

        <table class="itemTable" >
            <thead>
                <tr>
                    <th width="5%">ItemNum</th>
                    <th width="13%">Name</th>
                    <th width="13%">Price</th>
                </tr>
                    {renderItems}
            </thead>
            <tbody id="itemsTbody">
            </tbody>
        </table>

    </div>
    </>
  
  );
}

export default AddItem;
