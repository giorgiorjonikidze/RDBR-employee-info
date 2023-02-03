import backArrow from "../assets/images/back-arrow.svg";

const UserPage = () => {
  return (
    <div className="mt-[45px] ml-[48px]">
      {/* left section///////////  */}
      <section className="flex gap-[61px] mt-[]">
        <img className="self-start" src={backArrow} alt="" />
        <div className="w-[798px]">
          <div className="flex justify-between mb-[12px] border-b-[1px] border-solid border-[#1A1A1A] pb-[12px]">
            <h1 className="font-bold text-xxl ">პირადი ინფო</h1>
            <p className="text-[20px] text-[#1A1A1A]">1/3</p>
          </div>
          <form>
            <div className="flex gap-[56px] mt-[77px]">
              {/* სახელი ///////////////////  */}
              <div className="flex flex-col">
                <label className="font-bold mb-[8px]">სახელი</label>
                <input className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]" type="text" placeholder="ანზორ" />
                <p className="font-light text-sm text-dark">მინიმუმ 2 ასო, ქართული ასოები</p>
              </div>
              {/* გვარი /////////////////////////// */}
              <div className="flex flex-col">
                <label className="font-bold mb-[8px]">გვარი</label>
                <input className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"  type="text" placeholder="მელაძე" />
                <p className="font-light text-sm text-dark">მინიმუმ 2 ასო, ქართული ასოები</p>
              </div>
            </div>
            {/* ფაილის ატვირთვა //////////////////////////  */}
            <div className="mt-[46px]">
              <input type="file" />
            </div>
            <div className="flex flex-col mt-[46px]">
              <label className="font-bold mb-[8px]">ჩემ შესახებ (არასავალდებულო)</label>
              <textarea className="border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px]" cols="30" rows="3"></textarea>
            </div>
            {/* ელფოსტა ///////////////////////////////////////////// */}
            <div className="flex flex-col mt-[17px]">
              <label className="font-bold mb-[8px]">ელ.ფოსტა</label>
              <input className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey mb-[8px]"  type="text" placeholder="anzorr666@redberry.ge" />
              <p className="font-light text-sm text-dark">უნდა მთავრდებოდეს @redberry.ge-ით</p>
            </div>
            <div  className="flex flex-col mt-[13px]">
              <label className="font-bold mb-[8px]">მობილურის ნომერი</label>
              <input className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"  type="text" placeholder="+995 551 12 34 56" />
              <p className="font-light text-sm text-dark">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
            </div>
            <button className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px] float-right mt-[152px]">შემდეგი</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UserPage;
