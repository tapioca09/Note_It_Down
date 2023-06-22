import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import {collection, getDocs} from "firebase/firestore"
import "./WelcomePage.css"
import Posts from './Posts'

import { signOut } from 'firebase/auth'
import NewNote from './NewNote'

function WelcomePage({auth}) {
const [notes,setNotes]=useState([]);
  const postsCollectionRef= collection(db,"posts")

  useEffect(()=>{
    const getPosts = async ()=>{
      try{
        const data= await getDocs(postsCollectionRef)
        const fetchedPosts=[]
        data.forEach((doc)=>fetchedPosts.push({
          title:doc.data().title,
          body:doc.data().body,
          noteId:doc.id
        }))
        setNotes((prev)=>[...prev,...fetchedPosts])
        // console.log("fired once")
      }
      catch(error){
        alert(error)
      }   

    }
    getPosts();

  },[])

    
  const logOut = async () => {
    try {
        signOut(auth)
        alert("Logged out successfully")
    }
    catch (error) {
        alert(error)
    }
}
  return (
    <div>
        <h2>Welcome {auth.currentUser.email}</h2>
        <button onClick={logOut}>Log Out</button>
        

        <NewNote/>
        
        {notes.map((note)=><Posts title={note.title} body={note.body} id={note.noteId}/> 
        )}
        
        {/* {console.log(auth.currentUser)} */}
        {/* {console.log(notes)} */}
    </div>
  )
}

export default WelcomePage