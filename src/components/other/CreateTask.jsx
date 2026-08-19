import React, { useState } from "react";
import { compile } from "tailwindcss";

export const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [newTask, setNewTask] = useState({})


  const submitHandler=(e)=>{
e.preventDefault()
setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
const data =JSON.parse( localStorage.getItem('employees'))
data.forEach(function(elem){
if(assignTo== elem.firstName){
elem.tasks.push(newTask)

}
})

localStorage.setItem('empployees',JSON.stringify(data))

setTaskTitle('')
setAssignTo('')
setTaskDescription('')
setTaskDate('')
setCategory('')




  }



  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <div className="mb-6">
        <h1>
          <center className="text-white border rounded shadow-lg p-3  ">
            Welcome To Admin Dashboard
          </center>
        </h1>
        <h1 className="text-3xl font-bold text-gray-900">Create New Task</h1>
        <p className="mt-1 text-sm text-white">
          Assign a task to an employee and provide all the necessary details.
        </p>
      </div>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="rounded-2xl bg-black p-6 shadow-lg md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Task Title
              </label>

              <input value={taskTitle}
               onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
                type="text"
                placeholder="Make a UI Design"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Due Date
              </label>

              <input value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
                type="date"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Assign To
              </label>

              <input value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
                type="text"
                placeholder="Employee name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Category
              </label>

              <input value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
                type="text"
                placeholder="Design, Development, Testing"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-white">
              Description
            </label>

            <textarea value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value)
            }}
              placeholder="Describe the task in detail..."
              className="h-70 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none "
            />
          </div>
        </div>

        <div className="my-8 border-t border-gray-100" />

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="submit"
            className="rounded-xl active:scale-95 hover:bg-green-500 bg-emerald-500 px-20 py-3 text-sm font-semibold text-white "
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};
