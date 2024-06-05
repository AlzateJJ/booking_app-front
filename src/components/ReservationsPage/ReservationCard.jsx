import useCrud from '../../hooks/useCrud';
import './styles/ReservationCard.css'

const ReservationCard = ({ reservation, setCurrentReservation, deleteRes }) => {
  // console.log(reservation)

  const handleReview = () => {
    const obj = {
      ...reservation,
      reservationDays: (checkOut - checkIn) / (24000 * 3600),
      reservationSubTotal: `${reservation.hotel.price * (checkOut - checkIn) / (24000 * 3600)} USD`
    }
    setCurrentReservation(obj)
  }

  const deleteReservation = () => {
    const url = `http://localhost:8080/bookings/${reservation?.id}`
    deleteRes(url, reservation?.id)
  }

  const [checkIn, checkOut] = 
    [new Date(reservation?.checkIn), new Date(reservation?.checkOut)]

    return (
      <article className="reservation">
        <header className="reservation__header">
          <img src={reservation?.hotel.images[0].url}  className="reservation__img" alt={`${reservation?.hotel.name} img`} />
        </header>
        <div className='reservation__data'>
          <section className="reservation__info" >
            <h3 className="reservation__name" >{reservation?.hotel.name}</h3>
            <p className="reservation__location" >{`${reservation?.hotel.city.name}, ${reservation?.hotel.city.country}`}</p>
            <h4 className="reservation__openform" onClick={handleReview} >Rate and comment this visit...</h4>
          </section>
          <section className="reservation__days-price" >
            <ul className="reservation__list" >
              <li className="reservation__item">
                <span className="reservation__label" >Reservation Days</span>
                <span className="reservation__value" >{(checkOut - checkIn) / (24000 * 3600)}</span>
              </li>
              <li className="reservation__item">
                <span className="reservation__label" >SubTotal Price</span>
                <span className="reservation__value" >{reservation?.hotel.price * (checkOut - checkIn) / (24000 * 3600)} USD</span>
              </li>
            </ul>
          </section>
          <footer className="reservation__footer" >
            <button className="reservation__btn" onClick={deleteReservation} ><i className='bx bx-trash'></i></button>
          </footer>
        </div>
      </article>
    );
};

export default ReservationCard;
