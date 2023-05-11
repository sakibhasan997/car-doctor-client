import React from 'react';
import Swal from 'sweetalert2';

const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    const { _id, img, customerName, date, price, service, email, status } = booking;



    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="mask rounded w-20 h-20">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>

            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'confirm' ? <span className='font-bold text-primary'>Confirm</span> :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>

    );
};

export default BookingsRow;