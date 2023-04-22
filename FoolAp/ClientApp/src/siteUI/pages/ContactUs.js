import React, {useEffect, useState} from 'react';
import axios from "axios";

function ContactUs(props) {
    const [contact, setContact] = useState(null)
useEffect(()=>{
    fetchContact('fa')
},[])
    const fetchContact = async (language) => {
        const response = await axios.get(`/api/contact/${language}`);
        console.log(response)
        setContact(response.data);
    }
    
    return (
        <div>{contact?.phone}</div>
    );
}

export default ContactUs;