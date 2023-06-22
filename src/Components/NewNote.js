import React, { useState } from 'react'
import { db } from '../config/firebase'
import {addDoc,collection} from "firebase/firestore"
import "./NewNote.css"

function NewNote() {
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")

  const postsCollectionRef=collection(db,"posts")

  const addNote= async ()=>{
    try{
      await addDoc(postsCollectionRef,
        {
          title:title,
          body:body
        }
        
      )
      alert("note added successfully")


    }catch(error){
      alert(error)
    }

  }

  return (
    <div className='NewNote'>
      <input className='input' type="text" placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <input className='input' type='text' placeholder='Enter the body'value={body} onChange={(e)=>setBody(e.target.value)}/>
      <button className='button' onClick={addNote}>Add note</button>
      {/* <h2>{title}||{body}</h2> */}
    </div>
  )
}

export default NewNote