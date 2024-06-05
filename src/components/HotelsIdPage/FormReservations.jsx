import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const FormReservations = ({ hotelId }) => {
  const { handleSubmit, register, reset } = useForm();

  const [, , createReservations] = useCrud();

  const submit = (data) => {
    data.hotelId = hotelId;
    // console.log(data)
    const url = "https://booking-app-back-qqhn.onrender.com/bookings";
    createReservations(url, data);

    reset({
      checkIn: "",
      checkOut: "",
    });
  };

  return (
    <div>
      <section>
        <h2>Please select the days of stay in this hotel</h2>
        <form onSubmit={handleSubmit(submit)}>
          <label>
            <span>Check In</span>
            <input type="date" {...register("checkIn")} />
          </label>
          <label>
            <span>Check Out</span>
            <input type="date" {...register("checkOut")} />
          </label>
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default FormReservations;
