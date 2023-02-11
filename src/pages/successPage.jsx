import emailIcon from "../assets/images/icon-email.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();

  const formData = location.state.data;
console.log(formData);
  return (
    <div>
      <div className="ml-[200px] flex">
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
          {formData.email && (
            <div className="flex items-center gap-[10px] mb-[10px]">
              <img src={emailIcon} />
              <p className="text-xl text-dark_font ">{formData.email}</p>
            </div>
          )}
          {/* ტელეფონი ////////////////////////// */}

          {formData.phone_number && (
            <div className="flex items-center gap-[10px] mb-[34px]">
              <img src={phoneIcon} />
              <p className="text-xl text-dark_font">{formData.phone_number}</p>
            </div>
          )}
          {/* გამოცდილება/////////////  */}
          {formData.about_me && (
            <div className="flex flex-col">
              <p className="font-bold text-xl text-red_font mb-[15px]">
                ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
              </p>
              <p>{formData.about_me}</p>
            </div>
          )}
          <div className="mt-[50px]">
            <div>
              
                <p className="font-bold text-xl text-red_font mb-[15px]">
                  გამოცდილება
                </p>
              
            </div>
            {formData.experiences.map((item) => (
              <div>
                {/* <div className="w-[662px] h-[1px] bg-[#C8C8C8]"></div> */}
                <div className="mt-[50px]">
                  <div className="flex font-bold mb-[7px]">
                    <p className="mr-[5px]">{formData.position}</p>
                    <p>{item.employer}</p>
                  </div>
                  <div className="flex text-[#909090] mb-[16px]">
                    <p>{item.start_date} </p>
                    <p>{item.due_date}</p>
                  </div>
                  <p className="w-[662px] mb-[19px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {formData.educations.map((item) => (
              <div>
                {/* <div className="w-[662px] h-[1px] bg-[#C8C8C8]"></div> */}
                <div className="mt-[50px]">
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
                  <p className="w-[662px] mb-[19px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          
            <img
              src={"https://resume.redberryinternship.ge"+ formData.image}
              className="w-[246px] h-[246px] rounded-full object-cover flex-grow-1"
            />
          
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
