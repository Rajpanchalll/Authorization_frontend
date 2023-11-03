import React from 'react'
import { Link } from 'react-router-dom'; 


const Admin = () => {
  const userStatistics = {
    totalUsers: 30,
    activeUsers: 25,
    pendingApprovals: 28,
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>


      <Link to='/' ><p className='bg-green-400 p-2 my-10 w-20 rounded-lg font-semibold '>Home ⇾</p></Link>


      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">User Statistics</h2>
        <div className="flex flex-wrap mt-4">
          <div className="w-full sm:w-1/2 md:w-1/3">
            <div className="bg-blue-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p>{userStatistics.totalUsers}</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3">
            <div className="bg-green-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Active Users</h3>
              <p>{userStatistics.activeUsers}</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3">
            <div className="bg-yellow-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Pending Approvals</h3>
              <p>{userStatistics.pendingApprovals}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link to="/manage-users" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Manage Users
        </Link>
      </div>
    </div>
  );
}

export default Admin