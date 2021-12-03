import { getDocs } from '@firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import db from '../database/firebase';
import { Link } from 'react-router-dom';
import { collection, doc, deleteDoc } from "firebase/firestore";

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})
const AllUsers = () => {


    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "Internship");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }


        getUsers();
    }, []);
    const deleteUser = async (id1) => {
        const userDoc = doc(db, "Internship", id1);
        await deleteDoc(userDoc);
    };

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead} >
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map((user) => {
                        return (
                            <TableRow className={classes.row} key={user._id} >
                                <TableCell>{user.id1}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Link to={{
                                        pathname: '/edit/${user._id}', state: {
                                            updatedata: user
                                        }
                                    }}>
                                        <Button variant="contained" color="primary" style={{ marginRight: 10 }} >Edit</Button>
                                    </Link>

                                    <Button variant="contained" color="secondary" onClick={() => { deleteUser(user.id); }}>Delete </Button>
                                </TableCell>
                            </TableRow>
                        )
                    }
                    )}
            </TableBody>
        </Table>

    );


}

export default AllUsers;