import React, { useState } from "react";
import { useEffect } from "react";



export default function  Ediform() {

      const [poNumber, setPoNumber] = useState('');

  const [poDate, setPoDate] = useState('');

  const [buyerName, setBuyerName] = useState('');

  const [buyerAddress, setBuyerAddress] = useState('');

  const [sellerName, setSellerName] = useState('');

  const [sellerAddress, setSellerAddress] = useState('');

  const [item1, setItem1] = useState('');

  const [item1Quantity, setItem1Quantity] = useState('');

  const [item1Price, setItem1Price] = useState('');

  const [item2, setItem2] = useState('');

  const [item2Quantity, setItem2Quantity] = useState('');

  const [item2Price, setItem2Price] = useState('');

      const handleSubmit = (event) => {

            event.preventDefault();
        
        
        
        
            // Create EDI 850 file
        
            const ediFile = `
        
              ISA*00*          *00*          *01*${buyerName}     *01*${sellerName}     *${poDate}*${poDate.replace(/-/g, '').substring(2)}*U*00401*000000001*0*T*>~
        
              GS*PO*${buyerName}*${sellerName}*${poDate.replace(/-/g, '')}*${poDate.replace(/-/g, '').substring(2)}*0001*X*004010~
        
              ST*850*0001~
        
              BEG*00*SA*${poNumber}**${poDate}~
        
              REF*DP*${poNumber}~
        
              N1*BY*${buyerName}~
        
              N3*${buyerAddress}~
        
              N1*SE*${sellerName}~
        
              N3*${sellerAddress}~
        
              PO1*1*${item1Quantity}*EA*${item1Price}**UP*${item1}~
        
              PO1*2*${item2Quantity}*EA*${item2Price}**UP*${item2}~
        
              CTT*2~
        
              SE*14*0001~
        
              GE*1*0001~
        
              IEA*1*000000001~
        
            `;
        
        
        
        
            console.log(ediFile);
        
          }



  return (
    <div>
    <form onSubmit={handleSubmit}>

      <label htmlFor="poNumber">PO Number:</label>

      <input type="text" id="poNumber" value={poNumber} onChange={e => setPoNumber(e.target.value)} />




      <label htmlFor="poDate">PO Date:</label>

      <input type="date" id="poDate" value={poDate} onChange={e => setPoDate(e.target.value)} />




      <label htmlFor="buyerName">Buyer Name:</label>

      <input type="text" id="buyerName" value={buyerName} onChange={e => setBuyerName(e.target.value)} />




      <label htmlFor="buyerAddress">Buyer Address:</label>

      <input type="text" id="buyerAddress" value={buyerAddress} onChange={e => setBuyerAddress(e.target.value)} />




      <label htmlFor="sellerName">Seller Name:</label>

    </form>





    </div>
  )
}
