import React from "react";
import { Grid,Button,Typography,TextField ,Paper,Box} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
const Upload =()=>{
const { register, handleSubmit } = useForm();
const [dataValue ,setDataValue]=useState("")

const onSubmit =(data)=>{
	console.log("file",data.file[0])
  const file =  data.file[0]
	// var formdata = new FormData();
    // formdata.append("file", data.file[0]);
    var textType = /text.*/;
    
    if (file.type.match(textType)) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
          var content = reader.result;
          console.log(content)
          alert(content);
      }
      
      reader.readAsText(file);    
  } 


}
console.log(dataValue)


return(
	<>


<Paper  style={{ margin:"2rem" ,padding:"2rem",backgroundColor:"aliceblue"}}>

<Grid container lg={12}
direction="column"
spacing={1}

>



<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="ISA Control Number"
 margin="normal"
 name="ISA Control Number"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>



<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="GS Control Number"
 margin="normal"
 name="GS Control Number"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>



<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="PO Number"
 margin="normal"
 name="PO Number"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>


<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="Vendor Name"
 margin="normal"
 name="Vendor Name"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>


<Grid container lg={12}
direction="column"
spacing={1}

>
<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="Vendor Address"
 margin="normal"
 name="Vendor Address"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>

<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="Vendor City"
 margin="normal"
 name="Vendor City"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>

<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="Vendor State"
 margin="normal"
 name="Vendor State"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>
<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="Vendor Zip"
 margin="normal"
 name="Vendor Zip"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>
</Grid>



<Grid container lg={12}
direction="column"
spacing={1}

>

<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="Item Name"
 margin="normal"
 name="Item Name"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>


<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="Quantity"
 margin="normal"
 name="Quantity"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>


<Grid item lg ={3} md={3} sm= {12} xs={12}>
<TextField
 fullWidth
 autoFocus
 label="Price"
 margin="normal"
 name="Price"
 type="text"
 defaultValue={dataValue}
 variant="outlined"
 onChange={(e) => setDataValue(e.target.value)}
                                 
                            />

</Grid>





</Grid>

<Grid container lg={12}
direction="column"
spacing={1}
justifyContent="center"
alignItems="center"
>

<Grid item lg ={6} md={6} sm= {12} xs={12}>
<Button
                    style={{
                      color: "#4285F4",
                      border: "1px solid #4285F4",
                    }}
                    variant="outlined"
                    component="label">Upload File
                    <input
                      accept="files/*"
                      type="file"
                      hidden
                      {...register("file")}
                    />
                  </Button>
</Grid>

<Grid item lg ={6} md={6} sm= {12} xs={12}>

<Button
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >Submit </Button>

</Grid>

</Grid>
</Grid>

</Paper>
	
	</>
)	


}

export default Upload