import React from 'react';
import BookingForm from './BookingForm';

const Booking = () =>{
    return(
        <BookingForm availableTimes={PaymentResponse.availableTimes} dispatch={PaymentResponse.dispatch} SubmitForm={props.SubmitForm}/>
    );
};

export default Booking;

