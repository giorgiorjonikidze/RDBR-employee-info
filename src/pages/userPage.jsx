import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useNavigate } from "react-router-dom";

import Resume from "../components/resume";

import backArrow from "../assets/images/back-arrow.svg";
import errorIcon from "../assets/images/icon-error.svg";
import successIcon from "../assets/images/icon-success.svg";


import {
  borderErrorStyling,
  labelErrorStyling,
  validationIcon,
} from "../utils/errorStyling";

const UserPage = () => {
  const [imageError, setImageError] = useState(false);
  const [dirtyImage, setDirtyImage] = useState(false);

  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    setImageError(true);
    setDirtyImage(true);

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        localStorage.setItem("image result", reader.result);
        setImage(reader.result);
      };
    }
  };

  useEffect(() => {
    const imageResult = localStorage.getItem("image result");
    if (imageResult) {
      setImage(imageResult);
      setImageError(true);
      setDirtyImage(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    getValues,
    setValue,
    formState: { dirtyFields, errors},
  } = useForm();

  useFormPersist("form info", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const watchForm = watch();

  const onSubmit = () => {
    setDirtyImage(true);
    if (imageError) {
      navigate("/experience");
    }
  };

  const onError = () => {
    setDirtyImage(true);
    setValue("name", watchForm.name, { shouldDirty: true });
    setValue("surname", watchForm.surname, { shouldDirty: true });
    setValue("email", watchForm.email, { shouldDirty: true });
    setValue("phone_number", watchForm.phone_number, { shouldDirty: true });
  };

  const inputTriggerHandler = () => {
    trigger();
  };

  const returnToHomeHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  const formatInputValue = (value) => {
    if (value) {
      let newValue = value.replace(/\s/g, "");
      if (newValue.length >= 1 && newValue[0] !== "+") {
        newValue = "+" + newValue;
      }
      newValue = newValue.replace(
        /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
        "$1 $2 $3 $4 $5"
      );
      setValue("phone_number", newValue);
    }
  };
  useEffect(() => {
    formatInputValue(watchForm.phone_number);
  }, [watchForm.phone_number]);

  return (
    <div className="mt-[45px] ml-[48px] flex">
      {/* left section///////////  */}
      <section className="flex gap-[61px] mt-[]">
        <button onClick={returnToHomeHandler} className="self-start">
          <img src={backArrow} />
        </button>
        <div className="w-[798px]">
          <div className="flex justify-between mb-[12px] border-b-[1px] border-solid border-[#1A1A1A] pb-[12px]">
            <h1 className="font-bold text-xxl ">?????????????????? ????????????</h1>
            <p className="text-[20px] text-[#1A1A1A]">1/3</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="flex gap-[56px] mt-[77px]">
              {/* ?????????????????? ///////////////////  */}
              <div
                className="flex flex-col relative"
                onChange={inputTriggerHandler}
              >
                <label
                  className="font-bold mb-[8px]"
                  style={labelErrorStyling("name", dirtyFields, errors)}
                >
                  ??????????????????
                </label>
                <input
                  {...register("name", {
                    required: true,
                    pattern: /^[???-???]{2,}$/,
                  })}
                  className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                  type="text"
                  placeholder="???????????????"
                  style={borderErrorStyling("name", dirtyFields, errors)}
                />
                <p className="font-light text-sm text-dark">
                  ????????????????????? 2 ?????????, ????????????????????? ??????????????????
                </p>
                {validationIcon("name", dirtyFields, errors)}
              </div>
              {/* ??????????????? /////////////////////////// */}
              <div
                className="flex flex-col relative"
                onChange={inputTriggerHandler}
              >
                <label
                  className="font-bold mb-[8px]"
                  style={labelErrorStyling("surname", dirtyFields, errors)}
                >
                  ???????????????
                </label>
                <input
                  {...register("surname", {
                    required: true,
                    pattern: /^[???-???]{2,}$/,
                  })}
                  className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                  type="text"
                  placeholder="??????????????????"
                  style={borderErrorStyling("surname", dirtyFields, errors)}
                />
                <p className="font-light text-sm text-dark">
                  ????????????????????? 2 ?????????, ????????????????????? ??????????????????
                </p>
                {validationIcon("surname", dirtyFields, errors)}
              </div>
            </div>
            {/* ?????????????????? ???????????????????????? //////////////////////////  */}
            <div
              className="mt-[46px] flex gap-[19px] items-center"
              onChange={inputTriggerHandler}
            >
              <p className="font-bold text-xl text-dark_font">
                ?????????????????? ??????????????? ????????????????????????
              </p>
              <label
                htmlFor="file-input"
                className="w-[107px] h-[27px] cursor-pointer bg-[#0E80BF] text-white text-[14px] rounded-[4px] flex justify-center pt-[2px]"
              >
                ????????????????????????
              </label>
              <input
                {...register("file")}
                className="hidden"
                type="file"
                id="file-input"
                accept="image/*"
                onChange={handleFileChange}
              />
              {dirtyImage ? (
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
                ????????? ????????????????????? (??????????????????????????????????????????)
              </label>
              <textarea
                {...register("about_me")}
                className="px-[16px] border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px] py-[13px]"
                cols="30"
                rows="6"
              ></textarea>
            </div>
            {/* ????????????????????? ///////////////////////////////////////////// */}
            <div
              className="flex flex-col mt-[17px] relative"
              onChange={inputTriggerHandler}
            >
              <label
                className="font-bold mb-[8px]"
                style={labelErrorStyling("email", dirtyFields, errors)}
              >
                ??????.???????????????
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /.*@redberry.ge$/,
                })}
                className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey mb-[8px]"
                type="text"
                placeholder="anzorr666@redberry.ge"
                style={borderErrorStyling("email", dirtyFields, errors)}
              />
              <p className="font-light text-sm text-dark">
                ???????????? ???????????????????????????????????? @redberry.ge-??????
              </p>
              {validationIcon("email", dirtyFields, errors)}
            </div>
            <div
              className="flex flex-col mt-[13px] relative"
              onChange={inputTriggerHandler}
            >
              <label
                className="font-bold mb-[8px]"
                style={labelErrorStyling("phone_number", dirtyFields, errors)}
              >
                ??????????????????????????? ??????????????????
              </label>
              <input
                {...register("phone_number", {
                  required: true,
                  pattern: /^(\+995)\s(\d{3})\s(\d{2})\s(\d{2})\s(\d{2})$/,
                })}
                className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                type="text"
                placeholder="+995 555 12 34 56"
                style={borderErrorStyling("phone_number", dirtyFields, errors)}
              />
              <p className="font-light text-sm text-dark">
                ???????????? ?????????????????????????????????????????? ????????????????????? ??????????????????????????? ?????????????????? ?????????????????????
              </p>
              {validationIcon("phone_number", dirtyFields, errors)}
            </div>
            <button
              type="submit"
              className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px] float-right mt-[152px]"
            >
              ?????????????????????
            </button>
          </form>
        </div>
      </section>
      <Resume watchForm={watchForm} imageUploaded={image} />
    </div>
  );
};

export default UserPage;
