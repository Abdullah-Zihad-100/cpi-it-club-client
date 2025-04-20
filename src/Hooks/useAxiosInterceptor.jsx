import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth"; 
import { axiosSecure } from "../Apis/axios";

const useAxiosInterceptor = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut(); // logout from firebase
          navigate("/login"); // redirect to login
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosInterceptor;
