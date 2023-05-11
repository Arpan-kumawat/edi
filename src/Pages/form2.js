import { Grid } from '@mui/material';
import React from 'react';

class EdiPurchaseOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isaControlNumber: '',
      gsControlNumber: '',
      poNumber: '',
      vendorName: '',
      vendorAddress: '',
      vendorCity: '',
      vendorState: '',
      vendorZip: '',
      itemName: '',
      itemQuantity: '',
      itemPrice: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as sending it to a server
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
        <label>
          ISA Control Number:
          <input
            name="isaControlNumber"
            type="text"
            value={this.state.isaControlNumber}
            onChange={this.handleInputChange} />
        </label>
        </Grid>
        <br />
        <Grid>
        <label>
          GS Control Number:
          <input
            name="gsControlNumber"
            type="text"
            value={this.state.gsControlNumber}
            onChange={this.handleInputChange} />
        </label>
        </Grid>
        <br />
        <label >
          PO Number:     
          <input 
            name="poNumber"
            type="text"
            value={this.state.poNumber}
            onChange={this.handleInputChange} />
        </label>
        <Grid>
        <br />
        <label>
          Vendor Name:
          <input
            name="vendorName"
            type="text"
            value={this.state.vendorName}
            onChange={this.handleInputChange} />
        </label>
        </Grid>
        <br />
        <Grid>
        <label>
          Vendor Address:
          <input
            name="vendorAddress"
            type="text"
            value={this.state.vendorAddress}
            onChange={this.handleInputChange} />
        </label>
        </Grid>
        <br />
        <Grid>
        <label>
          Vendor City:
          <input
            name="vendorCity"
            type="text"
            value={this.state.vendorCity}
            onChange={this.handleInputChange} />
        </label>
        </Grid>
        <br />
        <Grid>
        <label>
          Vendor State:
          <input
            name="vendorState"
            type="text"
            value={this.state.vendorState}
            onChange={this.handleInputChange} />
        </label>
        </Grid>
        <br />
        <Grid>
        <label>
          Vendor Zip:
          <input
            name="vendorZip"
            type="text"
            value={this.state.vendorZip}
            onChange={this.handleInputChange} />
        </label>
        </Grid>
        <br />
        <Grid>
        <label>
          Item Name:
          <input
            name="itemName"
            type="text"
            value={this.state.itemName}
            onChange={this.handleInputChange} />
        </label>
        </Grid>
        <br />
        <Grid>
        <label>
          Quantity:
          <input
            name="itemQuantity"
            type="number"
            value={this.state.itemQuantity}
            onChange={this.handleInputChange} />
        </label>
        </Grid>
        <br />
        <Grid>
        <label>
          Price : 
          <input
            name="itemPrice"
            type="number"
            step="0.01"
            value={this.state.itemPrice}
            onChange={this.handleInputChange} />
        </label>
        </Grid>
        <br />
        <Grid>
        <button type="submit">Submit</button>
        </Grid>
      </form>
    );
  }
}

export default EdiPurchaseOrderForm;
