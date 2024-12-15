import { Link } from "react-router-dom";
import Logo from "../assets/fpfk.png"

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div>
        <img src={Logo} alt="Logo" className="w-20 h-20 mt-4" />
      </div>
      <h1 className="text-center text-lg font-medium">Enter your username:</h1>
      <input
        type="text"
        placeholder="Enter your username"
        className="p-2 border rounded"
      />
      <h1 
      className="text-lg font-medium">
        Password:
        </h1>
      <input
        type="password"
        placeholder="Enter your Password"
        className="p-2 border rounded"
      />
      <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
        Login
      </button>
     <div className="flex items-center mt-4 space-x-2">
      <h1>
      Don't have an account ?
      </h1>
     <Link to="/register" className="text-blue-500">
        Register
      </Link>
     </div>
    </div>
  );
};

export default Login;
