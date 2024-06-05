import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getHotelsThunk } from '../../store/slices/hotels.slice'
import { useDispatch } from 'react-redux'

const CategoryFilter = () => {

    const [hotelsCities, getHotelsCities] = useFetch()

    const dispatch = useDispatch()

    useEffect(() => {
        getHotelsCities('http://localhost:8080/', 'cities') // http://localhost:8080/
    }, [])
    
    // console.log(hotelsCities)

    const handleSelect = (id) => {
        let url

        if (id) {
            url = `http://localhost:8080/hotels?cityId=${id}`
        } else {
            url = 'http://localhost:8080/hotels'
        }
        
        dispatch(getHotelsThunk(url))
        console.log(id)
    }

    return (
        <section onChange={(event) => handleSelect(event.target.value)}>
            <h3>City</h3>
            <select>
                <option value=''>All Cities</option>
                {
                    hotelsCities?.map(city => (
                        <option key={city.id} value={city.id}>{city.name}</option>
                    ))
                }
            </select>
        </section>
    )
}

export default CategoryFilter