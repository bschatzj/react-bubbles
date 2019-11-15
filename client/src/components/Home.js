import React from 'react';
import { Link } from 'react-router-dom';

export default function home() {
    return (
        <>
            <h1>WELCOME TO THE BUBBLES!!!</h1>
            <Link to = {localStorage.getItem('token')? '/bubbles' : '/LogIn'}>
            <button> SEE THE BUBBLES!!!</button>
            </Link>
        </>
    )
}