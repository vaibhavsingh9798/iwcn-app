import {Routes,Route} from "react-router-dom"
import AddTask from  "./components/task/AddTask";
import TaskList from "./components/task/TaskList";
import Navbar from "./components/layout/Navbar";


function App() {

  return ( 
   <>
   <Navbar />
   <div className=" bg-green-300  h-screen    max-h-screen ">
   <Routes >
    <Route path='/' element={ <TaskList />} />
    <Route path='/add-task' element={   <AddTask />} />
   </Routes>
   </div>
  </>

  );

}

export default App;
