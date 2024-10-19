import React, { useState } from 'react';
import { hotels } from '../data'; // Simulated hotel data
import { Link } from 'react-router-dom';

const Home = () => {
    const [filter, setFilter] = useState({ location: '', rating: '', price: '' });
    const [sortOrder, setSortOrder] = useState('asc'); // State for sorting order

    const filteredHotels = hotels
        .filter(hotel => {
            return (
                (filter.location ? hotel.location.toLowerCase().includes(filter.location.toLowerCase()) : true) &&
                (filter.rating ? hotel.rating >= filter.rating : true) &&
                (filter.price ? hotel.price <= filter.price : true)
            );
        })
        .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price)); // Sort by price

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">Find your perfect hotel</h1>
            <div className="filter-section mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex space-x-2 mb-4 md:mb-0">
                    <input
                        type="text"
                        placeholder="Location"
                        className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        onChange={e => setFilter({ ...filter, location: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Rating (1-5)"
                        className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        onChange={e => setFilter({ ...filter, rating: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        onChange={e => setFilter({ ...filter, price: e.target.value })}
                    />
                </div>
                <select
                    onChange={e => setSortOrder(e.target.value)}
                    className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                    <option value="asc">Sort by Price: Low to High</option>
                    <option value="desc">Sort by Price: High to Low</option>
                </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {filteredHotels.map(hotel => (
                    <div key={hotel.id} style={{
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        transition: 'transform 0.3s',
                        cursor: 'pointer',
                        ':hover': {
                            transform: 'scale(0.95)', // Zoom-out effect
                        }
                    }}>
                        <img src={hotel.image} alt={hotel.name} style={{
                            width: '100%',
                            height: '150px',
                            objectFit: 'cover'
                        }} />
                        <div style={{ padding: '16px' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{hotel.name}</h2>
                            <p style={{ color: '#4b5563' }}>{hotel.location}</p>
                            <p style={{ fontSize: '1.125rem', fontWeight: '700' }}>Price: ${hotel.price}/night</p>
                            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Rating: {hotel.rating}</p>
                            <Link to={`/hoteldetail/${hotel.id}`} style={{
                                display: 'inline-block',
                                backgroundColor: '#3b82f6',
                                color: '#ffffff',
                                borderRadius: '4px',
                                padding: '8px 12px',
                                marginTop: '8px',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s',
                            }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1961fc'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#71a6fb'}>
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
