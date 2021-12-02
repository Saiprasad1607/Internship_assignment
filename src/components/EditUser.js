
import React, { useState , useEffect} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { Button, FormControl, Input, InputLabel, makeStyles, Typography, useScrollTrigger } from '@material-ui/core';
import db from '../database/firebase';
import {collection, doc, updateDoc, getDocs } from '@firebase/firestore';
import { useLocation } from 'react-router-dom';



const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})



const EditUser = () => {
    const location = useLocation();
    console.log(location.state.updatedata)
    const [id, setId] = useState(location.state.updatedata.id1);
    const [name, setName] = useState(location.state.updatedata.name);
    const [age, setAge] = useState(location.state.updatedata.age);
    const [email, setEmail] = useState(location.state.updatedata.email);
    const [loader, setLoader] = useState(false);
    const databaseRef = collection(db, 'react-firebase');

    const editData = async() => {
        const data = doc(db, 'react-firebase',location.state.updatedata )
        // console.log(data)
        updateDoc(data, {id1:(id),
                        name:(name),
                        age:(age),
                        email:(email)})
        .then(() => {
        setLoader(false);
        alert("Details Updated");
        
        setId("");
        setName("");
        setAge("");
        setEmail("");
                                })
    }
 
    

    const classes = useStyle();
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "Internship");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id : doc.id})));
            
        }
    
       
        getUsers();
}, []);
    return(
        
        <FormGroup className = {classes.container}  >
            <Typography variant="h4" align="center" >EditUser</Typography>
           
            <FormControl>
                <InputLabel>Id</InputLabel>
                <Input value={id} onChange={(e) => setId(e.target.value)} value={id} />
            </FormControl>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} value={name}  />
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input value={age} onChange={(e) => setAge(e.target.value)} value={age} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} value={email}/>
            </FormControl>
            {
                users.map((user) => {
                    return(
                        <Button variant="contained" color="primary" onClick={() => editData()}>Edit User</Button>
                    )
                // <Button variant="contained" color="primary" onClick={() => editData()}>Edit User</Button>
             } 
                )}
            
            
            
        </FormGroup>
        
    );

}
export default EditUser;