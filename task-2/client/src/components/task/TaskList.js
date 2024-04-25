import { useState, useEffect} from "react";
import { Link } from "react-router-dom";


const TaskList = () =>{
const [taskList,setTaskList] = useState([])
const [error,setError] = useState('')
 
const fetchTasks = async () =>{
     try{
    let response = await fetch('http://localhost:8000/task')
    console.log('resp header',response)
    let {tasks} = await response.json()
    if(tasks.length){
        setTaskList(tasks)
    }
    else
        throw new Error('Something wrong with fetch data !') 
}catch(err){
    setError('Something wrong with fetch data !')
}
}

const handleDelete = async (e,id)=>{
   e.preventDefault();
    try{
       let response = await fetch(`http://localhost:8000/task/${id}`,{
        method:'DELETE'
       })
       let data = await response.json()
       if(data.success)
       fetchTasks() ;
    }catch(err){
        setError('Something wrong with delete task !')
    }
}

 useEffect(()=>{
    fetchTasks();
 },[])
  
    return(
        <>
        <div className=" flex  flex-wrap">
          {taskList.map((task) =>{
            return(
                <div key={task.id} className="flex-shrink-0 flex-wrap w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
       <div className="bg-white shadow-md rounded-lg p-4">

      
        <h2 className="text-lg font-semibold mb-2">{task.title}</h2>
        <p className="text-gray-700 mb-2">{task.description}</p>
        

        <div className="flex  justify-between align-bottom">
         <p className="text-gray-500 text-sm mb-2">{task.createdAt}</p>
          <button className=" flex justify-end  text-white font-bold py-2 px-4 rounded" onClick={(e) => handleDelete(e,task.id)}>
            <img  src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="delete" width={20} height={20} />
        </button>
       </div>

      </div>
    </div>
 
            )
          })}
          </div>
          <div className="flex justify-center font-extrabold text-2xl  mt-40">
             <Link to={'/add-task'}>Add Task</Link>
          </div>
          <div className="flex justify-center align-bottom text-red-500 mt-2">
          {error && <p>{error}</p>}
          </div>
        </>
    )
}

export default TaskList ;