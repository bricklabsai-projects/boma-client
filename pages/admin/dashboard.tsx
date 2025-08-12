import React, { useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [showCreateBomaModal, setShowCreateBomaModal] = useState(false);
  const [showAddTherapistModal, setShowAddTherapistModal] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#244C93] text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-4">
          <button
            onClick={() => setShowCreateBomaModal(true)}
            className="block w-full text-left px-4 py-2 rounded-md bg-[#E27A28] hover:bg-[#d06a20] transition"
          >
            Create Boma
          </button>
          <button
            onClick={() => setShowAddTherapistModal(true)}
            className="block w-full text-left px-4 py-2 rounded-md bg-[#E27A28] hover:bg-[#d06a20] transition"
          >
            Add Therapist
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-[#244C93] mb-6">Welcome, Admin</h1>
        <p className="text-gray-700">Use the sidebar to manage Boma entities.</p>
      </main>

      {/* Create Boma Modal */}
      {showCreateBomaModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-[#244C93] mb-4">Create Boma</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="bomaName" className="block text-sm font-medium text-gray-700">
                  Boma Name
                </label>
                <input
                  id="bomaName"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#244C93] focus:ring-[#244C93] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#244C93] focus:ring-[#244C93] sm:text-sm"
                  rows={3}
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowCreateBomaModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-[#244C93] text-white hover:bg-[#1d3d78] transition"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Therapist Modal */}
      {showAddTherapistModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-[#244C93] mb-4">Add Therapist</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="therapistName" className="block text-sm font-medium text-gray-700">
                  Therapist Name
                </label>
                <input
                  id="therapistName"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#244C93] focus:ring-[#244C93] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
                  Specialty
                </label>
                <input
                  id="specialty"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#244C93] focus:ring-[#244C93] sm:text-sm"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddTherapistModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-[#244C93] text-white hover:bg-[#1d3d78] transition"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
