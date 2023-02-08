import React from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useNavigate } from "react-router-dom";

import backArrow from "../assets/images/back-arrow.svg";
import emailIcon from "../assets/images/icon-email.svg";
import phoneIcon from "../assets/images/icon-phone.svg";

const Education = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
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
  console.log(watchForm);

  return (
    <div className="mt-[45px] ml-[48px]">
      {/* left section///////////  */}
      <section className="flex gap-[61px] mt-[]">
        <img className="self-start" src={backArrow} alt="" />
        <div className="w-[798px]">
          <div className="flex justify-between mb-[12px] border-b-[1px] border-solid border-[#1A1A1A] pb-[12px]">
            <h1 className="font-bold text-xxl ">გამოცდილება</h1>
            <p className="text-[20px] text-[#1A1A1A]">2/3</p>
          </div>
          <form>
            {/* სასწავლებელი /////////////////////// */}
            <div className="flex flex-col mt-[13px]">
              <label className="font-bold mb-[8px]">სასწავლებელი</label>
              <input
                {...register("position", {
                  required: true,
                  pattrern: /^[ა-ჰ]{2,}$/,
                })}
                className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                type="text"
                placeholder="სასწავლებელი"
              />
              <p className="font-light text-sm text-dark">მინიმუმ 2 სიმბოლო</p>
            </div>
            
            {/* თარიღები  /////////////////////////////////// */}
            <div className="flex gap-[56px] mt-[77px]">
              {/* ხარისხი ///////////////////  */}
              <div className="flex flex-col">
                <label className="font-bold mb-[8px]">ხარისხი</label>
                <input
                {...register("start", {
                  required: true
                })}
                  className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                  type="text"
                />
              </div>
              {/* დამთავრების რიცხცი /////////////////////////// */}
              <div className="flex flex-col">
                <label className="font-bold mb-[8px]">დამთავრების რიცხვი</label>
                <input
                {...register("finnish", {
                  required: true
                })}
                  className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px] "
                  type="date"
                />
              </div>
            </div>
            {/* ფაილის ატვირთვა //////////////////////////  */}

            <div className="flex flex-col mt-[46px]">
              <label className="font-bold mb-[8px]">აღწერა</label>
              <textarea
              {...register("description", {
                required: true
              })}
                className="border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px] box-border px-[16px] py-[13px]"
                cols="30"
                rows="3"
                placeholder="განათლების აღწერა"
              ></textarea>
            </div>
            <div className="w-[798px] h-[1px] bg-[#C1C1C1] mt-[55px]"></div>
            <button className="font-medium text-white bg-[#62A1EB] rounded-[4px] w-[289px] h-[48px]  mt-[45px]">
              სხვა სასწავლებლის დამატება
            </button>
            <div className="flex justify-between mt-[115px]">
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
    </div>
  );
};

export default Education;
