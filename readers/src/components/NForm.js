import React,{useState,useEffect} from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import {
  
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";
import e from "cors";
import { set } from "mongoose";

const NForm = () => {
  
  const [categories,setCategories]=useState([])
  const[novelName,setNovelName]=useState("")
  const[desc,setDesc]=useState("")
  const[image,setImage]=useState("")
  const[author,setAuthor]=useState()
  const[category,setCategory]=useState("Action")
  const[errors,setErrors]=useState([])
  const userId = localStorage.getItem("user_id");
  
  console.log(userId);
    useEffect(()=>{
      axios.get('http://localhost:8000/api/categories')
        .then(res => {setCategories(res.data)
          setAuthor(userId)
          console.log(categories);
        })
        .catch(err=>console.log(err))
    },[])
    console.log(`he is the author ${author}`);
    const createNovel=(e)=>{
      e.preventDefault()
      const novel={novelName,desc,image,author,category}
      
      axios.post(`http://localhost:8000/api/novels/${category}/${userId}`,novel)
        .then(res => {
            setErrors(null);
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
        setDesc("")
        setImage("")
        setNovelName("")
  }
    
	return (
    <>
		<div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 20,
		  backgroundColor: "#4c4c4c"
        }}
      >
        <form onSubmit={createNovel} style={{ width: "50%" }}>
          <h1>Start Your Novel!</h1>
          {errors?
            errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>):""}
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="novelName">Novel Name</InputLabel>
            <Input id="novelName" value={novelName} onChange={ e => setNovelName(e.target.value) } type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="desc">Image URL</InputLabel>
            <Input id="desc" value={image} onChange={ e => setImage(e.target.value) } type="desc" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="image">Description</InputLabel>
            <Input id="image" value={desc} onChange={ e => setDesc(e.target.value) } multiline rows={8} />
          </FormControl>
        <FormControl >
        <InputLabel htmlFor="age-native-simple">Category</InputLabel>
        <Select
          native
          value={category}
          onChange={ e => setCategory(e.target.value) }
        >
          <option aria-label="None" value="" />
          {
              categories.map((category, i) => 
                  <option value={category.categoryName} key={ i }>{category.categoryName}</option>)
              
          }
        </Select>
        </FormControl>
        <div ><br></br>
          <Button type="submit" className="orange" variant="contained" size="medium">
              Create
          </Button>
        </div>
          
        </form>
      </div>
      </>
  )
}

export default NForm
