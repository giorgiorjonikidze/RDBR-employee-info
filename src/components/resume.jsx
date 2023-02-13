import emailIcon from "../assets/images/icon-email.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import bottomLogo from "../assets/images/bottom-logo.svg";

import { useSelector } from "react-redux";

const Resume = ({ watchForm, imageUploaded }) => {
  const getImage = localStorage.getItem("image result");

  const expCount = useSelector((state) => state.experienceFormCount);
  const eduCount = useSelector((state) => state.eduCationFormCount);

  return (
    <div>
      <div className="ml-[200px] flex">
        <div className="w-[423px] flex flex-col">
          {/* სახელი გვარი ///////////////////////// */}
          <div className="flex gap-[20px] mb-[17px] flex-wrap">
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

          {watchForm.phone_number && (
            <div className="flex items-center gap-[10px] mb-[34px]">
              <img src={phoneIcon} />
              <p className="text-xl text-dark_font">{watchForm.phone_number}</p>
            </div>
          )}
          {/* გამოცდილება/////////////  */}
          {watchForm.about_me && (
            <div className="flex flex-col">
              <p className="font-bold text-xl text-red_font mb-[15px]">
                ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
              </p>
              <p>{watchForm.about_me}</p>
              <div className="w-[662px] h-[0.5px] bg-[#C8C8C8] mt-[19px]"></div>
            </div>
          )}

          {/* experience ////////////////////////////////////////////////////  */}
          {/* experience ////////////////////////////////////////////////////  */}

          <div>
            <div className="mt-[24px] mb-[15px]">
              {(watchForm.position0 ||
                watchForm.start_date0 ||
                watchForm.due_date0 ||
                watchForm.employer0 ||
                watchForm.description0) && (
                <p className="font-bold text-xl text-red_font mb-[15px]">
                  ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ
                </p>
              )}
            </div>
            {expCount?.map((form, index) => (
              <div key={index}>
                <div className="mt-[15px]">
                  <div className="flex font-bold mb-[7px]">
                    <p>{watchForm[`position${index}`]}</p>
                    {watchForm[`employer${index}`] &&
                    watchForm[`position${index}`] &&
                    watchForm[`position${index}`][
                      watchForm[`position${index}`]?.length - 1
                    ] != "," ? (
                      <p className="mr-[4px]">,</p>
                    ) : (
                      <p className="mr-[4px]"></p>
                    )}
                    <p>{watchForm[`employer${index}`]}</p>
                  </div>
                  <div className="flex text-[#909090] mb-[16px]">
                    <p className="mr-[4px]">
                      {watchForm[`start_date${index}`]}{" "}
                    </p>
                    {watchForm[`due_date${index}`] && "-"}
                    <p className="ml-[4px]">{watchForm[`due_date${index}`]}</p>
                  </div>
                  <p className="w-[662px] mb-[19px]">
                    {watchForm[`description${index}`]}
                  </p>
                </div>
                {(watchForm[`position${index}`] ||
                  watchForm[`start_date${index}`] ||
                  watchForm[`due_date${index}`] ||
                  watchForm[`employer${index}`] ||
                  watchForm[`description${index}`]) && (
                  <div className="w-[662px] h-[0.5px] bg-[#C8C8C8] mt-[32px]"></div>
                )}
              </div>
            ))}
          </div>
          <div>
            {/* education ////////////////////////////////////////////// */}
            {/* education ////////////////////////////////////////////// */}
            <div>
              <div className="mt-[24px] mb-[15px]">
                {(watchForm.institute0 ||
                  watchForm.institute_due_date0 ||
                  watchForm.educationDescription0 ||
                  watchForm.degree0) && (
                  <p className="font-bold text-xl text-red_font mb-[15px]">
                    ᲒᲐᲜᲐᲗᲚᲔᲑᲐ
                  </p>
                )}
              </div>
              {eduCount?.map((form, index) => (
                <div key={index}>
                  <div className="mt-[15px]">
                    <div className="flex font-bold mb-[7px]">
                      <p>{watchForm[`institute${index}`]}</p>
                      {watchForm[`degree${index}`] &&
                      watchForm[`institute${index}`] &&
                      watchForm[`institute${index}`][
                        watchForm[`institute${index}`]?.length - 1
                      ] != "," ? (
                        <p className="mr-[4px]">,</p>
                      ) : (
                        <p className="mr-[4px]"></p>
                      )}
                      <p>{watchForm[`degree${index}`]}</p>
                    </div>
                    <div className="flex text-[#909090] mb-[16px]">
                      <p>{watchForm[`institute_due_date${index}`]}</p>
                    </div>
                    <p className="w-[662px] mb-[19px]">
                      {watchForm[`educationDescription${index}`]}
                    </p>
                  </div>
                  {(watchForm[`institute${index}`] ||
                    watchForm[`degree${index}`] ||
                    watchForm[`institute_due_date${index}`] ||
                    watchForm[`educationDescription${index}`]) && (
                    <div className="w-[662px] h-[0.5px] bg-[#C8C8C8] mt-[32px]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* <img src={bottomLogo} className="w-[42px] mt-[50px]" /> */}
        </div>
        <div>
          {getImage ? (
            <img
              src={getImage}
              className="w-[246px] h-[246px] max-w-[246px] rounded-full object-cover flex-grow-1"
              id="localstorage"
            />
          ) : (
            <img
              id="stateimg"
              src={imageUploaded}
              className="w-[246px] h-[246px] max-w-[246px] rounded-full object-cover flex-grow-1"
              style={
                !imageUploaded
                  ? getImage
                    ? { display: "block" }
                    : { display: "none" }
                  : getImage
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
