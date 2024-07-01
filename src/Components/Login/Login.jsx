import { useContext, useState } from "react";
import { Helmet } from 'react-helmet';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { googleLogin, gitHubLogin, login, loading } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const handleEmailLogin = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {
            await login(email.value, password.value);
            toast.success("User login successful. Please wait for a few seconds...");
            const destination = location.state?.from || '/';
            setTimeout(() => {
                navigate(destination);
            }, 5000);
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("User logged in successfully with Google. Please wait for a few seconds...");
                const destination = location.state?.from || '/';
                setTimeout(() => {
                    navigate(destination);
                }, 5000);
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            });
    };

    const handleGitHubLogin = () => {
        gitHubLogin()
            .then(() => {
                toast.success("User logged in successfully with GitHub. Please wait for a few seconds...");
                const destination = location.state?.from || '/';
                setTimeout(() => {
                    navigate(destination);
                }, 5000);
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            });
    };

    return (
        <div className="flex justify-center items-center h-screen mt-20">
            <Helmet>
                <title>ExpolreAsia || Login</title>
            </Helmet>
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
                <form onSubmit={handleEmailLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 pr-10"
                            placeholder="Enter your password"
                            name="password"
                            required
                        />
                        <button type="button" className="absolute inset-y-0 right-0 mt-6 px-3 py-2" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button type="submit" className="w-full bg-[#63AB45] text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-[#62c439]">Sign In</button>
                </form>
                <div className="mt-4">
                    <p className="text-sm text-gray-600">Or sign in with</p>
                    <div className="flex mt-2">
                        <button onClick={handleGoogleLogin} className="w-1/2 bg-[#63AB45] text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none">Google</button>
                        <button onClick={handleGitHubLogin} className="w-1/2 bg-gray-800 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none">GitHub</button>
                    </div>
                    <p className="text-sm mt-2 text-gray-600">New to this site? Please <Link className="text-blue-600 hover:underline" to={"/signup"}>Register</Link> </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
