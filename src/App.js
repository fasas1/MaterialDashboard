import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px,_1fr]">   
       <Sidebar/>
       <Dashboard/> 
    </div>
  );
} 

export default App;
