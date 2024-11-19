import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import LoadingAnimation from "./loadingAnimation";
import { useTranslation } from "react-i18next";
import './FormContact.css'
const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();
  const [phoneValue, setPhoneValue] = useState(); 
  const [messageValue, setMessageValue] = useState('');
  const messageLength = messageValue.length || 0;
  const { t } = useTranslation(); 

  const sendDataToBackend = async (data) => {
    setIsLoading(true);
    const formData = { ...data, phone: phoneValue }; 
    await axios
      .post("https://dev.depowebeg.com/api/api/form", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setResponse(response.data))
      .then(() => {
        reset();
        setPhoneValue('');
        setMessageValue('');
      })
      .catch(() => setResponse('Something went wrong, please try again'))
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
    <section className="pt-4 text-white ">
      <form onSubmit={handleSubmit(sendDataToBackend)} action="submit">
        <div className="flex gap-[20px] lg:flex-row flex-col flex-wrap xl:flex-nowrap lg:gap-y-16">
          <label
            htmlFor="name"
            className="h-10 w-full cursor-pointer text-slate-100 font-medium flex flex-col"
          >
             {t('Contact.Left Side.name')}
            <input
              {...register("name", {
                required: `${t('Contact.Left Side.name-require')}`,
                pattern: {
                  value: /^.{2,20}$/,
                  message: `${t('Contact.Left Side.name-require')}`,
                },
              })}
              id="name"
              type="text"
              placeholder={t('Contact.Left Side.name-placeholder')}
              className="bg-white rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </label>

          <label
            htmlFor="user-mail"
            className="h-10 w-full mt-8 lg:mt-0 cursor-pointer text-slate-100 font-medium flex flex-col"
          >
                {t('Contact.Left Side.email')}
            <input
              {...register("email", {
                required: `${t('Contact.Left Side.email-require')}`,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: `${t('Contact.Left Side.email-require')}`,
                },
              })}
              id="user-mail"
              type="email"
              placeholder={t('Contact.Left Side.email-placeholder')}
              className="bg-white rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </label>
        </div>

        <label
          htmlFor="user-phone"
          className="h-10 w-full cursor-pointer mt-16 text-slate-100 font-medium flex flex-col"
        >
             {t('Contact.Left Side.phone')}

  
          <PhoneInput
      international
      id="user-phone"
      placeholder={t('Contact.Left Side.phone-placeholder')}
      value={phoneValue}
      onChange={setPhoneValue}
      defaultCountry="EG" 
      className="bg-white rounded-[5px] my-[6px]  active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400 "/>
          {errors.phone && (
            <p className="text-red-500">
              {errors.phone.message && `${t('Contact.Left Side.phone-require')}`}
            </p>
          )}
        </label>

        <label
          htmlFor="user-message"
          className="w-full cursor-pointer mt-16 text-slate-100 font-medium flex flex-col"
        >
         {t('Contact.Left Side.textarea')}
          <textarea
            {...register("message", {
              required: `${t('Contact.Left Side.phone-require')}`,
            })}
            id="user-message"
            className={`h-60 ${
              messageLength >= 1200
                ? "active:outline-red-500 outline-red-500"
                : "active:outline-primary outline-primary"
            } resize-none scrollbar-hide placeholder:text-gray-400 my-[6px] rounded-[5px] p-[10px] text-gray-400`}
            placeholder={t('Contact.Left Side.textarea-placeholder')}
            value={messageValue}
            onChange={(e) =>
              e.target.value.length <= 1200 && setMessageValue(e.target.value)
            }
            onCopy={disableCopyPasteCut}
            onPaste={disableCopyPasteCut}
            onCut={disableCopyPasteCut}
          ></textarea>
          {errors.message && <p className="text-red-500">{t('Contact.Left Side.textarea-require')}</p>}
          <span className="text-right">
            {messageLength >= 1200
              ? `${t('Contact.Left Side.textarea-numberOfWords')}` 
              : `${messageLength}  ${t('Contact.Left Side.textarea-numberUsed')}`}
          </span>
        </label>

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary w-48 mt-4 rounded-[5px] text-white px-8 py-4 font-bold transition-colors ease-out duration-300 hover:bg-primary-hover"
        >
          {isLoading ? <LoadingAnimation /> : `${t('Contact.Left Side.button')}`}
        </button>
      </form>

      {response != null && <p className="mt-2 text-white font-bold">{response}</p>}
    </section>
  );
};

export default FormContact;
