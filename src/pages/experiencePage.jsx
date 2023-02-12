import React from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useNavigate, Link } from "react-router-dom";

import backArrow from "../assets/images/back-arrow.svg";
import errorIcon from "../assets/images/icon-error.svg";
import successIcon from "../assets/images/icon-success.svg";

import Resume from "../components/resume";
import { useSelector, useDispatch } from "react-redux";
import { resumeActions } from "./../store/store";

import {
  borderErrorStyling,
  labelErrorStyling,
  validationIcon,
} from "../utils/errorStyling";

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

  useFormPersist("form info", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const watchForm = watch();

  const onSubmit = () => {
    navigate("/education");
  };
  const onError = () => {
    setValue("position0", watchForm.position0, { shouldDirty: true });
    setValue("due_date0", watchForm.due_date0, { shouldDirty: true });
    setValue("start_date0", watchForm.start_date0, { shouldDirty: true });
    setValue("employer0", watchForm.employer0, { shouldDirty: true });
    setValue("description0", watchForm.description0, { shouldDirty: true });
  };

  const addForm = () => {
    dispatch(resumeActions.addToExperience());
  };

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
          <div className="flex justify-between  border-b-[1px] border-solid border-[#1A1A1A] pb-[12px] mb-[60px]">
            <h1 className="font-bold text-xxl ">გამოცდილება</h1>
            <p className="text-[20px] text-[#1A1A1A]">2/3</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {/* map /////////////////////////////////////////////////////////// */}
            {experienceCount?.map((form, index) => (
              <div key={index} className="">
                {/* თანამდებობა /////////////////////// */}
                <div
                  onChange={inputTriggerHandler}
                  className="flex flex-col mt-[13px] relative"
                >
                  <label
                    className="font-bold mb-[8px]"
                    style={labelErrorStyling(
                      `position${index}`,
                      dirtyFields,
                      errors
                    )}
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
                    style={borderErrorStyling(
                      `position${index}`,
                      dirtyFields,
                      errors
                    )}
                    placeholder="დეველოპერი, დიზაინერი, ა.შ."
                  />
                  <p className="font-light text-sm text-dark">
                    მინიმუმ 2 სიმბოლო
                  </p>
                  {validationIcon([`position${index}`], dirtyFields, errors)}
                </div>
                {/* დამსაქმებელი ///////////////////////////////////////////// */}
                <div
                  onChange={inputTriggerHandler}
                  className="flex flex-col mt-[17px] relative"
                >
                  <label
                    className="font-bold mb-[8px]"
                    style={labelErrorStyling(
                      `employer${index}`,
                      dirtyFields,
                      errors
                    )}
                  >
                    დამსაქმებელი
                  </label>
                  <input
                    {...register(`employer${index}`, {
                      required: true,
                      minLength: 2,
                    })}
                    className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey mb-[8px]"
                    style={borderErrorStyling(
                      `employer${index}`,
                      dirtyFields,
                      errors
                    )}
                    type="text"
                    placeholder="დამსაქმებელი"
                  />
                  <p className="font-light text-sm text-dark">
                    მინიმუმ 2 სიმბოლო
                  </p>
                  {validationIcon([`employer${index}`], dirtyFields, errors)}
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
                      style={labelErrorStyling(
                        `start_date${index}`,
                        dirtyFields,
                        errors
                      )}
                    >
                      დაწყების რიცხვი
                    </label>
                    <input
                      {...register(`start_date${index}`, {
                        required: true,
                      })}
                      className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                      style={borderErrorStyling(
                        `start_date${index}`,
                        dirtyFields,
                        errors
                      )}
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
                      style={labelErrorStyling(
                        `due_date${index}`,
                        dirtyFields,
                        errors
                      )}
                    >
                      დამთავრების რიცხვი
                    </label>
                    <input
                      {...register(`due_date${index}`, {
                        required: true,
                      })}
                      className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px] "
                      style={borderErrorStyling(
                        `due_date${index}`,
                        dirtyFields,
                        errors
                      )}
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
                    style={labelErrorStyling(
                      `description${index}`,
                      dirtyFields,
                      errors
                    )}
                  >
                    აღწერა
                  </label>
                  <textarea
                    {...register(`description${index}`, {
                      required: true,
                    })}
                    className="border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px] box-border px-[16px] py-[13px]"
                    style={borderErrorStyling(
                      `description${index}`,
                      dirtyFields,
                      errors
                    )}
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
                <div className="w-[798px] h-[1px] bg-[#C1C1C1] mt-[55px] mb-[38px]"></div>
              </div>
            ))}
            <button
              onClick={addForm}
              type="sumbit"
              className="font-medium text-white bg-[#62A1EB] rounded-[4px] w-[289px] h-[48px]  mt-[12px]"
            >
              მეტი გამოცდილების დამატება
            </button>
            <div className="flex justify-between mt-[115px] mb-[65px]">
              <Link
                to="/user"
                className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px]  flex justify-center items-center "
              >
                უკან
              </Link>
              <button
                type="submit"
                className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px] "
              >
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
