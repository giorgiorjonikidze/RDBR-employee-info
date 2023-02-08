import emailIcon from "../assets/images/icon-email.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Resume = ({ watchForm, forms }) => {
  const getImage = localStorage.getItem("image");

  return (
    <div>
      <div className="ml-[200px] flex">
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
          {watchForm.email && (
            <div className="flex items-center gap-[10px] mb-[10px]">
              <img src={emailIcon} />
              <p className="text-xl text-dark_font ">{watchForm.email}</p>
            </div>
          )}
          {/* ტელეფონი ////////////////////////// */}

          {watchForm.phone && (
            <div className="flex items-center gap-[10px] mb-[34px]">
              <img src={phoneIcon} />
              <p className="text-xl text-dark_font">{watchForm.phone}</p>
            </div>
          )}
          {/* გამოცდილება/////////////  */}
          {watchForm.userInfo && (
            <div className="flex flex-col">
              <p className="font-bold text-xl text-red_font mb-[15px]">
                ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
              </p>
              <p>{watchForm.userInfo}</p>
            </div>
          )}
          <div className="mt-[50px]">
            <div>
              {(watchForm.position0 ||
                watchForm.start ||
                watchForm.finnish ||
                watchForm.end ||
                watchForm.employer ||
                watchForm.description) && (
                <p className="font-bold text-xl text-red_font mb-[15px]">
                  გამოცდილება
                </p>
              )}
            </div>
            {forms?.map((form, index) => (
              <div>
                <div className="w-[662px] h-[1px] bg-[#C8C8C8]"></div>
                <div className="mt-[50px]">
                  <div className="flex font-bold mb-[7px]">
                    <p className="">
                      {watchForm[`position${index}`]}
                    </p>
                    <p>{watchForm[`employer${index}`]}</p>
                  </div>
                  <div className="flex text-[#909090] mb-[16px]">
                    <p>{watchForm[`start${index}`]} </p>
                    <p>
                      
                       {watchForm[`finnish${index}`]}
                    </p>
                  </div>
                  <p className="w-[662px] mb-[19px]">
                 {watchForm[`description${index}`]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {getImage && (
            <img
              src={getImage}
              className="w-[246px] h-[246px] rounded-full object-cover flex-grow-1"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;