import { useState } from "react";
import {useNavigate} from "react-router-dom"

const AddTask = () =>{
 const [task,setTask] = useState({title:'',description:''})
 const [error,setError] = useState('')

 const navigate = useNavigate();
 const handleChange =  (e)=>{
    setTask({...task,[e.target.name]:e.target.value})
    setError('')
}

const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        let response = await fetch(`http://localhost:8000/task`,{
         method:'POST',
         body:JSON.stringify(task),
         headers: {'Content-Type' : 'application/json'}
        })
        let data = await response.json();
        if(data.success){
            navigate('/')
        }else
        throw new Error('Something wrong with post task !')
     }catch(err){
         setError('Something wrong with post task !')
     }
    setTask({title:'',description:''})
  
}
    return(
        <>
        <div className={`flex justify-center items-center h-screen`}>
        <form className={` shadow-md  rounded-lg px-8 pt-6 pb-8 mb-4 w-96`} onSubmit={handleSubmit}>
          
          <h2 className="text-3xl font-bold mb-6 text-center"> Add Task </h2>
        
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="title">
             Title
            </label>
            <input
              className="shadow  appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline "
              name="title"
              type="text"
              placeholder="Title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              type="text"
              placeholder="Description"
              value={task.description}
              onChange={handleChange}
            />
          </div>
    
          
          <div className="flex flex-col items-center justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
             Add
            </button>
          </div>
          <div className='mt-4'>
          {error && <p className='text-red-500 mt-2'>{error}</p>}
          </div>
         
        </form>
      </div>
    )
        </>
    )
}

export default AddTask ;