import { useContext, useState,useEffect } from "react";
import { Login } from "./components/Auth/Login";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./components/context/AuthProvider";
import { setLocalStorage } from "./components/utils/localStorage";


function App() {
  // setLocalStorage()
  

 
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext);
  useEffect(()=>{
 const loggedInUser = localStorage.getItem('loggedInUser')
 if(loggedInUser){
  const userData =JSON.parse(loggedInUser)
  setUser(userData.role)
  setloggedInUserData(userData.data)
 }
    

  },[])


 

 const handleLogin = (email, password) => {
  
  if (email === "admin@me.com" && password === "123") {
    setUser("admin");
   localStorage.setItem("loggedInUser",JSON.stringify({ role: "admin" }) );
   toast.success("Logged in successfully!");
    return;
  }
if (authData) {
  const employee = authData.employees.find( (e) => e.email === email && e.password === password );

if (employee) {
      setUser("employee");
      setloggedInUserData(employee);
      localStorage.setItem("loggedInUser",JSON.stringify({role: "employee",data: employee,}));
toast.success("Logged in successfully!");
return;
    }
  }
toast.error("Invalid email or password");
};


  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}  />: null)}
    </>
  );
}

export default App;
