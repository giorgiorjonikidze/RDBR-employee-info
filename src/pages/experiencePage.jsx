import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useNavigate } from "react-router-dom";

import backArrow from "../assets/images/back-arrow.svg";
import emailIcon from "../assets/images/icon-email.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import errorIcon from "../assets/images/icon-error.svg";
import successIcon from "../assets/images/icon-success.svg";

import Resume from "../components/resume";
import { useSelector, useDispatch } from "react-redux";
import { resumeActions } from "./../store/store";


const Experience = () => {
  const experienceCount = useSelector((state) => state.experienceFormCount);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { dirtyFields, errors },
  } = useForm();

  useFormPersist("user info", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const [dirtyInputs, setDirtyInputs] = useState(dirtyFields);

  const watchForm = watch();

  const onSubmit = (data) => {
    console.log("form sumbited", data);
    navigate("/education");
  };
  const onError = (errors) => {
    console.log(" form errors", errors);
    setDirtyInputs({
      position0: true,
      due_date0: true,
      start_date0: true,
      employer0: true,
      description0: true,
    });
    setValue("position0", watchForm.position0, { shouldDirty: true });
    setValue("due_date0", watchForm.due_date0, { shouldDirty: true });
    setValue("start_date0", watchForm.start_date0, { shouldDirty: true });
    setValue("employer0", watchForm.employer0, { shouldDirty: true });
    setValue("description0", watchForm.description0, { shouldDirty: true });
  };

  // const [forms, setForms] = useState([1]);
  const addForm = () => {
    // setForms([...forms, 1]);
    dispatch(resumeActions.addToExperience());
  };

  const inputTriggerHandler = () => {
    trigger();
    console.log("trigger");
  };

  // useEffect(() => {
  //   const formsLength = JSON.parse(localStorage.getItem("forms length"));
  //   if (formsLength) {
  //     setForms(formsLength);
  //   }
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     localStorage.setItem("forms length", JSON.stringify(forms));
  //   }, 500);
  // }, [forms]);

  

  return (
    <div className="mt-[45px] ml-[48px] flex">
      {/* left section///////////  */}
      <section className="flex gap-[61px] mt-[]">
        <img className="self-start_date" src={backArrow} alt="" />
        <div className="w-[798px]">
          <div className="flex justify-between mb-[12px] border-b-[1px] border-solid border-[#1A1A1A] pb-[12px]">
            <h1 className="font-bold text-xxl ">გამოცდილება</h1>
            <p className="text-[20px] text-[#1A1A1A]">2/3</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {/* map /////////////////////////////////////////////////////////// */}
            {experienceCount?.map((form, index) => (
              <div key={index} className="mt-[60px]">
                {/* თანამდებობა /////////////////////// */}
                <div
                  onChange={inputTriggerHandler}
                  className="flex flex-col mt-[13px] relative"
                >
                  <label
                    className="font-bold mb-[8px]"
                    style={
                      dirtyFields[`position${index}`]
                        ? errors[`position${index}`]
                          ? { color: "#E52F2F" }
                          : { color: "#98E37E" }
                        : { color: "#000000" }
                    }
                  >
                    თანამდებობა
                  </label>
                  <input
                    {...register(`position${index}`, {
                      required: true,
                      minLength: 2,
                    })}
                    className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                    type="text"
                    style={
                      dirtyFields[`position${index}`]
                        ? errors[`position${index}`]
                          ? { borderColor: "#E52F2F" }
                          : { borderColor: "#98E37E" }
                        : { borderColor: "#BCBCBC" }
                    }
                    placeholder="დეველოპერი, დიზაინერი, ა.შ."
                  />
                  <p className="font-light text-sm text-dark">
                    მინიმუმ 2 სიმბოლო
                  </p>
                  {dirtyFields[`position${index}`] ? (
                    errors[`position${index}`] ? (
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
                {/* დამსაქმებელი ///////////////////////////////////////////// */}
                <div
                  onChange={inputTriggerHandler}
                  className="flex flex-col mt-[17px] relative"
                >
                  <label
                    className="font-bold mb-[8px]"
                    style={
                      dirtyFields[`employer${index}`]
                        ? errors[`employer${index}`]
                          ? { color: "#E52F2F" }
                          : { color: "#98E37E" }
                        : { color: "#000000" }
                    }
                  >
                    დამსაქმებელი
                  </label>
                  <input
                    {...register(`employer${index}`, {
                      required: true,
                      minLength: 2,
                    })}
                    className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey mb-[8px]"
                    style={
                      dirtyFields[`employer${index}`]
                        ? errors[`employer${index}`]
                          ? { borderColor: "#E52F2F" }
                          : { borderColor: "#98E37E" }
                        : { borderColor: "#BCBCBC" }
                    }
                    type="text"
                    placeholder="დამსაქმებელი"
                  />
                  <p className="font-light text-sm text-dark">
                    მინიმუმ 2 სიმბოლო
                  </p>
                  {dirtyFields[`employer${index}`] ? (
                    errors[`employer${index}`] ? (
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
                {/* თარიღები  /////////////////////////////////// */}
                <div className="flex gap-[56px] mt-[77px]">
                  {/* დაწყების რიცხვი ///////////////////  */}
                  <div
                    onChange={inputTriggerHandler}
                    className="flex flex-col relative"
                  >
                    <label
                      className="font-bold mb-[8px]"
                      style={
                        dirtyFields[`start_date${index}`]
                          ? errors[`start_date${index}`]
                            ? { color: "#E52F2F" }
                            : { color: "#98E37E" }
                          : { color: "#000000" }
                      }
                    >
                      დაწყების რიცხვი
                    </label>
                    <input
                      {...register(`start_date${index}`, {
                        required: true,
                      })}
                      className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                      style={
                        dirtyFields[`start_date${index}`]
                          ? errors[`start_date${index}`]
                            ? { borderColor: "#E52F2F" }
                            : { borderColor: "#98E37E" }
                          : { borderColor: "#BCBCBC" }
                      }
                      type="date"
                    />
                    {dirtyFields[`start_date${index}`] ? (
                      errors[`start_date${index}`] ? (
                        <img
                          src={errorIcon}
                          className="w-[18px] h-[18px] absolute top-[47px] right-[-30px]"
                        />
                      ) : (
                        <img
                          src={successIcon}
                          className="w-[18px] h-[18px] absolute top-[47px] right-[-30px]"
                        />
                      )
                    ) : (
                      <div></div>
                    )}
                  </div>
                  {/* დამტავრების რიცხცი /////////////////////////// */}
                  <div
                    onChange={inputTriggerHandler}
                    className="flex flex-col relative"
                  >
                    <label
                      className="font-bold mb-[8px]"
                      style={
                        dirtyFields[`due_date${index}`]
                          ? errors[`due_date${index}`]
                            ? { color: "#E52F2F" }
                            : { color: "#98E37E" }
                          : { color: "#000000" }
                      }
                    >
                      დამთავრების რიცხვი
                    </label>
                    <input
                      {...register(`due_date${index}`, {
                        required: true,
                      })}
                      className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px] "
                      style={
                        dirtyFields[`due_date${index}`]
                          ? errors[`due_date${index}`]
                            ? { borderColor: "#E52F2F" }
                            : { borderColor: "#98E37E" }
                          : { borderColor: "#BCBCBC" }
                      }
                      type="date"
                    />
                    {dirtyFields[`due_date${index}`] ? (
                      errors[`due_date${index}`] ? (
                        <img
                          src={errorIcon}
                          className="w-[18px] h-[18px] absolute top-[47px] right-[-30px]"
                        />
                      ) : (
                        <img
                          src={successIcon}
                          className="w-[18px] h-[18px] absolute top-[47px] right-[-30px]"
                        />
                      )
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>

                <div
                  onChange={inputTriggerHandler}
                  className="flex flex-col mt-[46px] relative"
                >
                  <label
                    className="font-bold mb-[8px]"
                    style={
                      dirtyFields[`description${index}`]
                        ? errors[`description${index}`]
                          ? { color: "#E52F2F" }
                          : { color: "#98E37E" }
                        : { color: "#000000" }
                    }
                  >
                    აღწერა
                  </label>
                  <textarea
                    {...register(`description${index}`, {
                      required: true,
                    })}
                    className="border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px] box-border px-[16px] py-[13px]"
                    style={
                      dirtyFields[`description${index}`]
                        ? errors[`description${index}`]
                          ? { borderColor: "#E52F2F" }
                          : { borderColor: "#98E37E" }
                        : { borderColor: "#BCBCBC" }
                    }
                    cols="30"
                    rows="3"
                    placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  ></textarea>
                  {dirtyFields[`description${index}`] ? (
                    errors[`description${index}`] ? (
                      <img
                        src={errorIcon}
                        className="w-[18px] h-[18px] absolute top-[47px] right-[-30px]"
                      />
                    ) : (
                      <img
                        src={successIcon}
                        className="w-[18px] h-[18px] absolute top-[47px] right-[-30px]"
                      />
                    )
                  ) : (
                    <div></div>
                  )}
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
      <Resume watchForm={watchForm} exForms={experienceCount} />
    </div>
  );
};

export default Experience;
