import React,{useState,useEffect} from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import {InputLabel,Input,Button,} from "@material-ui/core";

const ChapterForm = (props) => {
    const[chapterName,setChapterName]=useState("")
    const[chapterText,setChapterText]=useState("")


    return (
        <>
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
            <Input id="novelName" type="text" onChange={(e)=>setChapterName(e.target.value)} value={chapterName}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="image">Description</InputLabel>
            <Input id="image" multiline onChange={(e)=>setChapterText(e.target.value)} rows={25} value={chapterText}/>
          </FormControl>
        
        <div ><br></br>
          <Button className="orange" variant="contained" size="medium">
              Create
          </Button>
        </div>
          
        </form>
      </div>
            
        </>
    )
}

export default ChapterForm
