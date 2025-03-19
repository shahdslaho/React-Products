import React from 'react';
import Navbar from '../Navbar';

const Profile = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto bg-gradient-to-b from-sky-500 via-violet-200 to-violet-300 rounded-3xl shadow-lg overflow-hidden mt-20 pb-4">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-sky-500 to-violet-400 h-32 relative">
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-sky-400 shadow-lg">
              U
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-16 px-6 pb-6 bg-white rounded-t-3xl">
          {/* Stats */}
          <div className="flex justify-center space-x-12 mb-8">
            <div className="text-center">
              <div className="text-gray-600 text-sm">Age</div>
              <div className="text-lg font-semibold">--</div>
            </div>
            <div className="text-center">
              <div className="text-gray-600 text-sm">Height</div>
              <div className="text-lg font-semibold">--</div>
            </div>
            <div className="text-center">
              <div className="text-gray-600 text-sm">Weight</div>
              <div className="text-lg font-semibold">--</div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-3 flex items-center">
              <span className="text-sky-400 mr-3">📧</span>
              <input 
                type="email"
                placeholder="Email"
                className="bg-transparent w-full outline-none"
              />
            </div>
            <div className="bg-gray-50 rounded-xl p-3 flex items-center">
              <span className="text-violet-300 mr-3">👤</span>
              <input 
                type="text"
                placeholder="Username"
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>

          {/* Edit Button */}
          <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-400 text-white font-semibold hover:opacity-90 transition-opacity">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;