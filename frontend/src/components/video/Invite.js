import React, {useRef} from 'react'
import { getToken, createMeeting } from "./api";
import emailjs from '@emailjs/browser';

const Invite = () => {
    const form = useRef();

    const trigger = async (e) => {
        e.preventDefault();
        const token = await getToken();
        const _meetingId = await createMeeting({ token });
        emailjs.sendForm('service_j7x9t5z',
            'template_db3cugg',
            _meetingId,
            'G3PXa6suXZ1tfcqQT')
        console.log(_meetingId);

        // emailjs.send("service_j7x9t5z","template_db3cugg",{
        //     from_name: "Covenant",
        //     to_name: "Mayur Anklekar",
        //     meeting_id: {_meetingId},
        //     other_email: "mayuranklekar.cs20@rvce.edu.in",
        //     reply_to: "mayuranklekar1010@gmail.com",
        //     });

    }

    return (
        <button onClick={trigger}>Invitation sent on your respective mails</button>
    )
}

export default Invite