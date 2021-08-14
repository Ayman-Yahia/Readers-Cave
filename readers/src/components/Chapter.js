import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Chapter = (props) => {
    const{chapterId}=props
    const[chapter,setChapter]=useState({})
    const[loaded,setLoaded]=useState(false)
    console.log(chapterId);
    useEffect(() => {
        axios.get('http://localhost:8000/api/chapters/'+chapterId)
            .then(res => {setChapter(res.data)
                console.log("chapter");
                console.log(chapter);
            setLoaded(true)
            })
      }, [])

    return (
        <><div className='background'>
        {loaded &&
        <div style={{backgroundColor:"#4c4c4c",color:"black"}} className="single-product">
            <h1>{chapter.chapterName}</h1>
        <p>{chapter.chapterText}</p>
    </div>
}
</div> </>
    )
}

export default Chapter
