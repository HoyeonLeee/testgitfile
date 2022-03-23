import React, { useState,useEffect } from 'react';

const ShoppingForm = ({item,Plusebtn,Minusbtn}) => {


    return (

        <>
            <tr className="item">
                <td width="5%">{item.id}</td>

                <td width="5%" className="items-name">{item.name}</td>

                <td width="5%" className="items-price">{item.price}</td> 

                <td width="5%">
                <button onClick={() => Plusebtn(item.id)}>
                +
                </button>
                </td>

                <td width="5%" className="items-Total">{item.total}</td> 

                <td>
                <button onClick={() => Minusbtn(item.id)}>
                -
                </button>
                </td>

                <td width="5%" className="items-AllPrice">
                    {item.allprice}</td> 

                <td>
                <button>
                BUY
                </button>
                </td>

            </tr>
        </>


    );

};

export default ShoppingForm;