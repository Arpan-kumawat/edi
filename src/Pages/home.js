import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();
  const handleupdate = () => {
    navigate("/form",{
    state:{
      status:(0)
    }
    })
 };

  return (
    <div>
      <Typography>EDI Web Page</Typography>
      <Box sx={{ flexGrow: 1, mt: 35, pr: 7, pl: 7 }}>
        <Item>
          <Grid container direction="row" xs={12} md={10} sm={12} lg={12}>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <Button variant="contained">
                Upload
                <input hidden multiple type="file" />
              </Button>
            </Grid>
            <Grid>
              <Grid xs={6} md={6} sm={6} lg={6}>
                <Button
                  variant="contained"
                  onClick={() => {handleupdate(); }}  
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Item>
      </Box>
    </div>
  );
}
