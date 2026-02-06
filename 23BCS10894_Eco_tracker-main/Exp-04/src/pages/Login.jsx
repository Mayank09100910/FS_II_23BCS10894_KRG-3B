import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 px-4">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
          EcoTrack
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Track and reduce your carbon footprint 🌍
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition shadow"
        >
          Login
        </button>

        <p className="text-xs text-center text-gray-400 mt-4">
          Demo login (no password required)
        </p>

      </div>
    </div>
  );
};

export default Login;
