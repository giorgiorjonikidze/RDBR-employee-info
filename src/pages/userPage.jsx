import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Resume from "../components/resume";

import backArrow from "../assets/images/back-arrow.svg";
import emailIcon from "../assets/images/icon-email.svg";
import phone_numberIcon from "../assets/images/icon-phone.svg";
import errorIcon from "../assets/images/icon-error.svg";
import successIcon from "../assets/images/icon-success.svg";

import { resumeActions } from "./../store/store";

const UserPage = () => {
  const [imageResult, setImageResult] = useState(null);
  const [imageError, setImageError] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    setImageError(true);

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageResult(reader.result);
        localStorage.setItem("image result", reader.result);
      };
    }
  };

  const retrieveImageFromLocalStorage = () => {
    const imageFromLocalStorage = localStorage.getItem("image result");
    if (imageFromLocalStorage) {
      setImageResult(imageFromLocalStorage);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setValue,
    formState: { dirtyFields, errors },
  } = useForm();

  const [dirtyInputs, setDirtyInputs] = useState(dirtyFields);

  useFormPersist("user info", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const watchForm = watch();

  const onSubmit = (data) => {
    // console.log("form sumbited", data);

    navigate("/experience");
  };
  const onError = (data) => {
    console.log(" form errors", data);
    setDirtyInputs({
      name: true,
      surname: true,
      file: true,
      email: true,
      phone_number: true,
    });
    setValue("name", watchForm.name, { shouldDirty: true });
    setValue("surname", watchForm.surname, { shouldDirty: true });
    setValue("email", watchForm.email, { shouldDirty: true });
    setValue("phone_number", watchForm.phone_number, { shouldDirty: true });
    setValue("file", watchForm.file, { shouldDirty: true });
  };

  // useEffect(() => {
  //   trigger();
  // }, [errors]);

  const inputTriggerHandler = () => {
    trigger();
  };

  const returnToHomeHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="mt-[45px] ml-[48px] flex">
      {/* left section///////////  */}
      <section className="flex gap-[61px] mt-[]">
        <button onClick={returnToHomeHandler} className="self-start">
          <img src={backArrow} />
        </button>
        <div className="w-[798px]">
          <div className="flex justify-between mb-[12px] border-b-[1px] border-solid border-[#1A1A1A] pb-[12px]">
            <h1 className="font-bold text-xxl ">პირადი ინფო</h1>
            <p className="text-[20px] text-[#1A1A1A]">1/3</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="flex gap-[56px] mt-[77px]">
              {/* სახელი ///////////////////  */}
              <div
                className="flex flex-col relative"
                onChange={inputTriggerHandler}
              >
                <label
                  className="font-bold mb-[8px]"
                  style={
                    dirtyFields.name
                      ? errors.name
                        ? { color: "#E52F2F" }
                        : { color: "#98E37E" }
                      : { color: "#000000" }
                  }
                >
                  სახელი
                </label>
                <input
                  {...register("name", {
                    required: true,
                    pattern: /^[ა-ჰ]{2,}$/,
                  })}
                  //   onChange={inputTriggerHandler}
                  className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                  type="text"
                  placeholder="ანზორ"
                  style={
                    dirtyFields.name
                      ? errors.name
                        ? { borderColor: "#E52F2F" }
                        : { borderColor: "#98E37E" }
                      : { borderColor: "#BCBCBC" }
                  }
                />
                <p className="font-light text-sm text-dark">
                  მინიმუმ 2 ასო, ქართული ასოები
                </p>
                {dirtyFields.name ? (
                  errors.name ? (
                    <img
                      src={errorIcon}
                      className="w-[18px] h-[18px] absolute top-[47px] right-[-27px]"
                    />
                  ) : (
                    <img
                      src={successIcon}
                      className="w-[18px] h-[18px] absolute top-[47px] right-[13px]"
                    />
                  )
                ) : (
                  <div></div>
                )}
              </div>
              {/* გვარი /////////////////////////// */}
              <div
                className="flex flex-col relative"
                onChange={inputTriggerHandler}
              >
                <label
                  className="font-bold mb-[8px]"
                  style={
                    dirtyFields.surname
                      ? errors.surname
                        ? { color: "#E52F2F" }
                        : { color: "#98E37E" }
                      : { color: "#000000" }
                  }
                >
                  გვარი
                </label>
                <input
                  {...register("surname", {
                    required: true,
                    pattern: /^[ა-ჰ]{2,}$/,
                  })}
                  className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                  type="text"
                  placeholder="მელაძე"
                  style={
                    dirtyFields.surname
                      ? errors.surname
                        ? { borderColor: "#E52F2F" }
                        : { borderColor: "#98E37E" }
                      : { borderColor: "#BCBCBC" }
                  }
                />
                <p className="font-light text-sm text-dark">
                  მინიმუმ 2 ასო, ქართული ასოები
                </p>
                {dirtyFields.surname ? (
                  errors.surname ? (
                    <img
                      src={errorIcon}
                      className="w-[18px] h-[18px] absolute top-[47px] right-[-27px]"
                    />
                  ) : (
                    <img
                      src={successIcon}
                      className="w-[18px] h-[18px] absolute top-[47px] right-[13px]"
                    />
                  )
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            {/* ფაილის ატვირთვა //////////////////////////  */}
            <div
              className="mt-[46px] flex gap-[19px] items-center"
              onChange={inputTriggerHandler}
            >
              <p className="font-bold text-xl text-dark_font">
                პირადი ფოტოს ატვირთვა
              </p>
              <label
                htmlFor="file-input"
                className="w-[107px] h-[27px] cursor-pointer bg-[#0E80BF] text-white text-[14px] rounded-[4px] flex justify-center pt-[2px]"
              >
                ატვირთვა
              </label>
              <input
                {...register("file")}
                className="hidden"
                type="file"
                id="file-input"
                accept="image/*"
                onChange={handleFileChange}
                ref={retrieveImageFromLocalStorage}
              />
              {dirtyFields.file ? (
                !imageError ? (
                  <img src={errorIcon} className="w-[18px] h-[18px] " />
                ) : (
                  <img src={successIcon} className="w-[18px] h-[18px] " />
                )
              ) : (
                <div></div>
              )}
            </div>
            <div
              className="flex flex-col mt-[46px]"
              onChange={inputTriggerHandler}
            >
              <label className="font-bold mb-[8px]">
                ჩემ შესახებ (არასავალდებულო)
              </label>
              <textarea
                {...register("about_me")}
                className="px-[16px] border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px] py-[13px]"
                cols="30"
                rows="6"
              ></textarea>
            </div>
            {/* ელფოსტა ///////////////////////////////////////////// */}
            <div
              className="flex flex-col mt-[17px] relative"
              onChange={inputTriggerHandler}
            >
              <label
                className="font-bold mb-[8px]"
                style={
                  dirtyFields.email
                    ? errors.email
                      ? { color: "#E52F2F" }
                      : { color: "#98E37E" }
                    : { color: "#000000" }
                }
              >
                ელ.ფოსტა
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /.*@redberry.ge$/,
                })}
                className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey mb-[8px]"
                type="text"
                placeholder="anzorr666@redberry.ge"
                style={
                  dirtyFields.email
                    ? errors.email
                      ? { borderColor: "#E52F2F" }
                      : { borderColor: "#98E37E" }
                    : { borderColor: "#BCBCBC" }
                }
              />
              <p className="font-light text-sm text-dark">
                უნდა მთავრდებოდეს @redberry.ge-ით
              </p>
              {dirtyFields.email ? (
                errors.email ? (
                  <img
                    src={errorIcon}
                    className="w-[18px] h-[18px] absolute top-[47px] right-[-27px]"
                  />
                ) : (
                  <img
                    src={successIcon}
                    className="w-[18px] h-[18px] absolute top-[47px] right-[13px]"
                  />
                )
              ) : (
                <div></div>
              )}
            </div>
            <div
              className="flex flex-col mt-[13px] relative"
              onChange={inputTriggerHandler}
            >
              <label
                className="font-bold mb-[8px]"
                style={
                  dirtyFields.phone_number
                    ? errors.phone_number
                      ? { color: "#E52F2F" }
                      : { color: "#98E37E" }
                    : { color: "#000000" }
                }
              >
                მობილურის ნომერი
              </label>
              <input
                {...register("phone_number", {
                  required: true,
                  pattern: /^\+995[0-9]{9}$/,
                })}
                className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                type="text"
                placeholder="+995 551 12 34 56"
                style={
                  dirtyFields.phone_number
                    ? errors.phone_number
                      ? { borderColor: "#E52F2F" }
                      : { borderColor: "#98E37E" }
                    : { borderColor: "#BCBCBC" }
                }
              />
              <p className="font-light text-sm text-dark">
                უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
              </p>
              {dirtyFields.phone_number ? (
                errors.phone_number ? (
                  <img
                    src={errorIcon}
                    className="w-[18px] h-[18px] absolute top-[47px] right-[-27px]"
                  />
                ) : (
                  <img
                    src={successIcon}
                    className="w-[18px] h-[18px] absolute top-[47px] right-[13px]"
                  />
                )
              ) : (
                <div></div>
              )}
            </div>
            <button
              type="submit"
              className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px] float-right mt-[152px]"
            >
              შემდეგი
            </button>
          </form>
        </div>
      </section>
      <Resume watchForm={watchForm} image={imageResult} />
    </div>
  );
};

export default UserPage;
