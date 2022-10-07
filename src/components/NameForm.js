import { useState } from "react"
import '../NameForm.css'

const NameForm = () => {
    
    const [userName,setUserName] = useState("");
    const [displayName,setDisplayName] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setDisplayName(userName);
    
    }

    const handleChange = (event) => {
        setUserName(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Name?"
                    onChange={handleChange}
                    value={userName}
                    
                />

                <button type="submit">Submit</button>
            </form>
            { displayName ?
            <h3>Welcome {displayName}!</h3>
            :<p></p>
            }       
        </>
    )
}

export default NameForm;