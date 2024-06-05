import { useForm } from "react-hook-form";

const PriceFilter = ( { setFromTo } ) => {

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        setFromTo({
            from: data.from ? data.from : 0,
            to: data.to ? data.to : Infinity
        })
        reset({
            from: '',
            to: ''
        })
    }

    return (
        <section>
        <h3>Price</h3>
        <form onSubmit={handleSubmit(submit)} >
            <label>
            <span>From</span>
            <input {...register('from')} type="number" />
            </label>
            <label>
            <span>To</span>
            <input {...register('to')} type="number" />
            </label>
            <button>Apply</button>
        </form>
        </section>
    );
};

export default PriceFilter;
