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
        <p><strong>Brand:</strong> UMUSHONGE</p>
        <p><strong>Product:</strong> Composite Flour (Ifu y’igikoma)</p>
        <p><strong>Ingredients:</strong> Corns, soybeans, sorghum, wheat, peanuts, beans, rice, milk</p>
        <p><strong>Company:</strong> Golden 250 Grams Ltd</p>
        <p><strong>Country of Origin:</strong> Rwanda</p>
        <p><strong>Address:</strong> Rwanda, Kigali, Nyarugenge, Nzove</p>
        <p><strong>Email:</strong> <a href="mailto:Golden250gramsltd@gmail.com" className="text-blue-600">Golden250gramsltd@gmail.com</a></p>
        <p><strong>Phone:</strong> +250788884362 / +250788307704</p>
        <p><strong>Storage Condition:</strong> Store in a cool dry place away from contamination</p>
        <p><strong>Standardisation:</strong> RSB Standardisation Mark (RS EAS 782:2019)</p>
      </div>
      <h3 className="text-xl font-semibold mb-2">Available Weights & Prices</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="p-2 border rounded-md mb-2">
            <strong>{product.weight}</strong> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
