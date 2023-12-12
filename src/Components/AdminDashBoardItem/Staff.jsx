// Staff.js
import { useState } from 'react';
import AdminEditStaff from '../../Components/PopUpView/AdminPop/AdminStaffPop/AdminEdittStaff';
import AdminCreateStaff from '../../Components/PopUpView/AdminPop/AdminStaffPop/AdminCreateStaff';

const Staff = () => {
  const [editStaffPopBtn, setEditStaffPopBtn] = useState(false);
  const [addStaffPopBtn, setAddStaffPopBtn] = useState(false);
  const [tableData, setTableData] = useState([
    { id: 0, name: 'Anup Mathew Abraham', department: 'CSE', role: 'HOD', email: 'gmail' },
    { id: 1, name: 'Shinu Mamachan', department: 'CSE', role: 'Asst. Professor', email: 'gmail' },
    { id: 2, name: 'Divya Susan Mathew', department: 'CSE', role: 'Asst. Professor', email: 'gmail' },
    { id: 3, name: 'Jasmine Paul', department: 'CSE', role: 'Asst. Professor', email: 'gmail' },
    { id: 4, name: 'Jasmine Paul', department: 'CSE', role: 'Asst. Professor', email: 'gmail' },
    { id: 5, name: 'Immanuel Thomas', department: 'CSE', role: 'Asst. Professor', email: 'gmail' },
    // ... other staff data
  ]);
  const [editedStaffData, setEditedStaffData] = useState(null);

  const getRowColor = (index) => {
    return index % 2 === 0 ? 'bg-text-hover-bg' : '';
  };

  const handleEdit = (row) => {
    // Update the tableData state with the new array
    const updatedData = tableData.map((staff) =>
      staff.id === row.id ? row : staff
    );
    setTableData(updatedData);
  
    // Open the edit popup
    setEditStaffPopBtn(true);
    setEditedStaffData(row);
  };

  const handleDelete = (row) => {
    const updatedData = tableData.filter((item) => item.id !== row.id);
    setTableData(updatedData);
    console.log(`Deleted row with ID ${row.id}`);
  };

  const handleAddStaff = (newStaff) => {
    // Generate a new ID for the added staff member
    const newId = tableData.length > 0 ? Math.max(...tableData.map(item => item.id)) + 1 : 1;
  
    // Set the new ID for the added staff member
    const staffWithId = { ...newStaff, id: newId };
  
    // Update the tableData state with the new staff member
    setTableData((prevData) => [...prevData, staffWithId]);
  
    console.log('Added new staff:', staffWithId);
    setAddStaffPopBtn(false); // Close the popup when Add is clicked
  };

  const handleCancelAddStaff = () => {
    setAddStaffPopBtn(false); // Close the popup when Cancel is clicked
  };

  return (
    <div className="p-7 text-2xl text-black bg-blue-100 w-full font-semibold ">
      {/* Add staff button */}
      <button
        onClick={() => setAddStaffPopBtn(true)}
        className="bg-text-hover-color W-[60px] h-[40px] rounded-lg mt-1 text-center p-2 text-[20px] text-white font-normal"
      >
        Add
      </button>

      {/* Table data */}
      <table className="pl-[10px] text-left table-auto bg-white border w-full rounded-[25px] shadow-lg">
        <thead className="rounded-lg">
          <tr className="rounded-lg ">
            <th className="px-4 py-2 font-semibold">SI.no</th>
            <th className="px-4 py-2 font-semibold">Staff Name</th>
            <th className="px-4 py-2 font-semibold">Department</th>
            <th className="px-4 py-2 font-semibold">Role</th>
            <th className="px-4 py-2 font-semibold">Email</th>
            <th className="px-4 py-2 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="font-sans ">
          {tableData.map((row, index) => (
            <tr key={row.id} className={getRowColor(index)}>
              <td className="px-4 py-2 font-light text-[20px]  ">{row.id}</td>
              <td className="px-4 py-2 font-light text-[20px]">{row.name}</td>
              <td className="px-4 py-2 font-light text-[20px]">{row.department}</td>
              <td className="px-4 py-2 font-light text-[20px]">{row.role}</td>
              <td className="px-4 py-2 font-light text-[20px]">{row.email}</td>
              <td className="px-4 py-2 flex gap-6 ">
                <button className="mr-2" onClick={() => handleEdit(row)}>
                  <i className="fa-solid fa-pencil text-blue-500"></i>
                </button>
                <button onClick={() => handleDelete(row)}>
                  <i className="fa-solid fa-trash text-red-500"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editStaffPopBtn && (
        <AdminEditStaff
          staffData={editedStaffData}
          onEdit={handleEdit} 
          onCancel={() => setEditStaffPopBtn(false)}
        />
      )}
      {addStaffPopBtn && <AdminCreateStaff onAddStaff={handleAddStaff} onCancel={handleCancelAddStaff} />}
    </div>
  );
};

export default Staff;
