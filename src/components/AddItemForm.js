import React, { useState } from 'react';
import InputField from './InputField';

const AddItemForm = ({ addItem }) => {


    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');

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
            name: itemName,
            price: itemPrice
          });

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