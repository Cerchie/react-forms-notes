import React, {useState} from 'react';

const UserForm = ()=> {
    const initialState = {
        username: "",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [isInvalid, setIsInvalid] = useState(true)
    const [isTouched, setIsTouched] = useState(false)
    const handleChange = e => {
        setIsTouched(true);
    if(value === ''){
        setIsInvalid(true);
    } else {
        setIsInvalid(false)
    }
        const {name, value} = e.target;
        setFormData(data => ({
            
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, email, password} = formData;
        if(!isInvalid)
       { alert(`Created user ${username} with email ${email}and ${password}` )
        setFormData(initialState)}
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
                id="username" 
                name="username"
                type="text" placeholder="username" 
                value={formData.username} 
                onChange={handleChange}
                 />

            <label htmlFor="email">Email</label>
            <input 
                type="email"
                placeholder="email" 
                name="email"
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                />
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                placeholder="password" 
                name="password"
                id="password" 
                value={formData.password} 
                onChange={handleChange} 
                />
            {isInvalid  && isTouched && <span style={{color: 'red'}}>Email cannot be blank</span>}
            <button>Add me to list!</button>
        </form>
    )
}
export default UserForm;