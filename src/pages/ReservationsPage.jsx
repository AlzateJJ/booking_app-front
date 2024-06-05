import React, { useEffect, useState } from 'react'
import useCrud from '../hooks/useCrud'
import ReservationCard from '../components/ReservationsPage/ReservationCard'
import FormReviews from '../components/ReservationsPage/FormReviews'

const ReservationsPage = () => {

    const [reservations, getReservations, , deleteReservation] = useCrud()
    const [currentReservation, setCurrentReservation] = useState()

    useEffect(() => {
      const url = 'http://localhost:8080/bookings'
      getReservations(url)
    }, [])

    console.log(reservations)

    return (
        <section>

            <FormReviews
                currentReservation = {currentReservation}
                setCurrentReservation = {setCurrentReservation}
            />

            <h2>Reservations</h2>
            <div className='reservations__container' >
                {
                    reservations?.map(res => (
                        <ReservationCard 
                            key={res.id}
                            reservation={res}
                            setCurrentReservation = {setCurrentReservation}
                            deleteRes = {deleteReservation}
                        />
                    ))
                } 
            </div>
        </section>
    )
}

export default ReservationsPage