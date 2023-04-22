import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function About ()  {
    const [aboutEn, setAboutEn] = useState(null);
    const [aboutFa, setAboutFa] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const responseEn = await axios.get('/api/about?language=en');
            setAboutEn(responseEn.data[0]);
            const responseFa = await axios.get('/api/about?language=fa');
            setAboutFa(responseFa.data[0]);
        };
        fetchData();
    }, []);

    const handleEnChange = (e) => {
        setAboutEn({...aboutEn, [e.target.name]: e.target.value});
    };

    const handleFaChange = (e) => {
        setAboutFa({...aboutFa, [e.target.name]: e.target.value});
    };

    const handleEnSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/about', aboutEn);
    };

    const handleFaSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/about', aboutFa);
    };

    return (
     <>
     
     </>
    )
}