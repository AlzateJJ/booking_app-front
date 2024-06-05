import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"

const HotelsNear = ( { id, hotelId } ) => {

    const [ hotelsInCity, getHotelsInCity ] = useFetch()

    useEffect(() => {
        if (id) {
            const url = "http://localhost:8080/hotels?cityId=";
            getHotelsInCity(url, id)            
        }
    }, [id])
    
    // se filtra para no mostrar de nuevo el mismo hotel
    const hotelsFiltered = hotelsInCity?.filter(hotel => hotel.id !== hotelId)

    return (
        <section>
            <h2>Other Hotels in <span>{hotelsInCity?.[0].city.name}</span></h2>
            <div className = 'hotels__container'>
                {
                    hotelsFiltered?.map(hotel => (
                        <HotelCard
                            hotel = {hotel}
                            key = {hotel.id}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default HotelsNear;