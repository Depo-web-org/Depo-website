import { useForm } from 'react-hook-form';
import Button from '../../../components/common/Button';
import axios from 'axios';
import { useState } from 'react';


const FormContact = () => {
    const { register, handleSubmit ,formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    // data => console.log(data);
    const sendDataToBackend = async (data) => {
        setIsLoading(true);
        try {
            const response = await axios.post("YOUR_BACKEND_URL", data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data.message === "success") {
                // Navigate or perform any other actions here
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };
    const onSubmit = (data) => {
        sendDataToBackend(data);
    };
  return (
    <section className="pt-4 text-white lg:mr-16 ">
    <form onSubmit={handleSubmit(onSubmit)} action="submit">
        <div className="flex gap-[20px] lg:flex-row flex-col flex-wrap xl:flex-nowrap lg:gap-y-16">
            <label htmlFor="name" className="h-10 w-full cursor-pointer text-slate-100 font-medium flex flex-col">
                Name
                <input 
                    {...register('name', {
                        required: 'Name is required',
                    })}
                    id="name" 
                    type="text" 
                    placeholder="Full Name" 
                    className="bg-white px-5 rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400" 
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </label>

            <label htmlFor="user-mail" className="h-10 w-full mt-8 lg:mt-0 cursor-pointer text-slate-100 font-medium flex flex-col">
                Email
                <input 
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: 'Invalid email address',
                        },
                    })}
                    id="user-mail" 
                    type="email" 
                    placeholder="Example@gmail.com" 
                    className="bg-white px-5 rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400" 
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </label>
        </div>

        <label htmlFor="user-phone" className="h-10 w-full cursor-pointer mt-16 text-slate-100 font-medium flex flex-col">
            Phone Number
            <input 
                {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                        message: 'Invalid phone number',
                    },
                })} 
                id="user-phone" 
                type="text" 
                placeholder="+20 123456789" 
                className="bg-white px-5 rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400" 
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </label>

        <label htmlFor="user-message" className="w-full cursor-pointer mt-16 text-slate-100 font-medium flex flex-col">
            Your Message
            <textarea 
                {...register('message', {
                    required: 'Message is required',
                })}
                id="user-message" 
                className="h-60 resize-none active:outline-primary outline-primary placeholder:text-gray-400 my-[6px] rounded-[5px] p-[10px] text-gray-400" 
                placeholder="Write your inquiry"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}

        </label>

        {/* Button */}
        <Button  disabled={isLoading} type="submit" backgroundColor={"bg-primary"} title={"Confirm"} style="w-48 mt-8 lg:mt-16" />
    </form>
        </section>


  )
}

export default FormContact
