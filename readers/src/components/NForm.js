import React,{useState,useStyles} from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";

const NForm = () => {
	return (
		<div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20,
		  backgroundColor: "#4c4c4c"
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
          <option value={10}>Drama</option>
          <option value={20}>Tragedy</option>
          <option value={30}>Poetry</option>
          <option value={40}>Crime</option>
        </Select>
        </FormControl>
        <div ><br></br>
          <Button className="orange" variant="contained" size="medium">
              Create
          </Button>
        </div>
          
        </form>
      </div>
	)
}

export default NForm
