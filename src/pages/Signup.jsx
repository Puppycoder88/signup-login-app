import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  validName,
  validUsername,
  validPassword,
  validConfirmPassword,
  validEmail,
  validPhone,
} from "../utils/validation";
import Button from "../components/Button";

const Signup =() => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};

    if (!validName(formData.name)) {
      tempErrors.name = "Name must only contain alphabets.";
    }

    if (!validUsername(formData.username)) {
      tempErrors.username =
        "Username must be alphanumeric and can include . _ -";
    }

    if (!validEmail(formData.email)) {
      tempErrors.email = "Only valid Gmail addresses allowed.";
    }

    if (!validPhone(formData.phone)) {
      tempErrors.phone =
        "Phone must include country code (e.g., +91XXXXXXXXXX)";
    }

    if (!validPassword(formData.password, formData.username)) {
      tempErrors.password =
        "Password must be alphanumeric with . _ - and not equal to username.";
    }

    if (!validConfirmPassword(formData.password, formData.confirmPassword)) {
      tempErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Account created successfully!");
      setFormData({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="w-full max-w-2xl bg-white rounded shadow-lg">
        {/* Header */}
        <div className="bg-teal-700 text-white text-center py-4 rounded-t">
          <h2 className="text-lg font-medium">Create new Account</h2>
        </div>

        {/* Form */}
        <div className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-teal-600 py-2 px-1"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="USERNAME"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-teal-600 py-2 px-1"
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-teal-600 py-2 px-1"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE NO."
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-teal-600 py-2 px-1"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>

            {/* Row 3 (Passwords with labels) */}
            <div className="grid grid-cols-2 gap-6">
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
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div className="relative">
                <label className="block text-xs text-gray-500 mb-1">CONFIRM NEW PASSWORD</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-teal-600 py-2 px-1"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-7 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
              >
                SIGN UP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Signup;