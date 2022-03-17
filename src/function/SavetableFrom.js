import React, { useState, useEffect } from "react";


const SavetableFrom = () => {
   
    const [count, setCount] = useState(
        () => JSON.parse(localStorage.getItem("count")) || 0
        
      );
    
      useEffect(() => {
       localStorage.setItem("count", JSON.stringify(count));
      }, [count]);
    
      return (
      <button onClick={() => setCount(count + 1)}>{count}</button>
      );
   
};

export default SavetableFrom;