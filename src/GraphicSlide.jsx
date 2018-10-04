import React from 'react'

export const GraphicSlide = props => (
  <div style={{display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center", overflow: "hidden"}}>
    <img width="100%" src={"images/" + props.children}/>
  </div>
)
