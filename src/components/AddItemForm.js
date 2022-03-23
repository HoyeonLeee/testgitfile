import React, { useState,useEffect } from 'react';
import InputField from './InputField';


const AddItemForm = ({ addItem }) => {


  const [count, setCount] =  useState( () => JSON.parse(localStorage.getItem("count")) || 0 );
    
  //const [count, setCount] =  useState( 0 );

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
   }, [count]);


    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    /*const [itemNumber ]  = 0 ;
    const [itemQuantity]  = 0 ;
    const [itemAllPrice] = 0 ;*/

    const [nameError, setNameError] = useState('');
    const [priceError, setPraiceError] = useState('');

    const resetForm = () => {
        setItemName('');
        setItemPrice('');
    };

    const validateForm = () => {
        resetErrors(); 
        let validated = true;      
        if (!itemName) {
            setNameError('Punt item Name');
          validated = false;
        }
  
        if (!itemPrice) {
            setPraiceError('Put item Price');
          validated = false;
        }
  
        return validated;
    };

    const resetErrors = () => {
        setNameError('');
        setPraiceError('');
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          addItem({
            id: count,
            name: itemName,
            price: itemPrice,
            total : 0,
            allprice : 0
          });

          setCount(count + 1)
          resetErrors();
          resetForm();
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name</label>
                <InputField 
                type="text"
                value={itemName}
                placeholder="Name"
                onChange={e => setItemName(e.target.value)}
                errorMessage={nameError}
                />

                <label>Price </label>
                <InputField 
                type="text"
                value={itemPrice}
                placeholder="Price"
                onChange={e => setItemPrice(e.target.value)}
                errorMessage={priceError}/>
             </div>
             
        <button type="submit">Add</button>
        </form>
        );

}
export default AddItemForm;