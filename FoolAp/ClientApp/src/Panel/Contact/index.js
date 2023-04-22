import React, {useState, useEffect} from 'react';
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
        console.log(event)
        const {name, value} = event.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }));
    }

    const handleSaveContact = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/api/contact/${contact.language}`, contact);
            console.log(response.data); // success message
        } catch (error) {
            console.log(error.response.data); // error message
        }
    }

    useEffect(() => {
        fetchContact('fa'); // set default language to English
    }, []);

    return (

        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Default form</h4>
                <p className="card-description">
                    Basic form layout
                </p>
                <form className="forms-sample" onSubmit={e => handleSaveContact(e)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Username</label>
                        <input name="phone" type="text" className="form-control" id="exampleInputUsername1"
                               placeholder={contact.phone} onChange={e => handleInputChange(e)}/>
                    </div>
                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                </form>
            </div>
        </div>

    );
};

export default Contact;
