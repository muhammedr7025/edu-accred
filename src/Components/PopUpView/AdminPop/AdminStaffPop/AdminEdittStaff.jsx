import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const AdminEditStaff = ({ staffData, onEdit, onCancel }) => {
  const [editedStaff, setEditedStaff] = useState({ ...staffData });

  useEffect(() => {
    setEditedStaff({ ...staffData });
  }, [staffData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStaff((prevStaff) => ({ ...prevStaff, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(editedStaff);
    onCancel();
  };

 
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-gray-800 opacity-75" onClick={onCancel}></div>
      <div className="z-20 bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Edit Staff</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="siNumber" className="block text-sm font-medium text-gray-600">
              SI Number:
            </label>
            <input
              type="text"
              id="siNumber"
              name="siNumber"
              value={editedStaff.siNumber} // Assuming 'siNumber' is a field in your data
              readOnly
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedStaff.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block text-sm font-medium text-gray-600">
              Department:
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={editedStaff.department}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-600">
              Role:
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={editedStaff.role}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={editedStaff.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Update
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="ml-2 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>  
  );
};

export default AdminEditStaff;
