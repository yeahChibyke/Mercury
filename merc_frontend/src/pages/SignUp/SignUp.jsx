import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import { FiArrowLeft } from "react-icons/fi";
import AlertModal from "../../components/Modals/AlertModal";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
  const { user, signUp } = UserAuth();

  // Password visibility toggle state handler
  const [showPassword, setShowpassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //state for alert modal
  const [alert, setAlert] = useState(false);
  // state for mood of alertt modal, good news or bad news
  const [bad, setBad] = useState(false);

  // state for alert modal title and subtitle
  const [title, setTitle] = useState("");
  const [subtitle, setSubitle] = useState("");

  // Refs for password input fields for visibility toggle
  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  // navigation
  const navigate = useNavigate();

  //Form data state management
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirm: "",
  });

  // Toggle password visibility
  const togglePasswordVisibility = (ref) => {
    if (ref.current) {
      ref.current.type = ref.current.type === "password" ? "text" : "password";
    }
  };

  // Input change Handler
  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  // neecessary checks before trying to send formData to firebase
  const isAnyEmpty = Object.values(formData).some((value) => value === "");
  const areAllEmpty = Object.values(formData).every((value) => value === "");

  // On submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAnyEmpty || areAllEmpty) {
      setTitle("Error");
      setSubitle("fill all fields");
      setBad(true);
      errorAlert();
    } else if (formData.password.length < 8) {
      setTitle("Error");
      setSubitle("Password must be at least 8 characters long");
      setBad(true);
      errorAlert();
    } else if (
      !/\d/.test(formData.password) &&
      !/[!@#$%^&*(),.?":{}]|<>]/.test(formData.password) &&
      !/[A-Z]/.test(formData.password)
    ) {
      setTitle("Error");
      setSubitle(
        "must contain at least an uppercase, digit or a special character"
      );
      setBad(true);
      errorAlert();
    } else if (formData.password !== formData.confirm) {
      setTitle("Error");
      setSubitle("Please Cofirm Password");
      setBad(true);
      errorAlert();
    } else {
      // send data to wherever it's going here
      // console.log(formData);
      //
      registerUser();
    }
  };

  // register new user
  const registerUser = async (e) => {
    e?.preventDefault();
    try {
      await signUp(formData.email, formData.password);
      // Set user data in Firestore
      const userRef = doc(db, "users", formData.email);
      await setDoc(userRef, {
        username: formData.username,
        wallet: "",
      });
      setBad(false);
      setTitle("Account created");
      setSubitle("Logging you In...");
      handleAlert();
      setFormData({
        email: "",
        username: "",
        password: "",
        confirm: "",
      });
    } catch (error) {
      // console.log(error);
      setTitle("Error");
      setSubitle(error.message);
      setBad(true);
      errorAlert();
    }
  };

  // handle error alert
  const errorAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  // handle modal alert
  const handleAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
      navigate("/");
    }, 2000);
  };

  // password strenght
  const getPasswordStrength = (password) => {
    if (password !== "") {
      if (password.length < 8) {
        return "Weak";
      } else if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
        return "Strong";
      } else if (!/[!@#$%^&*(),.?":{}]|<>]/.test(password)) {
        return "Strong";
      } else {
        return "Very Strong";
      }
    }
  };

  // password strenght color
  const getPasswordStrengthColor = (password) => {
    if (password !== "") {
      if (password.length < 8) {
        return "red";
      } else if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
        return "orange";
      } else if (!/[!@#$%^&*(),.?":{}]|<>]/.test(password)) {
        return "orange";
      } else {
        return "limegreen";
      }
    }
  };

  return (
    <>
      <AlertModal
        title={title}
        subtitle={subtitle}
        classes={alert ? "show-modal" : ""}
      >
        {bad ? (
          <FaExclamationCircle size={32} color="red" />
        ) : (
          <FaCheckCircle size={32} color="limegreen" />
        )}
      </AlertModal>
      <div className="relative z-[10] w-full h-full">
        <div className="w-fit border-[2px] border-[#000] rounded-full absolute top-8 left-[4%]">
          <NavLink
            to="/"
            className={"flex justify-center items-center p-[0.5rem]"}
          >
            <FiArrowLeft size={20} /> <span className="font-[500]">Home</span>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-center pt-[5rem] md:pt-[10rem]">
          <p className="text-5xl font-[500] text-center mb-[2rem]">Sign Up</p>
          <form
            onSubmit={handleSubmit}
            className="w-[90%] rounded-xl max-w-[30rem] p-[2rem] flex flex-col justify-center items-center bg-[#000000a6] text-white"
          >
            <div className="w-full max-w-[40rem] mb-[0.5rem]">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter Email"
                autoComplete="on"
                value={formData.email}
                onChange={handleChange}
                className="text-black mt-[0.5rem] py-[0.5rem] px-[1rem] rounded-xl w-full"
              />
            </div>
            <div className="w-full max-w-[40rem] mb-[0.5rem]">
              <label htmlFor="username">Username:</label>
              <br />
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter Username"
                autoComplete="on"
                value={formData.username}
                onChange={handleChange}
                className="text-black mt-[0.5rem] py-[0.5rem] px-[1rem] rounded-xl w-full"
              />
            </div>
            <div className="w-full max-w-[40rem] mb-[0.5rem]">
              <label htmlFor="password">
                Password:{" "}
                <span
                  className="font-[600]"
                  style={{ color: getPasswordStrengthColor(formData.password) }}
                >
                  {getPasswordStrength(formData.password)}
                </span>
              </label>
              <br />
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleChange}
                  className="text-black mt-[0.5rem] py-[0.5rem] px-[1rem] rounded-xl w-full"
                />
                <div
                  className="absolute top-4 right-3 flex items-center cursor-pointer"
                  onClick={() => {
                    setShowpassword(!showPassword);
                    togglePasswordVisibility(passwordRef);
                  }}
                >
                  {showPassword ? (
                    <IoEyeOffOutline className="h-full w-6 text-black" />
                  ) : (
                    <IoEyeOutline className="h-full w-6 text-black" />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full max-w-[40rem] mb-[0.5rem]">
              <label htmlFor="confirm">Confirm Password:</label>
              <br />
              <div className="relative">
                <input
                  id="confirm"
                  name="confirm"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  autoComplete="off"
                  value={formData.confirm}
                  onChange={handleChange}
                  className="text-black mt-[0.5rem] py-[0.5rem] px-[1rem] rounded-xl w-full"
                />
                <div
                  className="absolute top-4 right-3 flex items-center cursor-pointer"
                  onClick={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                    togglePasswordVisibility(confirmRef);
                  }}
                >
                  {showConfirmPassword ? (
                    <IoEyeOffOutline className="h-full w-6 text-black" />
                  ) : (
                    <IoEyeOutline className="h-full w-6 text-black" />
                  )}
                </div>
              </div>
            </div>
            <div>
              <CustomButton
                title="Create Account"
                classes={"mt-[2rem] mb-[2rem]"}
                type={"submit"}
              />
            </div>
            <p>
              Already have an account?{" "}
              <NavLink to="/signin" className={"underline"}>
                Sign In
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
