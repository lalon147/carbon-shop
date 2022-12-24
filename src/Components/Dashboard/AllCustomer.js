import React, { useEffect, useState } from 'react'

const AllCustomer = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
     
        fetch("http://localhost:5000/all-users")
         .then(res=>res.json())
         .then(data=>{
            setUsers(data)
            console.log(data)})
    },[])
  return (
    <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
           {
            users.length >0 && users?.map((user,indx)=>{
                 return  <tr key={user._id}>
                 <th>{indx+1}</th>
                 <td>{user.fullName}</td>
                 <td>{user.phone}</td>
                 <td>{user.role}</td>
               </tr>
            })
           } 
    </tbody>
  </table>
   <div className='flex justify-center items-center'>
   <button className='btn btn-xs btn-primary my-10' >Add a Customer</button>
   </div>
</div>
  )
}

export default AllCustomer