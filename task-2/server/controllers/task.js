const Task  = require('../models/task')


const postTask = async (req,res) =>{
   const {title,description,time} = req.body;

   try{
        let response = await Task.create({title,description,time});
        return res.status(201).json({success:true,message:'Task Created'})
   }catch(err){
     return res.status(500).json({success:false,message:'Server Internal Error'})
   }
}

const getTask = async (req,res) =>{

    try{
         let tasks = await Task.findAll();
         return res.status(200).json({success:true,tasks})
    }catch(err){
      return res.status(500).json({success:false,message:'Server Internal Error'})
    }

}

const deleteTask = async (req,res) =>{
   const id = req.params.id;

    try{
        const task = await Task.findByPk(req.params.id);
        if (!task) {
          return res.status(404).json({ success:false,message: 'Task not found' });
        }
        await task.destroy();
         return res.status(200).json({success:true,message:'Task Deleted'})
    }catch(err){
      return res.status(500).json({success:false,message:'Server Internal Error'})
    }

}

module.exports = {getTask,postTask,deleteTask}