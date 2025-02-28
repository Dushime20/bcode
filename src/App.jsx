import { useState } from 'react'
const App = () => {
  const products = [
    {
      weight: "1kg",
      price: "RWF 2000",
    },

   
  
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Details</h2>
      <div className="border-b pb-4 mb-4">
      <p>
  <img className="w-10 h-10 rounded-lg img" src="/image/umushonge.jpg" alt="image" />
</p>
        <p><strong>Brand:</strong> UMUSHONGE</p>
        
        <p><strong>Product:</strong> Composite Flour (Ifu y’igikoma)</p>
        <p><strong>Ingredients:</strong> Corns, soybeans, sorghum, wheat, peanuts, beans, rice, milk</p>
        <p><strong>Company:</strong> Golden 250 Grams Ltd</p>
        <p><strong>Country of Origin:</strong> Rwanda</p>
        <p><strong>Address:</strong> Rwanda, Kigali, Nyarugenge, Nzove</p>
        <p><strong>Email:</strong> <a href="mailto:golden250gramsltd@gmail.com" className="text-blue-600">Golden250gramsltd@gmail.com</a></p>
        <p><strong>Phone:</strong> +250788884362 / +250788307704</p>
        <p><strong>Customer Contact:</strong> +250798580856 </p>
        <p><strong>Storage Condition:</strong> Store in a cool dry place away from contamination</p>
        <p><strong>Standardisation:</strong> RSB Standardisation Mark (RS EAS 782:2019)</p>
      </div>
      <h3 className="text-xl font-semibold mb-2 underline">Available Net weight: 1kg </h3>
    
      <p>UMUSHONGE pre-packed composite flour is also available in <strong>3kg&5kg</strong> bags.</p>
    </div>
  );
};

export default App
