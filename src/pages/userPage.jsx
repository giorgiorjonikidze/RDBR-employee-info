import React from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useNavigate } from "react-router-dom";

import backArrow from "../assets/images/back-arrow.svg";
import emailIcon from "../assets/images/icon-email.svg";
import phoneIcon from "../assets/images/icon-phone.svg";

const UserPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useFormPersist("storageKey", {
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
    <div className="mt-[45px] ml-[48px] flex">
      {/* left section///////////  */}
      <section className="flex gap-[61px] mt-[]">
        <img className="self-start" src={backArrow} alt="" />
        <div className="w-[798px]">
          <div className="flex justify-between mb-[12px] border-b-[1px] border-solid border-[#1A1A1A] pb-[12px]">
            <h1 className="font-bold text-xxl ">პირადი ინფო</h1>
            <p className="text-[20px] text-[#1A1A1A]">1/3</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="flex gap-[56px] mt-[77px]">
              {/* სახელი ///////////////////  */}
              <div className="flex flex-col">
                <label className="font-bold mb-[8px]">სახელი</label>
                <input
                  {...register("name", { required: true })}
                  className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                  type="text"
                  placeholder="ანზორ"
                />
                <p className="font-light text-sm text-dark">
                  მინიმუმ 2 ასო, ქართული ასოები
                </p>
              </div>
              {/* გვარი /////////////////////////// */}
              <div className="flex flex-col">
                <label className="font-bold mb-[8px]">გვარი</label>
                <input
                  {...register("surname", { required: true })}
                  className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                  type="text"
                  placeholder="მელაძე"
                />
                <p className="font-light text-sm text-dark">
                  მინიმუმ 2 ასო, ქართული ასოები
                </p>
              </div>
            </div>
            {/* ფაილის ატვირთვა //////////////////////////  */}
            <div className="mt-[46px]">
              <input {...register("file", { required: true })} type="file" />
            </div>
            <div className="flex flex-col mt-[46px]">
              <label className="font-bold mb-[8px]">
                ჩემ შესახებ (არასავალდებულო)
              </label>
              <textarea
                {...register("userInfo", { required: true })}
                className="border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px]"
                cols="30"
                rows="3"
              ></textarea>
            </div>
            {/* ელფოსტა ///////////////////////////////////////////// */}
            <div className="flex flex-col mt-[17px]">
              <label className="font-bold mb-[8px]">ელ.ფოსტა</label>
              <input
                {...register("email", { required: true })}
                className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey mb-[8px]"
                type="text"
                placeholder="anzorr666@redberry.ge"
              />
              <p className="font-light text-sm text-dark">
                უნდა მთავრდებოდეს @redberry.ge-ით
              </p>
            </div>
            <div className="flex flex-col mt-[13px]">
              <label className="font-bold mb-[8px]">მობილურის ნომერი</label>
              <input
                {...register("phone", { required: true })}
                className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                type="text"
                placeholder="+995 551 12 34 56"
              />
              <p className="font-light text-sm text-dark">
                უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
              </p>
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
      <section className="ml-[200px]">
        <div className="w-[423px] flex flex-col">
          {/* სახელი გვარი ///////////////////////// */}
          <div className="flex gap-[20px] mb-[17px]">
            <p className="font-bold text-red_font text-[34px] ">
              {watchForm.name}
            </p>
            <p className="font-bold text-red_font text-[34px] ">
              {watchForm.surname}
            </p>
          </div>
          {/* იმეილი ///////////////////////////  */}
          <div className="flex items-center gap-[10px] mb-[10px]">
            <img src={emailIcon} />
            <p className="text-xl text-dark_font ">{watchForm.email}</p>
          </div>
          {/* ტელეფონი ////////////////////////// */}
          <div className="flex items-center gap-[10px] mb-[34px]">
            <img src={phoneIcon} />
            <p className="text-xl text-dark_font">
              {watchForm.phone}
            </p>
          </div>
          {/* გამოცდილება/////////////  */}
          {watchForm.userInfo && (
            <div className="flex flex-col">
              <p className="font-bold text-xl text-red_font mb-[15px]">
                ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
              </p>
              <p>{watchForm.userInfo}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UserPage;
