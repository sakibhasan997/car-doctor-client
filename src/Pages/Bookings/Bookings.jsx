import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingsRow from './BookingsRow';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useScroll from '../../Hooks/useScroll';

const Bookings = () => {

    const {pathname} = useLocation();
    useScroll(pathname);

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `https://car-doctor-server-eta-ashy.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }else{
                    // logout and then navigate
                    navigate('/')
                }
            })
    }, [url,navigate]);

    const handleDelete = (id) => {
        const proceed = Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                if (proceed) {
                    fetch(`https://car-doctor-server-eta-ashy.vercel.app/bookings/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                const remaining = bookings.filter(booking => booking._id !== id)
                                setBookings(remaining)
                            }
                        })
                }
            }
        })
    }

    const handleBookingConfirm =(id)=>{
        fetch(`https://car-doctor-server-eta-ashy.vercel.app/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings)
            }
        })
    }

    return (
        <div>
            <h2>Your Bookings: { }</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Cancel
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            />)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;