import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
    const [contact, setContact] = useState({});

    const fetchContact = async (language) => {
        const response = await axios.get(`/api/contact/${language}`);
        console.log(response)
        setContact(response.data);
    }

    const handleLanguageChange = (event) => {
        fetchContact(event.target.value);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }));
    }

    const handleSaveContact = async () => {
        try {
            const response = await axios.put(`/api/contact/${contact.language}`, contact);
            console.log(response.data); // success message
        } catch (error) {
            console.log(error.response.data); // error message
        }
    }

    useEffect(() => {
        fetchContact('en'); // set default language to English
    }, []);

    return (
        <div>
            <h1>Contact Panel</h1>
            <div>
                <label htmlFor="language-select">Select Language:</label>
                <select id="language-select" onChange={handleLanguageChange}>
                    <option value="En">English</option>
                    <option value="Fa">Persian</option>
                </select>
            </div>
            <div>
                <label htmlFor="title-input">Email:</label>
                <input type="text" id="title-input" name="title" value={contact.email || ''} onChange={handleInputChange} />
            </div>
            <button onClick={handleSaveContact}>Save</button>
        </div>
    );
};

export default Contact;
