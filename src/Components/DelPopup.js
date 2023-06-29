import React from 'react'
import "./DelPopup.css"

function DelPopup({delPopFlag,setDelPopFlag,deleteNote,id,title}) {
  return (delPopFlag)?(
    <div className='popup_page'>
        <div className='popup'>
        <h3>Are you sure you want to delete note with the following title?</h3>
        <h3>"{title}"</h3>
        <button onClick={()=>{deleteNote(id); setDelPopFlag(false)}}>Yes</button>
        <button onClick={()=>setDelPopFlag(false)}>No</button>
        </div>
    </div>
  ):""
}

export default DelPopup