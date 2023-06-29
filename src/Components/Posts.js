import React, { useState } from 'react'
import "./Posts.css"
import { db } from '../config/firebase'
import { deleteDoc, doc, setDoc} from "firebase/firestore"
import DelPopup from './DelPopup'

function Posts(props) {

    // console.log(doc(db,"posts","KpVUj2lnVMpgibOEhDTH"))

    const [editingStatus,setEditingStatus]=useState(false);
    const [title,setTitle]=useState(props.title)
    const [body,setBody]=useState(props.body)
    const [delPopFlag,setDelPopFlag]=useState(false)
    

    const deleteNote = async(id)=>{
        await deleteDoc(doc(db,"posts",id))
        // alert("note deleted successfully")
    }

    const editNote= async(id)=>{
        try{
            setDoc(doc(db,"posts",id),{ //the id needs to be converted into a string in order for this function to work
            title:title,
            body:body
        })
        alert("note edited successfully")
        }
        catch(e){
            alert(e)
        }
    }

    if (editingStatus === true) {
        return (
            <div className="posts">
                <div className="note_header">
                <input className='input_while_editing' type="text" placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      

                    <div className="buttons">
                        <button className='action_button' onClick={() => editNote(props.id)}>Save Note</button>
                    </div>


                </div>

                <input className='input_while_editing' type='text' placeholder='Enter the body'value={body} onChange={(e)=>setBody(e.target.value)}/>
            </div>
        )
        

    }
    else {
        return (
            <div className="posts">
                <div className="note_header">
                    <h2 className='post-title'>{props.title}</h2>

                    <div className="buttons">
                        <button className='action_button' onClick={() => setEditingStatus(true)}>Edit Note</button>
                        <button className='action_button' onClick={() => setDelPopFlag(true)}>Delete Note</button>
                    </div>

                </div>

                <p className="post-body">{props.body}</p>
                <DelPopup delPopFlag={delPopFlag} setDelPopFlag={setDelPopFlag} deleteNote={deleteNote} id={props.id} title={props.title}/>
            </div>
        )
    }
}

export default Posts