
import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { Button, FormControl, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import db from '../database/firebase';
import { collection, addDoc } from '@firebase/firestore';

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [loader, setLoader] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        const docRef = await addDoc(collection(db, "Internship"), {
            id1: (id),
            name: (name),
            age: (age),
            email: (email)
        })
            .then(() => {
                setLoader(false);
                alert("Details Submitted");
            })
            .catch((error) => {
                alert(error.message);
            });

        setId("");
        setName("");
        setAge("");
        setEmail("");
    }

    const classes = useStyle();


    return (
        <FormGroup className={classes.container} onSubmit={handleSubmit}>
            <Typography variant="h4" align="center">AddUser</Typography>
            <FormControl>
                <InputLabel>Id</InputLabel>
                <Input value={id} onChange={(e) => setId(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input value={age} onChange={(e) => setAge(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Add User</Button>
        </FormGroup>
    );

}
export default AddUser;