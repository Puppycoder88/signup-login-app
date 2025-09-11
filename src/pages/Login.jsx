import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { validUsername, validPassword } from "../utils/validation";
import Button from "../components/Button";

const Login =() => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};

    // Username validation
    if (!formData.username) {
      tempErrors.username = "Username is required.";
    } else if (!validUsername(formData.username)) {
      tempErrors.username = "Invalid username format.";
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required.";
    } else if (!validPassword(formData.password, formData.username)) {
      tempErrors.password =
        "Password must be valid and different from username.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login Data:", formData);
      alert("Login successful!");
      setFormData({ username: "", password: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="w-full max-w-lg bg-white rounded shadow-lg">
        {/* Header */}
        <div className="bg-teal-700 text-white text-center py-6 rounded-t">
          <h2 className="text-2xl font-mono">Login</h2>
          <p className="text-sm mt-1">Sign in to continue</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block text-xs text-gray-500 mb-1">USERNAME</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-teal-600 py-2 px-1"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-xs text-gray-500 mb-1">NEW PASSWORD</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-teal-600 py-2 px-1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-7 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
              >
                LOGIN
              </Button>
            </div>

            {/* Signup Redirect */}
            <p className="text-center text-sm">
              Don’t have Account?
              <a href="/signup" className="text-teal-700 font-medium hover:underline">
                SignUp
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;