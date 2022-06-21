import React from 'react'
import { getToken, createMeeting } from "./api";
import emailjs from 'emailjs-com'

const Invite = () => {
    const token = getToken();
    const _meetingId = createMeeting({ token });
    const trigger =(e)=>{
        e.preventDefault();
        emailjs.send("service_yz6fchy", "template_rbxxr6i", {
            from_name: "Covenant Team",
            to_name: "Moderator",
            meet_link: { _meetingId },
            to_email: "mayurschittaragi@gmail.com",
            reply_to: "Covenant Team",
            moderator_email: "mayurs0802@gmail.com",
        });

    }
    
  return (
    <button onClick={trigger}>Invitation sent on your respective mails</button>
  )
}

export default Invite