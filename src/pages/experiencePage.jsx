import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useNavigate } from "react-router-dom";

import backArrow from "../assets/images/back-arrow.svg";
import emailIcon from "../assets/images/icon-email.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import Resume from "../components/resume";
import { useSelector } from "react-redux";

const Experience = () => {
  const userInfoData = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: {  dirtyFields, errors },
  } = useForm();

  useFormPersist("user info", {
    watch,
    setValue,
    storage: window.localStorage,
  });


  const onSubmit = (data) => {
    console.log("form sumbited", data);
  };
  const onError = (errors) => {
    console.log(" form errors", errors);
  };
  const watchForm = watch();

  const [forms, setForms] = useState([1]);
  const addForm = () => {
    setForms([...forms, 1]);
  };

  useEffect(() => {
    const formsLength = JSON.parse(localStorage.getItem("forms length"));
    if (formsLength) {
      setForms(formsLength);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("forms length", JSON.stringify(forms));
    }, 500);
  }, [forms]);

  return (
    <div className="mt-[45px] ml-[48px] flex">
      {/* left section///////////  */}
      <section className="flex gap-[61px] mt-[]">
        <img className="self-start" src={backArrow} alt="" />
        <div className="w-[798px]">
          <div className="flex justify-between mb-[12px] border-b-[1px] border-solid border-[#1A1A1A] pb-[12px]">
            <h1 className="font-bold text-xxl ">გამოცდილება</h1>
            <p className="text-[20px] text-[#1A1A1A]">2/3</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {/* map /////////////////////////////////////////////////////////// */}
            {forms?.map((form, index) => (
              <div key={index} className="mt-[60px]">
                {/* თანამდებობა /////////////////////// */}
                <div className="flex flex-col mt-[13px]">
                  <label className="font-bold mb-[8px]">თანამდებობა</label>
                  <input
                    {...register(`position${index}`, {
                      required: true,
                      pattrern: /^[ა-ჰ]{2,}$/,
                    })}
                    className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                    type="text"
                    placeholder="დეველოპერი, დიზაინერი, ა.შ."
                  />
                  <p className="font-light text-sm text-dark">
                    მინიმუმ 2 სიმბოლო
                  </p>
                </div>
                {/* დამსაქმებელი ///////////////////////////////////////////// */}
                <div className="flex flex-col mt-[17px]">
                  <label className="font-bold mb-[8px]">დამსაქმებელი</label>
                  <input
                    {...register(`employer${index}`, {
                      required: true,
                      pattrern: /^[ა-ჰ]{2,}$/,
                    })}
                    className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey mb-[8px]"
                    type="text"
                    placeholder="დამსაქმებელი"
                  />
                  <p className="font-light text-sm text-dark">
                    მინიმუმ 2 სიმბოლო
                  </p>
                </div>
                {/* თარიღები  /////////////////////////////////// */}
                <div className="flex gap-[56px] mt-[77px]">
                  {/* დაწყების რიცხვი ///////////////////  */}
                  <div className="flex flex-col">
                    <label className="font-bold mb-[8px]">
                      დაწყების რიცხვი
                    </label>
                    <input
                      {...register(`start${index}`, {
                        required: true,
                      })}
                      className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                      type="date"
                    />
                  </div>
                  {/* დამტავრების რიცხცი /////////////////////////// */}
                  <div className="flex flex-col">
                    <label className="font-bold mb-[8px]">
                      დამთავრების რიცხვი
                    </label>
                    <input
                      {...register(`finnish${index}`, {
                        // required: true,
                      })}
                      className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px] "
                      type="date"
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-[46px]">
                  <label className="font-bold mb-[8px]">აღწერა</label>
                  <textarea
                    {...register(`description${index}`, {
                      // required: true,
                    })}
                    className="border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px] box-border px-[16px] py-[13px]"
                    cols="30"
                    rows="3"
                    placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  ></textarea>
                </div>
                <div className="w-[798px] h-[1px] bg-[#C1C1C1] mt-[55px]"></div>
              </div>
            ))}
            <button
              onClick={addForm}
              type="sumbit"
              className="font-medium text-white bg-[#62A1EB] rounded-[4px] w-[289px] h-[48px]  mt-[45px]"
            >
              მეტი გამოცდილების დამატება
            </button>
            <div className="flex justify-between mt-[115px] mb-[65px]">
              <button className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px]  ">
                უკან
              </button>
              <button className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px] ">
                შემდეგი
              </button>
            </div>
          </form>
        </div>
      </section>
      <Resume watchForm={watchForm} forms={forms} />
    </div>
  );
};

export default Experience;
