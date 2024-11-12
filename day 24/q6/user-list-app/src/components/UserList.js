import React, {useState,useEffect} from 'react';

function UserList(){
    const [users,setUsers] = useState([]);
    const[loading,setLoading] = useState(true);


    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())

        .then((data)=>{
            setUsers(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("Error fetching users:", error);
            setLoading(false);
        });
    },[]);

    return(
        <div className="user-list">
            {loading ?(
                <p>Loading...</p>
            ):(
                users.map((user)=>(
                    <div className="user-card" key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
                    </div>
                ))
            )}
        </div>
    )
}
export default  UserList;