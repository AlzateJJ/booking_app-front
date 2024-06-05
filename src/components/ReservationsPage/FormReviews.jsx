
import useCrud from "../../hooks/useCrud";
import "./styles/FormReviews.css";
import { useForm } from "react-hook-form";

const FormReviews = ({ currentReservation, setCurrentReservation }) => {
    console.log(currentReservation);

    const [ , , createReview] = useCrud()
    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        data.hotelId = currentReservation?.hotel.id
        data.rating = Number(data.rating)
        console.log(data)
        const url = 'http://localhost:8080/reviews'
        createReview(url, data)
        setCurrentReservation()
        reset({
            rating: '',
            comment: ''
        })
    }

    return (
        <article className={currentReservation && "form__reviews"}>
        <h3>Add your review</h3>
        <section>
            <header>
            <img src={currentReservation?.hotel.images[0].url} alt="" />
            </header>
            <h4>{currentReservation?.hotel.name}</h4>
            <p>
            {currentReservation?.hotel.city.name},
            {currentReservation?.hotel.city.country}
            </p>
            <ul>
            <li className="currentRes__list-item">
                <span>Reservation days</span>
                <span>{currentReservation?.reservationDays}</span>
            </li>
            <li className="currentRes__list-item">
                <span>Subtotal Price</span>
                <span>{currentReservation?.reservationSubTotal}</span>
            </li>
            </ul>
        </section>
        <form onSubmit={handleSubmit(submit)} >
            <label>
                <span>Rating</span>
                <select {...register('rating')} >
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                </select>
            </label>
            <label>
                <span>Comments</span>
                <textarea {...register('comment')} />
            </label>
            <button>Submit</button>
        </form>
        </article>
    );
};

export default FormReviews;
