import React from 'react'
import Item from './Item'
const RisingNovels = () => {
    const sections=[{
        image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title:"lasmdmasldlaslmd",
        desc:"sdfsdfsdf"
        },
        {
        image:"https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title:"lasmdmasldlaslmd",
        desc:"sdfsdfsdf"
        },
        {
        image:"https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        title:"lasmdmasldlaslmd",
        desc:"sdfsdfsdf"
        }
    ]
    return (
        <>
        <div>
            <h1 style={{textAlign:"center"}}>Reading Happits</h1>
            <br></br>
            <div style={{display:"flex",height:320+"px"}}>
            {sections.map((section,idx)=>
                <Item  section={section} key={idx}/>
            )}

            </div>

        </div>
        
        
        </>
    )
}

export default RisingNovels