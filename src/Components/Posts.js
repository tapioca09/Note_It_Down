import React from 'react'
import "./Posts.css"
import { db } from '../config/firebase'
import { deleteDoc, doc} from "firebase/firestore"

function Posts(props) {

    // console.log(doc(db,"posts","KpVUj2lnVMpgibOEhDTH"))
    

    const deleteNote = async(id)=>{
        await deleteDoc(doc(db,"posts",id))
        alert("note deleted successfully")
    }

    return (
        <div className="posts">
            <div className="note_header">
                <h2 className='post-title'>{props.title}</h2>
                
                <div className="buttons">
                    <button className='action_button'>Edit Note</button>
                    <button className='action_button' onClick={()=>deleteNote(props.id)}>Delete Note</button>
                </div>
                

            </div>
            
            <p className="post-body">{props.body}</p>
        </div>
    )
}

export default Posts