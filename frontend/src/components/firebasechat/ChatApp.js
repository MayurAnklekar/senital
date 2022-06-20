import React, { useState, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import './ChatApp.css';

firebase.initializeApp({
    apiKey: "AIzaSyBzoigwI3vNodtSxy8ZjIlpgKQcb-jLneg",
    authDomain: "senital-47347.firebaseapp.com",
    projectId: "senital-47347",
    storageBucket: "senital-47347.appspot.com",
    messagingSenderId: "562065196699",
    appId: "1:562065196699:web:c9bf2321489f798eb3e83e"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

// const SignIn =()=>{
//     const signInWithGoogle=()=>{
//         const provider = new firebase.auth.GoogleAuthProvider();
//         auth.signInWithPopup(provider);

//     }
//     return (
//         <button onClick={signInWithGoogle}>Sign In with Google</button>
//     )
// }

// const SignOut=()=>{
//     return (auth.currentUser&&(
//         <button onClick={()=>auth.signOut()}>Sign out</button>
//     ))
// }

const ChatRoom = () => {

    const dummy = useRef();
    const messageRef = firestore.collection("messages");
    const query = messageRef.orderBy('createdAt');
    const [messages] = useCollectionData(query, { idField: "id" });
    const [formValue, setFormValue] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messageRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoUrl: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg'
        })
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <div ref={dummy}></div>
            </main>
            <form onSubmit={sendMessage} style={{width: '1440px'}}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button type="submit">Send</button>
                <button type="button">Not Satisfied</button>
            </form>
        </>
    )
}

const ChatMessage = (props) => {
    const { text, uid, photoUrl } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoUrl} alt="avatar" className="avatar"/>
            <p>{text}</p>
        </div>

    )
}

const ChatApp = () => {
    const [user] = useAuthState(auth);
    return (
        <div>

            <header className="absolute">
                {/* <SignOut/> */}
            </header>
            <section>
                <ChatRoom />
            </section>

        </div>
    )
};

export default ChatApp;
