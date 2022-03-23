import React, { useState, useEffect } from "react";
import ShoppingForm from "../components/ShoppingForm";


const Shopping = () => {

    const [items, setItems] = useState([]);
    let Totalprice = 0;
    let Totalprice2 = [];


    if (localStorage.length > 0) {
      Totalprice2 = [...JSON.parse(localStorage.getItem('ItemList'))];
    };

    useEffect(() => {


      if (localStorage.getItem('ItemList') !== null) {
        setItems(JSON.parse(localStorage.getItem('ItemList')))
      };

      for (let sumuid = 0; sumuid < Totalprice2.length; sumuid++) {

        const sumprice = Totalprice2[sumuid];

        if(sumprice !== null){
          Totalprice += sumprice.allprice;
          document.getElementById('totalprice').innerText = Totalprice;
        }
        
      };


    }, []);



    const Plusebtn = (id) => {


      items.find(item => item.id === id).total = items.find(item => item.id === id).total + 1;
      items.find(item => item.id === id).allprice
        = items.find(item => item.id === id).total *
        items.find(item => item.id === id).price;


      for (var sumuid = 0; sumuid < items.length; sumuid++) {

        const sumprice = items[sumuid];
        Totalprice += sumprice.allprice;

      };

      document.getElementById('totalprice').innerText = Totalprice;


      localStorage.setItem('ItemList', JSON.stringify(items));
      setItems(JSON.parse(localStorage.getItem('ItemList')));

    };

    const Minusbtn = (id) => {

      if (items.find(item => item.id === id).total !== 0) {

        items.find(item => item.id === id).total = items.find(item => item.id === id).total - 1;
        items.find(item => item.id === id).allprice
          = items.find(item => item.id === id).total *
          items.find(item => item.id === id).price;

        for (var sumuid = 0; sumuid < items.length; sumuid++) {

          const sumprice = items[sumuid];
          Totalprice += sumprice.allprice;

        };

        document.getElementById('totalprice').innerText = Totalprice;


        localStorage.setItem('ItemList', JSON.stringify(items));
        setItems(JSON.parse(localStorage.getItem('ItemList')));

      } else {
        alert("cant Minusbtn")
      }



    };

    const renderItems = items.length ? items.map(item => {

      return (
        <ShoppingForm
          item={item}
          key={item.id}
          Plusebtn={Plusebtn}
          Minusbtn={Minusbtn}
        />
      );

    }) : 'Dont have member data.';



    return (
      <>
        <h1>Shopping</h1>
        <div id="container" class="container">

          <div id="testediv">
            <div>
              <label for="filterBox">search</label>
              <input type="text" id="filterBox" class="input-lg" />
            </div>
            <div>
              <label for="memberName" >TOTAL</label>
              <text type="number" id="totalprice"> {Totalprice} </text>
            </div>
          </div>
          <table class="itemTable">
            <thead>
              <tr>
                <th width="5%">ItemNum</th>
                <th width="5%">Name</th>
                <th width="5%">Price</th>
                <th width="5%">+</th>
                <th width="5%">TOTAL</th>
                <th width="5%">-</th>
                <th width="5%">AllPrice</th>
                <th width="5%">BUY</th>
              </tr>
              {renderItems}
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
