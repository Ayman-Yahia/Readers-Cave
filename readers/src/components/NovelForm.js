import React,{useState,useEffect} from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import {InputLabel,Input,Button,} from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

const NovelForm = () => {
    const [novelName,setNovelName]=useState("")
    const[image,setImage]=useState("")
    const[desc,setDesc]=useState("")
    const[category,setCategory]=useState("Action")
    const[categories,setCategoriers]=useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/api/category')
          .then(res => setCategoriers(res.data));
    }, [])
    
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
            <Input id="novelName" type="text" onChange={(e)=>setNovelName(e.target.value)} value={novelName}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="desc">Image URL</InputLabel>
            <Input id="desc" type="desc "  onChange={(e)=>setImage(e.target.value)} value={image} />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="image">Description</InputLabel>
            <Input id="image" multiline onChange={(e)=>setDesc(e.target.value)} rows={8} value={desc}/>
          </FormControl>
        <FormControl >
        <InputLabel htmlFor="age-native-simple" >Category</InputLabel>
        <Select
          native
          inputProps={{
            name: 'category',
            
          }}
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
         >
          <option aria-label="None" value="" />
          {
          categories.map((category,idx)=>
            <option key={idx} value={category._id}>Ten</option>
            
          )
        }
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
