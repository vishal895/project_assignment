import React, { useEffect, useRef, useState } from 'react';

const Loginotp = () => {
  const otpbox = 4;
  const [inputValue, setInputValue] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(new Array(otpbox).fill(""));

  const refvalue = useRef([])

  
  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return; 
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

   if (value !== "" && index < otpbox - 1) {
      refvalue.current[index + 1]?.focus();
    }
  };

useEffect(() => {
  if (showOtp) {
    refvalue.current[0]?.focus();
  }
}, [showOtp]);

const handlekeydown  =(e,index)=>{
    if(!e.target.value && e.key === "Backspace"){
         refvalue.current[index - 1]?.focus();
    }

}


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!showOtp ? (
        <>
          <h3>Enter Phone Number</h3>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter phone number"
          />
          <br />
          <button onClick={() => setShowOtp(true)}>Send OTP</button>
        </>
      ) : (
        <div>
          <h3>Enter OTP</h3>
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              maxLength={1}
              ref={(input) => (refvalue.current[index] = input)}
              onKeyDown={(e)=> handlekeydown(e,index)}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              style={{ width: "40px", margin: "5px", textAlign: "center" }}
            />
          ))}
          <br />
          <button onClick={() => alert(`Entered OTP: ${otp.join("")}`)}>
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default Loginotp;
