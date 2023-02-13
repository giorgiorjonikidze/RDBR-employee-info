import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useNavigate, Link } from "react-router-dom";

import backArrow from "../assets/images/back-arrow.svg";
import emailIcon from "../assets/images/icon-email.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import errorIcon from "../assets/images/icon-error.svg";
import successIcon from "../assets/images/icon-success.svg";

import Resume from "../components/resume";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { resumeActions } from "./../store/store";
import transformObject from "../utils/transformObject";
import dataURLToImage from "../utils/stringToFile";

import {
  borderErrorStyling,
  labelErrorStyling,
  validationIcon,
} from "../utils/errorStyling";

const Experience = () => {
  const degreeUrl = "https://resume.redberryinternship.ge/api/degrees";
  const educationFormCount = useSelector((state) => state.eduCationFormCount);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fetchedSelectData, setFetchedSelectData] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    trigger,
    formState: { dirtyFields, errors },
  } = useForm();

  useFormPersist("form info", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const onSubmit = (data) => {
    console.log("form sumbited", data);

    const imageFromLocalStorage = dataURLToImage("image result");

    const trans = transformObject(data);
    const allData = { ...trans, ...{ image: imageFromLocalStorage } };

    console.log("allData", allData)

    axios({
      method: "post",
      url: "https://resume.redberryinternship.ge/api/cvs",
      data: allData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data);
        navigate("/success", { state: { data: response.data } });
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  const onError = (errors) => {
    setValue("educationDescription", watchForm.educationDescription, {
      shouldDirty: true,
    });
    setValue("institute_due_date", watchForm.institute_due, {
      shouldDirty: true,
    });
    setValue("institute", watchForm.institute, { shouldDirty: true });
  };

  const watchForm = watch();



  const addForm = () => {
    dispatch(resumeActions.addToEducation());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(degreeUrl);
        setFetchedSelectData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  

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
          <div className="flex justify-between mb-[60px] border-b-[1px] border-solid border-[#1A1A1A] pb-[12px]">
            <h1 className="font-bold text-xxl ">გამოცდილება</h1>
            <p className="text-[20px] text-[#1A1A1A]">2/3</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {/* map /////////////////////////////////////////////////////////// */}
            {educationFormCount?.map((form, index) => (
              <div key={index} className="">
                {/* სასწავლებელი /////////////////////// */}
                <div
                  className="flex flex-col mt-[13px] relative"
                  onChange={inputTriggerHandler}
                >
                  <label
                    className="font-bold mb-[8px]"
                    style={labelErrorStyling(
                      [`institute${index}`],
                      dirtyFields,
                      errors
                    )}
                  >
                    სასწავლებელი
                  </label>
                  <input
                    {...register(`institute${index}`, {
                      required: true,
                      minLength: 2,
                    })}
                    className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                    type="text"
                    placeholder="სასწავლებელი"
                    style={borderErrorStyling(
                      [`institute${index}`],
                      dirtyFields,
                      errors
                    )}
                  />
                  <p className="font-light text-sm text-dark">
                    მინიმუმ 2 სიმბოლო
                  </p>

                  {validationIcon([`institute${index}`], dirtyFields, errors)}
                </div>

                {/* ხარისხი  /////////////////////////////////// */}
                <div className="flex gap-[56px] mt-[77px] ">
                  {/* select ///////////////////////////////////////////// */}
                  <div className="relative">
                    <select
                    {...register(`degree_id${index}`, {required: true})}
                    
                      value={getValues(`degree_id${index}`)}
                      // onChange={(e) => selectChangeHandler(e, index)}
                      className="custom-select w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px] mt-[30px] "
                      style={borderErrorStyling(
                        [`degree_id${index}`],
                        dirtyFields,
                        errors
                      )}
                      
                    >
                      <option hidden className="select-selected opacity-60 text-xxl">
                        აირჩიეთ ხარისხი
                      </option>
                      {fetchedSelectData.map((item) => (
                        <option className="select-selected" key={item.title} value={item.id}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                    {dirtyFields[`degree_id${index}`] ? (
                      errors[`degree_id${index}`] ? (
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
                    className="flex flex-col relative"
                    onChange={inputTriggerHandler}
                  >
                    <label
                      className="font-bold mb-[8px]"
                      style={labelErrorStyling(
                        [`institute_due_date${index}`],
                        dirtyFields,
                        errors
                      )}
                    >
                      დამთავრების რიცხვი
                    </label>
                    <input
                      {...register(`institute_due_date${index}`, {
                        required: true,
                      })}
                      className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px] "
                      type="date"
                      style={borderErrorStyling(
                        [`institute_due_date${index}`],
                        dirtyFields,
                        errors
                      )}
                    />
                    {dirtyFields[`institute_due_date${index}`] ? (
                      errors[`institute_due_date${index}`] ? (
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
                  className="flex flex-col mt-[46px] relative"
                  onChange={inputTriggerHandler}
                >
                  <label
                    className="font-bold mb-[8px]"
                    style={
                      dirtyFields[`educationDescription${index}`]
                        ? errors[`educationDescription${index}`]
                          ? { color: "#E52F2F" }
                          : { color: "#000000" }
                        : { color: "#000000" }
                    }
                  >
                    აღწერა
                  </label>
                  <textarea
                    {...register(`educationDescription${index}`, {
                      required: true,
                    })}
                    className="border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px] box-border px-[16px] py-[13px]"
                    cols="30"
                    rows="3"
                    placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                    style={borderErrorStyling(
                      [`educationDescription${index}`],
                      dirtyFields,
                      errors
                    )}
                  ></textarea>
                  {dirtyFields[`educationDescription${index}`] ? (
                    errors[`educationDescription${index}`] ? (
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
                <div className="w-[798px] h-[1px] bg-[#C1C1C1] mt-[55px] mb-[34px]"></div>
              </div>
            ))}
            <button
              onClick={addForm}
              type="sumbit"
              className="font-medium text-white bg-[#62A1EB] rounded-[4px] w-[289px] h-[48px]  mt-[12px]"
            >
              სხვა სასწავლებლის დამატება
            </button>
            <div className="flex justify-between mt-[115px] mb-[65px]">
              <Link
                to="/experience"
                className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px] flex justify-center items-center "
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
      <Resume watchForm={watchForm} fetchedSelectData={fetchedSelectData}  />
    </div>
  );
};

export default Experience;
