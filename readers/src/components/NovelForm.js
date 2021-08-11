import React,{useState,useStyles} from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import {
  
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

const NovelForm = () => {


    
    return (
        <>
        <Header />
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }}>
          <h1>Start Your Novel!</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="novelName">Novel Name</InputLabel>
            <Input id="novelName" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="desc">Image URL</InputLabel>
            <Input id="desc" type="desc" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="image">Description</InputLabel>
            <Input id="image" multiline rows={8} />
          </FormControl>
        <FormControl >
        <InputLabel htmlFor="age-native-simple">Category</InputLabel>
        <Select
          native
          inputProps={{
            name: 'category',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        </FormControl>
        <div ><br></br>
          <Button className="orange" variant="contained" size="medium">
              Create
          </Button>
        </div>
          
        </form>
      </div>
      <Footer />
      </>

    )
}

export default NovelForm
