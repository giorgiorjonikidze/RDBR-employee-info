const ExperienceForm = () => {
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* თანამდებობა /////////////////////// */}
      <div className="flex flex-col mt-[13px]">
        <label className="font-bold mb-[8px]">თანამდებობა</label>
        <input
          {...register("position", {
            required: true,
            pattrern: /^[ა-ჰ]{2,}$/,
          })}
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
          {...register("employer", {
            required: true,
            pattrern: /^[ა-ჰ]{2,}$/,
          })}
          className="h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey mb-[8px]"
          type="text"
          placeholder="დამსაქმებელი"
        />
        <p className="font-light text-sm text-dark">მინიმუმ 2 სიმბოლო</p>
      </div>
      {/* თარიღები  /////////////////////////////////// */}
      <div className="flex gap-[56px] mt-[77px]">
        {/* დაწყების რიცხვი ///////////////////  */}
        <div className="flex flex-col">
          <label className="font-bold mb-[8px]">დაწყების რიცხვი</label>
          <input
            {...register("start", {
              required: true,
            })}
            className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px]"
            type="date"
          />
        </div>
        {/* დამტავრების რიცხცი /////////////////////////// */}
        <div className="flex flex-col">
          <label className="font-bold mb-[8px]">დამთავრების რიცხვი</label>
          <input
            {...register("finnish", {
              required: true,
            })}
            className="w-[371px] h-[48px] px-[16px] py-[13px] border-grey border-[1px] border-solid rounded-[4px] focus:outline-[2px] focus:outline-grey  mb-[8px] "
            type="date"
          />
        </div>
      </div>
      {/* ფაილის ატვირთვა //////////////////////////  */}

      <div className="flex flex-col mt-[46px]">
        <label className="font-bold mb-[8px]">აღწერა</label>
        <textarea
          {...register("description", {
            required: true,
          })}
          className="border-[1px] border-solid border-grey focus:outline-[2px] focus:outline-grey rounded-[4px] box-border px-[16px] py-[13px]"
          cols="30"
          rows="3"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        ></textarea>
      </div>
      <div className="w-[798px] h-[1px] bg-[#C1C1C1] mt-[55px]"></div>
      <button
        type="sumbit"
        className="font-medium text-white bg-[#62A1EB] rounded-[4px] w-[289px] h-[48px]  mt-[45px]"
      >
        მეტი გამოცდილების დამატება
      </button>
      <div className="flex justify-between mt-[115px]">
        <button className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px]  ">
          უკან
        </button>
        <button className="font-medium text-white bg-purple rounded-[4px] w-[151px] h-[48px] ">
          შემდეგი
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;
