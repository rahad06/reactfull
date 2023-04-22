import React, {useEffect, useState} from "react";
import axios from "axios";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    useEffect(()=>{
        getUsers().then(w => console.log(w))
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/users/login", { userName, email, password });
            // Handle successful login
            console.log(response.data);
        } catch (error) {
            // Handle login error
            console.error(error);
        }
    };
    const getUsers = async () => {
        axios.get('/api/users')
            .then(response => {
                // handle success, response.data will contain the users
                console.log(response.data);
            })
            .catch(error => {
                // handle error
                console.error(error);
            });

    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user">User:</label>
                    <input
                        type="text"
                        id="user"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;