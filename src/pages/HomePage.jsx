import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import HotelCard from '../components/HomePage/HotelCard'
import CategoryFilter from '../components/HomePage/CategoryFilter'
import PriceFilter from '../components/HomePage/PriceFilter'

const HomePage = () => {

    const [inputValue, setInputValue] = useState('')

    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })

    const input = useRef()

    const hotels = useSelector(store => store.hotels)

    const handleInputChange = () => {
        setInputValue(input.current.value)
    }

    // here, hotels are filtered by input and price
    const filteredHotels = hotels?.filter(hotel =>
      ((hotel.name).toLowerCase().includes(inputValue.toLowerCase()))
      && (+(hotel.price) >= Number(fromTo.from) && +(hotel.price) <= +(fromTo.to))  
    )

    return (
      <div>
          <h1>HomePage :)</h1>
          <div>
            <h2>Busca tu hotel</h2>
            <input onChange={handleInputChange} type="text" ref={input}/>
          </div>
          <aside>
            <h3>Filters</h3>
            <CategoryFilter />
            <PriceFilter
              setFromTo = {setFromTo}
            />
          </aside>
          <div className = 'hotels__container'>
            {
              filteredHotels?.map(hotel => (
                <HotelCard
                  hotel = {hotel}
                  key = {hotel.id}
                />
              ))
            }
          </div>
      </div>
    )
}

export default HomePage