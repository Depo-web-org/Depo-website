import { useForm } from "react-hook-form";
import axios from "axios";
import { useRef, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import LoadingAnimation from "./loadingAnimation";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

import "./FormContact.css";
import "./FormContact.css";
import ar from "../../../../public/locales/countrysAr.json";
import en from "../../../../public/locales/countrysEn.json";

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();
  const [phoneValue, setPhoneValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptcha = useRef();
  const recaptchaValue = recaptcha?.current?.getValue();
  const messageLength =
    messageValue?.trim().split(/\s+/).filter(Boolean).length || 0;
  const { t, i18n } = useTranslation();
  let countryOptions;

  if (i18n.language === "en") {
    countryOptions = en;
  } else {
    countryOptions = ar;
  }
  const sendDataToBackend = async (data, recaptchaValue) => {
    if (phoneValue?.length >= 10 && recaptchaValue) {
      setIsLoading(true);
      const formData = { ...data, phone: phoneValue };
      await axios
        .post("https://dev.depowebeg.com/api/api/form", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => setResponse(`${t("Contact.Left Side.success")}`))
        .then(() => {
          reset();
          recaptcha.current.reset();
          setPhoneValue("");
          setMessageValue("");
          setIsSubmitted(false);
        })
        .catch(() => setResponse("Something went wrong, please try again"))
        .finally(() => {
          setIsLoading(false);
          setTimeout(() => {
            setResponse(null);
          }, 5000);
        });
    } else {
      setResponse("Something went wrong, please try again");
      return;
    }
  };

  const disableCopyPasteCut = (e) => {
    e.preventDefault();
  };

  const handleFormSubmit = async (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    const recaptchaValue = recaptcha?.current?.getValue();
    if (!recaptchaValue) {
      return;
    }
    await handleSubmit((data) => sendDataToBackend(data, recaptchaValue))(e);
  };
  return (
    <section className="pt-4 text-white ">
      <form onSubmit={handleFormSubmit} action="submit">
        <div className="flex gap-[20px] lg:flex-row flex-col flex-wrap xl:flex-nowrap lg:gap-y-16">
          <label
            htmlFor="name"
            className="h-10 w-full cursor-pointer text-slate-100 font-medium flex flex-col"
          >
            {t("Contact.Left Side.name")}
            <input
              {...register("name", {
                required: `${t("Contact.Left Side.name-require")}`,
                pattern: {
                  value: /^.{2,20}$/,
                  message: `${t("Contact.Left Side.name-require")}`,
                },
              })}
              id="name"
              type="text"
              placeholder={t("Contact.Left Side.name-placeholder")}
              className="bg-white rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </label>

          <label
            htmlFor="user-mail"
            className="h-10 w-full mt-8 lg:mt-0 cursor-pointer text-slate-100 font-medium flex flex-col"
          >
            {t("Contact.Left Side.email")}
            <input
              {...register("email", {
                required: `${t("Contact.Left Side.email-require")}`,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: `${t("Contact.Left Side.email-require")}`,
                },
              })}
              id="user-mail"
              type="email"
              placeholder={t("Contact.Left Side.email-placeholder")}
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
          {t("Contact.Left Side.phone")}
          <PhoneInput
            international
            id="user-phone"
            placeholder={t("Contact.Left Side.phone-placeholder")}
            value={phoneValue}
            onChange={setPhoneValue}
            defaultCountry="EG"
            labels={countryOptions}
            className="bg-white rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
          />
          {isSubmitted && !isValidPhoneNumber(`${phoneValue?.toString()}`) && (
            <p className="text-red-500">
              {t("Contact.Left Side.phone-require")}
            </p>
          )}
        </label>

        <label
          htmlFor="user-message"
          className="w-full cursor-pointer mt-16 text-slate-100 font-medium flex flex-col"
        >
          {t("Contact.Left Side.textarea")}
          <textarea
            {...register("message", {
              required: `${t("Contact.Left Side.textarea-require")}`,
              validate: {
                noLeadingSpaces: (value) =>
                  !/^\s/.test(value) ||
                  `${t("Contact.Left Side.textarea-require")}`,
              },
            })}
            id="user-message"
            className={`h-60 ${
              messageLength >= 500
                ? "active:outline-red-500 outline-red-500"
                : "active:outline-primary outline-primary"
            } resize-none scrollbar-hide placeholder:text-gray-400 my-[6px] rounded-[5px] p-[10px] text-gray-400`}
            placeholder={t("Contact.Left Side.textarea-placeholder")}
            value={messageValue}
            onChange={(e) =>
              e.target.value.length <= 500 && setMessageValue(e.target.value)
            }
            onCopy={disableCopyPasteCut}
            onPaste={disableCopyPasteCut}
            onCut={disableCopyPasteCut}
          ></textarea>

          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
          <span className="text-right">
            {messageLength >= 500
              ? `${t("Contact.Left Side.textarea-numberOfWords")}`
              : `${messageLength}  ${t(
                  "Contact.Left Side.textarea-numberUsed"
                )}`}
          </span>
        </label>
        <div  className="recaptcha-dir pt-4">
        <ReCAPTCHA
          key={i18n.language}
          ref={recaptcha}
          sitekey="6Lcl6YEqAAAAANdKLVZywDSMl7iLTh24k9QaXGnu"
          hl={i18n.language === "ar" ? "ar" : "en"}
        />
        </div>
        {isSubmitted && !recaptchaValue && (
          <span className="text-red-500 block">
            {t("Contact.Left Side.recaptcha-error")}
          </span>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary  w-48 mt-4 rounded-[5px] text-white px-8 py-4 font-bold transition-colors ease-out duration-300 hover:bg-primary-hover"
        >
          {isLoading ? (
            <LoadingAnimation />
          ) : (
            `${t("Contact.Left Side.button")}`
          )}
        </button>
      </form>

      {response != null && (
        <p className="mt-2 text-white font-bold">{response}</p>
      )}
    </section>
  );
};

export default FormContact;
