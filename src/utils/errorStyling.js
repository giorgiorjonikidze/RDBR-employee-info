import errorIcon from "../assets/images/icon-error.svg";
import successIcon from "../assets/images/icon-success.svg";


export const labelErrorStyling = (item, dirtyFields, errors) => {
    if (dirtyFields[item]) {
      if (errors[item]) {
        return { color: "#E52F2F" };
      } else {
        return { color: "#000000" };
      }
    } else {
      return { color: "#000000" };
    }
  };

  export const borderErrorStyling = (item, dirtyFields, errors) => {
    if (dirtyFields[item]) {
      if (errors[item]) {
        return { borderColor: "#E52F2F" };
      } else {
        return { borderColor: "#98E37E" };
      }
    } else {
      return { borderColor: "#BCBCBC" };
    }
  };

  export const validationIcon = (item, dirtyFields, errors) => {
    if (dirtyFields[item]) {
      if (errors[item]) {
        return (
          <img
            src={errorIcon}
            className="w-[18px] h-[18px] absolute top-[47px] right-[-27px]"
          />
        );
      } else {
        return (
          <img
            src={successIcon}
            className="w-[18px] h-[18px] absolute top-[47px] right-[13px]"
          />
        );
      }
    } else {
      return "";
    }
  };