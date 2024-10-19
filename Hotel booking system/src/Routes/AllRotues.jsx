import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import HotelDetails from '../Pages/HotelDetails';

export default function AllRotues() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hoteldetail/:id" element={<HotelDetails />} />
                <Route path="/login" element={<Login />} />

            </Routes>
        </div>
    )
}
