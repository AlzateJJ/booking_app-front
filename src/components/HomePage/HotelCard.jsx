import { Navigate, useNavigate } from 'react-router-dom'
import './styles/HotelCard.css'

const HotelCard = ( {hotel} ) => {

    const navigate = useNavigate()
    const handleSeeMore = () => {
        navigate(`/hotels/${hotel.id}`)
    }

    console.log(hotel)
    return (
        <article className='hotelCard' onClick={handleSeeMore}>
            <header className='img__container'>
                <img src={`${hotel.images[0].url}`} alt={`${hotel.description}`} className='hotel__img'/>
            </header>
            <section>
                <h3>{hotel.name}</h3>
                <p>{hotel.rating}</p>
                <span>{hotel.city.name}, {hotel.city.country}</span>
                <div>
                    <h4>{`$ ${hotel.price}`}</h4>
                </div>
                <footer>
                    <button onClick={handleSeeMore}>See more...</button>
                </footer>
            </section>
        </article>
  )
}

export default HotelCard