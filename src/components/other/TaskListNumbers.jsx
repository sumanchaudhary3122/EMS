import React from 'react'

export const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 w-full justify-between gap-5  '>
        <div className='text-white rounded-xl w-[45%] py-6 px-9 bg-orange-500 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <p className='text-xl font-medium'>New Task</p>
        </div>
        <div className='text-white rounded-xl w-[45%] py-6 px-9 bg-blue-400 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <p className='text-xl font-medium'>Completed Task</p>
        </div>
        <div className='text-white rounded-xl w-[45%] py-6 px-9 bg-green-400 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <p className='text-xl font-medium'>Accepted Task</p>
        </div>
        <div className='text-white rounded-xl w-[45%] py-6 px-9 bg-yellow-400 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <p className='text-xl font-medium'>Failed Task</p>
        </div>
        
    </div>
  )
}

