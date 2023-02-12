import emailIcon from "../assets/images/icon-email.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import backArrow from "../assets/images/back-arrow.svg";
import X from "../assets/images/X.svg";
import bottomLogo from "../assets/images/bottom-logo.svg";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const [popupIsVisible, setPopupIsVisible] = useState(true);

  const location = useLocation();
  const formData = location.state.data;

  const navigate = useNavigate();

  const closePopupHandler = () => {
    setPopupIsVisible(false);
  };

  const returnToHomeHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex box-border px-[80px] py-[68px] border-solid border-[0.8px] border-black mt-[54px] ml-[549px]">
      <button
        onClick={returnToHomeHandler}
        className="absolute left-[48px] top-[45px]"
      >
        <img src={backArrow} />
      </button>
      {popupIsVisible && (
        <div className="shadow-extra-large w-[427px] h-[167px] rounded-[8px] pt-[39px] pl-[30px] border-solid border-[1px] border-[#e4e4e4] absolute left-[1423px] top-[53px] ">
          <button
            onClick={closePopupHandler}
            className="absolute top-[17px] right-[11px] cursor-pointer"
          >
            <img src={X} />
          </button>
          <p className="font-medium text-[28px] ">
            რეზიუმე წარმატებით გაიგზავნა 🎉
          </p>
        </div>
      )}
      <div className="flex flex-col justify-between">
        <div className="w-[423px] flex flex-col">
          {/* სახელი გვარი ///////////////////////// */}
          <div className="flex gap-[20px] mb-[17px]">
            <p className="font-bold text-red_font text-[34px] ">
              {formData.name}
            </p>
            <p className="font-bold text-red_font text-[34px] ">
              {formData.surname}
            </p>
          </div>
          {/* იმეილი ///////////////////////////  */}
          <div className="flex items-center gap-[10px] mb-[10px]">
            <img src={emailIcon} />
            <p className="text-xl text-dark_font ">{formData.email}</p>
          </div>
          {/* ტელეფონი ////////////////////////// */}
          <div className="flex items-center gap-[10px] mb-[34px]">
            <img src={phoneIcon} />
            <p className="text-xl text-dark_font">{formData.phone_number}</p>
          </div>
          {/* გამოცდილება/////////////  */}
          <div className="flex flex-col">
            <p className="font-bold text-xl text-red_font mb-[15px] ">
              ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
            </p>
            <p>{formData.about_me}</p>
          </div>
          <div className="w-[662px] h-[1px] bg-[#C8C8C8] mt-[19px]"></div>
          <div className="mt-[24px]">
            <div>
              <p className="font-bold text-xl text-red_font mb-[15px]">
                ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ
              </p>
            </div>
            {formData.experiences.map((item, index) => (
              <div key={index}>
                <div className="mt-[15px]">
                  <div className="flex font-bold mb-[7px]">
                    <p className="mr-[5px]">{formData.position}</p>
                    <p>{item.employer}</p>
                  </div>
                  <div className="flex text-[#909090] mb-[16px]">
                    <p>{item.start_date} </p>
                    <p>{item.due_date}</p>
                  </div>
                  <p className="w-[662px] mb-[19px]">{item.description}</p>
                </div>
                <div className="w-[662px] h-[0.5px] bg-[#C8C8C8] mt-[19px]"></div>
              </div>
            ))}
          </div>
          <div>
            <div>
              <p className="font-bold text-xl text-red_font mb-[15px] mt-[24px]">
                ᲒᲐᲜᲐᲗᲚᲔᲑᲐ
              </p>
            </div>
            {formData.educations.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="flex font-bold mb-[7px]">
                    <p className="mr-[5px]">
                      {item.institute}
                      {""}
                      {item.degree}
                    </p>
                  </div>
                  <div className="flex text-[#909090] mb-[16px]">
                    <p>{item.due_date}</p>
                  </div>
                  <p className="w-[662px] mb-[19px]">{item.description}</p>
                </div>
                <div className="w-[662px] h-[0.5px] bg-[#C8C8C8] mt-[19px]"></div>
              </div>
            ))}
          </div>
        </div>
        <img src={bottomLogo} className="w-[42px] mt-[50px]" />
      </div>
      <div>
        <img
          src={"https://resume.redberryinternship.ge" + formData.image}
          className="w-[246px] h-[246px] rounded-full object-cover flex-grow-1"
        />
      </div>
    </div>
  );
};

export default SuccessPage;
