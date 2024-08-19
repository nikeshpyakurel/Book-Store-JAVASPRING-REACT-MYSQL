import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import back from "../img/back2.jpg";
import User from "../model/User";
import userService from "../service/user.service";
import { setCurrentUser } from "../store/action/user.action";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.user);

  useEffect(() => {
    if (loginUser?.id) {
      navigate("/");
    }
  }, [loginUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userService
      .login(login)
      .then((res) => {
        dispatch(setCurrentUser(res.data));
        if (res.data.role[0].id === 101) {
          navigate("/admin/home");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        setErrorMessage("Invalid email or password");
        console.error(error);
      });
  };

  return (

    <div
      className="container-fluid p-0 d-flex justify-content-center align-items-center"
      // style={{
      //   backgroundImage: `url(${back})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   minHeight: "100vh",
      // }}
      style={{marginTop:"100px"}}
    >
      <div className="col-md-4">
        <div className="card shadow-lg border-0">
          <div className="card-header text-white text-center py-3" style={{background:'#7448e3'}}>
            <h4 className="mb-0">Welcome Back!</h4>
          </div>
          <div className="card-body p-4">
            {errorMessage && (
              <div className="alert alert-danger mb-4" role="alert">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" style={{background:'#7448e3'}}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };