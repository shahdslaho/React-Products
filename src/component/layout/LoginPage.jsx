import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const loginData = {
        username: 'emilys',    // استخدام القيمة من حقل الإدخال
        password:'emilyspass',     // استخدام القيمة من حقل الإدخال
      };

      console.log('Sending credentials:', loginData);

      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });
  
      const data = await response.json();
      console.log('Server Response:', data);
  
      if (data.accessToken) {  // تغيير التحقق ليكون على accessToken
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data));
        console.log('تم تسجيل الدخول بنجاح');
        navigate("/");
      } else {
        setError(data.message || 'فشل تسجيل الدخول');
      }
    } catch (error) {
      console.error('تفاصيل الخطأ:', error);
      setError('حدث خطأ في الاتصال');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* القسم الأيسر - الصورة والترحيب */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600 p-32 text-white">
        <div className="mt-auto">
          <h2 className="text-3xl font-bold mb-3">Welcome Back</h2>
          <p className="text-base">Sign in to continue your journey with us</p>
        </div>
      </div>

      {/* القسم الأيمن - نموذج تسجيل الدخول */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Sign in to your account</h1>
          </div>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-50"
                placeholder="emilys@gmail.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-50"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign in
            </button>

            <div className="mt-6 text-center text-sm text-gray-600">
              <span>Or continue with</span>
              <div className="flex justify-center gap-4 mt-4">
                <button className="p-2 border rounded-lg hover:bg-gray-50">
                  <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 text-blue-400" />
                </button>
                <button className="p-2 border rounded-lg hover:bg-gray-50">
                  <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-gray-800" />
                </button>
                <button className="p-2 border rounded-lg hover:bg-gray-50">
                  <FontAwesomeIcon icon={faGoogle} className="w-6 h-6 text-red-500" />
                </button>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
