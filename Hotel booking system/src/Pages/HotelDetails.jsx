import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { hotels } from '../data';
import { BookingContext } from '../contex/BCP';

const HotelDetails = () => {
    const { id } = useParams();
    const hotel = hotels.find(h => h.id === parseInt(id));
    const [selectedRoom, setSelectedRoom] = useState(null);
    const { addBooking } = useContext(BookingContext);

    const handleBooking = () => {
        if (selectedRoom) {
            addBooking({ hotelId: hotel.id, roomType: selectedRoom, price: hotel.price });
            alert('Room booked successfully!');
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{hotel.name}</h1>
            <img src={hotel.image} alt={hotel.name} style={styles.image} />
            <p style={styles.location}>{hotel.location}</p>
            <p style={styles.rating}>Rating: {hotel.rating}</p>
            <p style={styles.amenities}>Amenities: {hotel.amenities.join(', ')}</p>
            <p style={styles.price}>Price: ${hotel.price}/night</p>
            <select onChange={e => setSelectedRoom(e.target.value)} style={styles.select}>
                <option value="">Select room type</option>
                {hotel.rooms.map((room, idx) => (
                    <option key={idx} value={room}>
                        {room}
                    </option>
                ))}
            </select>
            <button onClick={handleBooking} style={styles.button}>Book Room</button>

            <style jsx>{`
                select {
                    transition: border-color 0.3s, box-shadow 0.3s;
                }
                select:hover {
                    border-color: #3b82f6;
                    box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
                }
                button {
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #2563eb;
                }
            `}</style>
        </div>
    );
};

const styles = {
    container: {
        color:"black",
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#dcf9ff',
        textAlign: 'center',
    },
    title: {
        fontSize: '2rem',
        margin: '15px 0',
    },
    image: {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '15px',
    },
    location: {
        fontSize: '1.2rem',
        color: '#555',
        marginBottom: '10px',
    },
    rating: {
        fontSize: '1rem',
        marginBottom: '10px',
    },
    amenities: {
        fontSize: '1rem',
        marginBottom: '10px',
    },
    price: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '15px',
    },
    select: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '15px',
        width: '100%',
        fontSize: '1rem',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s',
    },
};

export default HotelDetails;
