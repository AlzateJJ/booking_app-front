import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Map, Overlay } from "pigeon-maps";
import HotelsNear from "../components/HotelsIdPage/HotelsNear";
import FormReservations from "../components/HotelsIdPage/FormReservations";
import SliderImgs from "../components/HotelsIdPage/SliderImgs";

const HotelsIdPage = () => {
  const { id } = useParams();

  const [hotelInfo, getHotelInfo] = useFetch();

  useEffect(() => {
    const url = "https://booking-app-back-qqhn.onrender.com/hotels/";
    getHotelInfo(url, id);
  }, [id]);

  // console.log(hotelInfo);

  return (
    <div>
      <h2>{hotelInfo?.name}</h2>
      <h3>Rating - {hotelInfo?.rating}</h3>
      <SliderImgs 
        hotelInfo = {hotelInfo}
      />

      <div>
        {hotelInfo && (
          <Map
            height={200}
            center={[parseFloat(hotelInfo.lat), parseFloat(hotelInfo.lon)]}
            defaultZoom={12}
            maxZoom={15}
            minZoom={10}
          >
            <Overlay
              anchor={[+(hotelInfo.lat), +(hotelInfo.lon)]}
              offset={[20, 20]}
            >
              <img src="/hotel_icon.png" width={40} alt="" />
            </Overlay>
          </Map>
          )}
      </div>
      

      <section>
        <h3>
          {hotelInfo?.city.name}, {hotelInfo?.city.country}
        </h3>
        <p>
          <i className="bx bxs-map"></i>
          {hotelInfo?.address}
        </p>
        <p>{hotelInfo?.description}</p>
      </section>
      {
        localStorage.getItem('token')
        ? <FormReservations hotelId = {hotelInfo?.id}/>
        : <h3>If you want to make a reservation, please <Link to = '/login' >Log in</Link> </h3>
      }
      
      <HotelsNear
        id = {hotelInfo?.city.id}
        hotelId = {hotelInfo?.id}
      />
    </div>
  );
};

export default HotelsIdPage;
