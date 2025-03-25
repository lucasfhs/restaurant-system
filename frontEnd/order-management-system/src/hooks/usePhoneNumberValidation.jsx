import { useState } from "react";

const usePhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filteredPhone, setFilteredPhone] = useState("");
  const [isValid, setIsValid] = useState(true);

  // const filterPhoneNumber = () => {
  //   setPhoneNumber(formatPhoneNumber());
  //   // Remove all non-digit characters
  //   setFilteredPhone(phoneNumber.replace(/\D/g, ""));
  // }

  const maskPhoneNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "");

    // Format the number as (XX) XXXXX-XXXX
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (!match) return cleaned;
  
    const [, areaCode, firstPart, secondPart] = match;
    if (secondPart) {
      return `(${areaCode}) ${firstPart}-${secondPart}`;
    } else if (firstPart) {
      return `(${areaCode}) ${firstPart}`;
    } else if (areaCode) {
      return `(${areaCode}`;
    }
    return "";
  };

  const validatePhoneNumber = (value) => {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(value);
  };

  // const handlePhoneNumberChange = (number) => {
  //   setFilteredPhone(number.replace(/\D/g, ""));
  //   setPhoneNumber(formatPhoneNumber(number));
  //   setIsValid(validatePhoneNumber());
  //   return ;
  // };

  const formatPhoneNumber = (value) => {
    return value.replace(/\D/g, "");
  };

  return { maskPhoneNumber, validatePhoneNumber, formatPhoneNumber };
};

export default usePhoneNumberValidation;
