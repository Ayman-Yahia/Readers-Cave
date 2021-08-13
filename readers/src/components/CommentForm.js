
import React,{useState,useEffect} from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import {InputLabel,Input,Button,} from "@material-ui/core"
import { useHistory } from "react-router-dom";

const CommentForm = (props) => {
  const history = useHistory();
    const{novel}=props
    const[user,setUser]=useState("Anonymous")
    const[commentText,setCommentText]=useState("")
    const[errors,setErrors]=useState([])
    const createChapter=(e)=>{
      e.preventDefault()
      console.log("u clicked  me");
      
      const comment={user,commentText}
      console.log(comment);
        axios.post(`http://localhost:8000/api/${novel}/novel`,comment)
        .then(res => {console.log(res.data)
          
        }
        
            
        )
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
        setUser("Anonymous")
        setCommentText("")

    }

        
    return (
        <div>
            {errors?
            errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>):""}
        <form onSubmit={createChapter} style={{ width: "50%" }}>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="novelName">User</InputLabel>
            <Input id="novelName" type="text" onChange={(e)=>setUser(e.target.value)} value={user}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="image">Comment</InputLabel>
            <Input id="image" multiline onChange={(e)=>setCommentText(e.target.value)} rows={4} value={commentText}/>
          </FormControl>
        
        <div ><br></br>

        <Button type="submit" className="orange" variant="contained" size="medium">
              Create
          </Button>
        </div>
          
        </form>
      </div>
    )
}

export default CommentForm
