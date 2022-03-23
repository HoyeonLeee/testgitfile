import React from 'react';

const Items = ({ item, removeItems }) => {
    return (
            
                <tr className="item">
                <td width="5%">{item.id}</td>
                <td width="13%" className="items-name">{item.name}</td>
                <td width="13%" className="items-price">{item.price}</td> 
                <td width="13%">
                <button onClick={() => removeItems(item.id)}>
                Delete
                </button>
                </td>
                </tr>

                
    );
};

export default Items;