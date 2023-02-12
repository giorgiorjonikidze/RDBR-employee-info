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

const Experience = () => {
  const degreeUrl = "https://resume.redberryinternship.ge/api/degrees";
  const educationFormCount = useSelector((state) => state.eduCationFormCount);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxImage = useSelector((state) => state.image);

  const [fetchedSelectData, setFetchedSelectData] = useState([]);
  const [selected, setSelected] = useState("");
  const [invalidSelect, setInvalidSelect] = useState(true);
  const [selectIsTuched, setSelectIsTuched] = useState(false);

  const validateSelect = () => {
    if (selected === "") {
      return true;
    }
    return false;
  };

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

  const onSubmit = (data) => {
    // console.log("form sumbited", data);
    const selectError = validateSelect();
    setSelectIsTuched(true);

    const imageFromLocalStorage = dataURLToImage("image result");

    const trans = transformObject(data, selected);
    const allData = { ...trans, ...{ image: imageFromLocalStorage } };

    console.log("allData", allData);

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
    console.log(" form errors", errors);
    setValue("educationDescription", watchForm.educationDescription, {
      shouldDirty: true,
    });
    setValue("institute_due_date", watchForm.institute_due, {
      shouldDirty: true,
    });
    setValue("institute", watchForm.institute, { shouldDirty: true });
    const selectError = validateSelect();
    console.log("select error", selectError);
    setSelectIsTuched(true);
  };

  const watchForm = watch();

  const addForm = () => {
    dispatch(resumeActions.addToEducation());
  };

  useEffect(() => {
    axios(degreeUrl)
      .then((response) =>
        setFetchedSelectData(
          response.data.map((item) => (
            <option key={item.title} value={item.id}>
              {item.title}
            </option>
          ))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const selectChangeHandler = (e) => {
    const { value } = e.target;
    setSelected(value);
    console.log(value);
    setInvalidSelect(false);
    setSelectIsTuched(true);

    setSelected(value);
    localStorage.setItem("selectedValue", value);
  };

  useEffect(() => {
    const value = localStorage.getItem("selectedValue");
    if (value) {
      setSelected(value);
      setInvalidSelect(false);
      setSelectIsTuched(true);
    }
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
                    style={
                      dirtyFields[`institute${index}`]
                        ? errors[`institute${index}`]
                          ? { color: "#E52F2F" }
                          : { color: "#98E37E" }
                        : { color: "#000000" }
                    }
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
                    style={
                      dirtyFields[`institute${index}`]
                        ? errors[`institute${index}`]
                          ? { borderColor: "#E52F2F" }
                          : { borderColor: "#98E37E" }
                        : { borderColor: "#BCBCBC" }
                    }
                  />
                  <p className="font-light text-sm text-dark">
                    მინიმუმ 2 სიმბოლო
                  </p>
                  {dirtyFields[`institute${index}`] ? (
                    errors[`institute${index}`] ? (
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

                {/* ხარისხი  /////////////////////////////////// */}
                <div className="flex gap-[56px] mt-[77px] ">
                  {/* select ///////////////////////////////////////////// */}
                  <div className="relative">
                    <select
                      value={selected}
                      onChange={selectChangeHandler}
                      className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px] mt-[30px] "
                      style={
                        selectIsTuched
                          ? invalidSelect
                            ? { borderColor: "#E52F2F" }
                            : { borderColor: "#98E37E" }
                          : { borderColor: "#BCBCBC" }
                      }
                    >
                      <option hidden className="opacity-60 text-xxl">
                        აირჩიეთ ხარისხი
                      </option>
                      {fetchedSelectData}
                    </select>
                    {selectIsTuched ? (
                      invalidSelect ? (
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
                      style={
                        dirtyFields[`institute_due_date${index}`]
                          ? errors[`institute_due_date${index}`]
                            ? { color: "#E52F2F" }
                            : { color: "#98E37E" }
                          : { color: "#000000" }
                      }
                    >
                      დამთავრების რიცხვი
                    </label>
                    <input
                      {...register(`institute_due_date${index}`, {
                        required: true,
                      })}
                      className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px] "
                      type="date"
                      style={
                        dirtyFields[`institute_due_date${index}`]
                          ? errors[`institute_due_date${index}`]
                            ? { borderColor: "#E52F2F" }
                            : { borderColor: "#98E37E" }
                          : { borderColor: "#BCBCBC" }
                      }
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
                          : { color: "#98E37E" }
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
                    style={
                      dirtyFields[`educationDescription${index}`]
                        ? errors[`educationDescription${index}`]
                          ? { borderColor: "#E52F2F" }
                          : { borderColor: "#98E37E" }
                        : { borderColor: "#BCBCBC" }
                    }
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
              <Link to="/experience" className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px] flex justify-center items-center ">
                უკან
              </Link>
              <button type="submit" className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px] ">
                შემდეგი
              </button>
            </div>
          </form>
        </div>
      </section>
      <Resume watchForm={watchForm} selected={selected} />
    </div>
  );
};

export default Experience;
