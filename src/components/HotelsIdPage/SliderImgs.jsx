import { useEffect, useState } from 'react'
import './styles/SliderImgs.css'

const SliderImgs = ( { hotelInfo } ) => {

    console.log(hotelInfo)

    const [imgSelected, setImgSelected] = useState(0)

    const objStyle = {
        width: `${hotelInfo?.images.length * 100}%`,
        transform: `translateX(calc(-${imgSelected}/${hotelInfo?.images.length} * 100%))`
    }

    // no funciona todavía bien
    // useEffect(() => {
    //   setInterval(() => {
    //     setImgSelected(imgSelected === hotelInfo?.images.length - 1 ? 0 : imgSelected + 1)
    //   }, 2000)
    // }, [imgSelected])
    // no funciona todavía bien
    
    const handleMove = move => {
        if (move == 1) {
            setImgSelected(imgSelected === hotelInfo?.images.length - 1 ? 0 : imgSelected + 1)
        } else {
            setImgSelected(imgSelected === 0 ? hotelInfo?.images.length - 1 : imgSelected - 1)
        }
    }

    return (

        <div className='slider__container'>
            <div className='slider'>
                    <button className='slider__btn' onClick={() => handleMove(-1)} >&lt;</button>
                    <div  style={objStyle} className='slider__movable'>
                        {
                            hotelInfo?.images.map(imgInfo => (
                                <div className="slider__img-container" key={imgInfo.id} >
                                    <img className="slider__img" src={imgInfo.url} alt={`imagen de hotel: ${imgInfo.id}`} />
                                </div>
                            ))
                        }
                    </div>
                    <button className='slider__btn slider__next' onClick={() => handleMove(1)} >&gt;</button>
            </div>
            
            {/* <div className='slider__footer'>
                {
                    hotelInfo?.images.map((imgInfo, index) => (
                        <div className="slider__footer-img-container" key={imgInfo.id} >
                            <img className={`slider__footer-img ${imgSelected === index && 'slider__footer-active-img'}`} 
                            src={imgInfo.url} alt={`imagen de hotel: ${imgInfo.id}`} 
                            onClick={() => setImgSelected(index)}/>
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default SliderImgs