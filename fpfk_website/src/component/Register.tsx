import { Link } from "react-router-dom";

const Register = () => {
  return (
<div className="flex flex-col items-center justify-center h-screen space-y-4">
<h1 className="text-center text-lg font-medium">Email:</h1>
<input
  type="text"
  placeholder="Enter your username"
  className="p-2 border rounded"
/>
<h1 
className="text-lg font-medium ">
  Password:
  </h1>
<input
  type="password"
  placeholder="Enter your Password"
  className="p-2 border rounded"
/>
<button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
  Register
</button>
<div className="flex items-center mt-4 space-x-2">
<h1>
Don't have an account ?
</h1>

 <Link to="/login" className="text-blue-500">
    <h1>Login</h1>
   </Link>
</div>
</div>
  );
};

export default Register;
