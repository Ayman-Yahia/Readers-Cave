import React from 'react'
import Item from './Item'
const RisingNovels = () => {
    const sections=[{
        image:"../images/image1.jpg",
        title:"Lonely Journey",
        desc:"by Elisabeth Wintter"
        },
        {
        image:"../images/image2.jpg",
        title:"Imperfections of Memory",
        desc:"by Angelina Aludo"
        },
        {
        image:"../images/image3.jpg",
        title:"The Past is Rising",
        desc:"by Kathryn Bywaters"
        }
    ]
    return (
        <>
        <div>
            <h1 style={{textAlign:"center", color:'white'}}>Rising Stars</h1>
            <br></br>
            <div style={{display:"flex",height:320+"px", justifyContent:'space-evenly', width:100+'%'}}>
            {sections.map((section,idx)=>
                <Item  section={section} key={idx}/>
            )}

            </div>

        </div>
        
        
        </>
    )
}

export default RisingNovels
