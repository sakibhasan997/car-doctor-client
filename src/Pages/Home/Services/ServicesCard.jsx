import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className="rounded-xl" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions items-center justify-end">
                        <p className='text-xl  text-red-600'>Price: {price}</p>
                       <Link to={`/book/${_id}`}> <button><FaArrowRight className='text-red-600' /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;