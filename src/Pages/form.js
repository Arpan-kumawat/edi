import React, { useState } from "react";
import { useEffect } from "react";
import { Grid } from '@mui/material';


import { Margin } from "@mui/icons-material";


    // Create EDI 850 file

export default function Ediform() {

  const [poNumber, setPoNumber] = useState("");
  const [poDate, setPoDate] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [item1, setItem1] = useState("");
  const [item1Quantity, setItem1Quantity] = useState("");
  const [item1Price, setItem1Price] = useState("");
  const [item2, setItem2] = useState("");
  const [item2Quantity, setItem2Quantity] = useState("");
  const [item2Price, setItem2Price] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Create EDI 850 file


    console.log(ediFile);
  };

    const ediFile = `
        
        ISA*00**00**01*${buyerName}*01*${sellerName}*${poDate}*${poDate.replace(/-/g, '').substring(2)}*U*00401*000000001*0*T*>~
        
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

    // Create a temporary <a> element
    const element = document.createElement('a');
    const file = new Blob([ediFile], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'ediFile.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

  
  return (

    <div>
      <form onSubmit={handleSubmit}>


        <Grid>
          <label htmlFor="poNumber" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>PO Number:</label>

          <input type="text" id="poNumber" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} value={poNumber} onChange={e => setPoNumber(e.target.value)} />

          <label htmlFor="poDate" style={{ fontWeight: 'bold', marginBottom: '0.5rem', marginLeft: '2rem' }}>PO Date:</label>

          <input type="date" id="poDate" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={poDate} onChange={e => setPoDate(e.target.value)} />
        </Grid>
        <Grid>
          <label htmlFor="buyerName" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Buyer Name:</label>

          <input type="text" id="buyerName" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={buyerName} onChange={e => setBuyerName(e.target.value)} />

          <label htmlFor="buyerAddress" style={{ fontWeight: 'bold', marginBottom: '0.5rem', marginLeft: '1.8rem' }}>Buyer Address:</label>

          <input type="text" id="buyerAddress" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={buyerAddress} onChange={e => setBuyerAddress(e.target.value)} />
        </Grid>
        <Grid>
          <label htmlFor="sellerName" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Seller Name:</label>
          <input type="text" id="sellerName" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={sellerName} onChange={e => setSellerName(e.target.value)} />
          <label htmlFor="sellerAddress" style={{ fontWeight: 'bold', marginBottom: '0.5rem', marginLeft: '1.8rem' }}>Seller Address :</label>
          <input type="text" id="sellerAddress" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={sellerAddress} onChange={e => setSellerAddress(e.target.value)} />
        </Grid>
        <Grid>
          <label htmlFor="item1" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>item 1:</label>
          <input type="text" id="item1" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={item1} onChange={e => setItem1(e.target.value)} />

          <label htmlFor="item1Quantity" style={{ fontWeight: 'bold', marginBottom: '0.5rem', marginLeft: '4.8rem' }}>Item1Quantity:</label>
          <input type="text" id="item1Quantity" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={item1Quantity} onChange={e => setItem1Quantity(e.target.value)} />
        </Grid>


        <Grid>

          <label htmlFor="item2" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>item 2:</label>
          <input type="text" id="item2" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={item2} onChange={e => setItem2(e.target.value)} />
          <label htmlFor="item2Quantity" style={{ fontWeight: 'bold', marginBottom: '0.5rem', marginLeft: '4.8rem' }}>item2Quantity:</label>
          <input type="text" id="item2Quantity" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={item2Quantity} onChange={e => setItem2Quantity(e.target.value)} />
        </Grid>
        <Grid>
          <label htmlFor="item1Price" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>item1Price:</label>
          <input type="text" id="item1Price" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={item1Price} onChange={e => setItem1Price(e.target.value)} />

          <label htmlFor="item2Price" style={{ fontWeight: 'bold', marginBottom: '0.5rem', marginLeft: '2.8rem' }}>item2Price:</label>
          <input type="text" id="item2Price" style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}  value={item2Price} onChange={e => setItem2Price(e.target.value)} />
        </Grid>
        <button
          type="submit"
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>

      </form>

    </div>
  );
}
