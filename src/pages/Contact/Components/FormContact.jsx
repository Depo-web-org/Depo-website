import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import LoadingAnimation from "./loadingAnimation";
const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();
  const [value, setValue] = useState();
  const valueLength = value?.length || 0;
  const sendDataToBackend = async (data) => {
    setIsLoading(true);
    await axios
      .post("https://dev.depowebeg.com/api/api/form", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setResponse(response.data))
      .then(() => {
        reset();
        setValue('');
      }
    )
      .catch(() =>  setResponse('Something went wrong, please try again'))
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => {
          setResponse(null);
        }, 5000);
      });
  };
  const disableCopyPasteCut = (e) => {
    e.preventDefault();
  };

  return (
    <section className="pt-4 text-white lg:mr-16 ">
      <form onSubmit={handleSubmit(sendDataToBackend)} action="submit">
        <div className="flex  gap-[20px] lg:flex-row flex-col flex-wrap xl:flex-nowrap lg:gap-y-16 ">
          <label
            htmlFor="name"
            className="h-10 w-full cursor-pointer text-slate-100 font-medium flex flex-col"
          >
            Name
            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^.{2,20}$/,
                  message: "Invalid name",
                },
              })}
              id="name"
              type="text"
              placeholder="Full Name"
              className="bg-white rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
            />
            {errors.name && (
              <p className="text-red-500 ">{errors.name.message}</p>
            )}
          </label>

          <label
            htmlFor="user-mail"
            className="h-10 w-full mt-8 lg:mt-0 cursor-pointer text-slate-100 font-medium flex flex-col"
          >
            Email
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              id="user-mail"
              type="email"
              placeholder="Example@gmail.com"
              className="bg-white rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </label>
        </div>

        <label
          htmlFor="user-phone"
          className="h-10 w-full cursor-pointer mt-16 text-slate-100 font-medium flex flex-col"
        >
          Phone Number
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{11,15}$/,
                message: "Invalid phone number",
              },
            })}
            id="user-phone"
            type="text"
            placeholder="+20 123456789"
            className="bg-white rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </label>

        <label
          htmlFor="user-message"
          className="w-full cursor-pointer mt-16 text-slate-100 font-medium flex flex-col "
        >
          Your Message
          <textarea
            {...register("message", {
              required: "Message is required",
            })}
            id="user-message"
            className={`h-60 ${
              valueLength >= 1200
                ? "active:outline-red-500 outline-red-500 "
                : "active:outline-primary outline-primary"
            } resize-none scrollbar-hide  placeholder:text-gray-400 my-[6px] rounded-[5px] p-[10px] text-gray-400`}
            placeholder="Write your inquiry"
            value={value}
            onChange={(e) =>
              e.target.value.length <= 1200 && setValue(e.target.value)
            }
            onCopy={disableCopyPasteCut}
            onPaste={disableCopyPasteCut}
            onCut={disableCopyPasteCut}
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
          <span className="text-right">
            {" "}
            {valueLength >= 1200
              ? `1200 character  used.`
              : `${valueLength} / 1200 character `}
          </span>
        </label>

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary w-48 mt-4 rounded-[5px] text-white px-8 py-4 font-bold transition-colors ease-out duration-300"
        >
          {isLoading ? <LoadingAnimation /> : "Confirm"}
        </button>
      </form>

      {response != null && (
        <p className=" mt-2 text-white font-bold ">{response}</p>
      )}
    </section>
  );
};

export default FormContact;
