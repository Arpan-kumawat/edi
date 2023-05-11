import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";

const style = {
  width: '100%',
  maxWidth: 460,
  bgcolor: '#d7e4f7',
};

export default function ListDividers() {

  const navigate = useNavigate();
  const handleupdate = () => {
    navigate("/form",{
    state:{
      status:(0)
    }
    })
 };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button      onClick={() => {handleupdate(); }} >
        <ListItemText primary="Create EDI File"   />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="UPload EDI file" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Validate EDI file" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="EDI Format" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="EDI Blogs" />
      </ListItem>
    </List>
  );
}