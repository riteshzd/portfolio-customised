import React, { useState } from 'react';
import "./menubar.css"

const Menubar = ()=>{
    const [selected, updateSelected] = useState("About")
    const onClickMenuOptions = (sectionName) => {
        console.log(sectionName," is clicked");
        updateSelected(sectionName)
    }
    return(
        <div className="menubar">
            <div className = {selected ==="About"? "menubar-item selected" : "menubar-item unselected"} onClick={()=> onClickMenuOptions("About")}>About me</div>       
            <div className= {selected ==="Workex"? "menubar-item selected" : "menubar-item unselected"} onClick={()=>onClickMenuOptions("Workex")}>Workex</div>
            <div className= {selected ==="Books"? "menubar-item selected" : "menubar-item unselected"} onClick={()=>onClickMenuOptions("Books")}>Books</div>
            <div className= {selected ==="Profiles"? "menubar-item selected" : "menubar-item unselected"} onClick={()=>onClickMenuOptions("Profiles")}>Profiles</div>
        </div>
    )
}

export default Menubar