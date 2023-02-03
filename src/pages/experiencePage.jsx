import backArrow from "../assets/images/back-arrow.svg";

const Experience = () => {
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
            {/* თანამდებობა /////////////////////// */}
            <div className="flex flex-col mt-[13px]">
              <label className="font-bold mb-[8px]">თანამდებობა</label>
              <input
                className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                type="text"
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
              />
              <p className="font-light text-sm text-dark">მინიმუმ 2 სიმბოლო</p>
            </div>
            {/* დამსაქმებელი ///////////////////////////////////////////// */}
            <div className="flex flex-col mt-[17px]">
              <label className="font-bold mb-[8px]">დამსაქმებელი</label>
              <input
                className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey mb-[8px]"
                type="text"
                placeholder="anzorr666@redberry.ge"
              />
              <p className="font-light text-sm text-dark">მინიმუმ 2 სიმბოლო</p>
            </div>
            {/* თარიღები  /////////////////////////////////// */}
            <div className="flex gap-[56px] mt-[77px]">
              {/* დაწყების რიცხვი ///////////////////  */}
              <div className="flex flex-col">
                <label className="font-bold mb-[8px]">დაწყების რიცხვი</label>
                <input
                  className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                  type="date"
                />
              </div>
              {/* დამტავრების რიცხცი /////////////////////////// */}
              <div className="flex flex-col">
                <label className="font-bold mb-[8px]">დამთავრების რიცხვი</label>
                <input
                  className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
                  type="data"
                />
              </div>
            </div>
            {/* ფაილის ატვირთვა //////////////////////////  */}
            
            <div className="flex flex-col mt-[46px]">
              <label className="font-bold mb-[8px]">
                აღწერა
              </label>
              <textarea
                className="border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px]"
                cols="30"
                rows="3"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              ></textarea>
            </div>

            <button className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px] float-right mt-[152px]">
              შემდეგი
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Experience;
