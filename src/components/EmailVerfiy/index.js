import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../images/successImg.png";
import { Fragment } from "react";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `https://gamingo-backend.onrender.com/api/users/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <Fragment>
      {validUrl ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6">
          <img
            src={success}
            alt="success_img"
            className="w-32 h-32 mb-4" // Tailwind classes for size and margin
          />
          <h1 className="text-3xl font-semibold text-green-600 mb-4">
            Email verified successfully
          </h1>
          <Link to="/login">
            <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-200">
              Login
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-3xl font-semibold text-red-600">404 Not Found</h1>
        </div>
      )}
    </Fragment>
  );
};

export default EmailVerify;
