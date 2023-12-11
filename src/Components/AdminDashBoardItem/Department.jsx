import  { useState } from 'react';
import AdminCreateDept from '../PopUpView/AdminPop/AdminDeparmentPop/AdminCreateDept';
import AdminEditDept from '../PopUpView/AdminPop/AdminDeparmentPop/AdminEditDept';

const Department = () => {
  const [editDeptPopBtn, setEditDeptPopBtn] = useState(false);
  const [addDeptPopBtn, setAddDeptPopBtn] = useState(false);
  const [tableData, setTableData] = useState([
    { id: 1, department: 'CSE', hod: 'Anup Mathew Abraham' },
    { id: 2, department: 'EC', hod: 'Geenu Paul' },
    { id: 3, department: 'CE', hod: ' Asish Prasad' },
    { id: 3, department: 'ME', hod: ' Ayyappadas G.' },
    // ... other department data
  ]);
  const [editedDeptData, setEditedDeptData] = useState(null);

  const getRowColor = (index) => {
    return index % 2 === 0 ? 'bg-text-hover-bg' : '';
  };

  const handleEdit = (editedData) => {
    setTableData((prevData) =>
      prevData.map((item) => (item.id === editedData.id ? editedData : item))
    );

    setEditDeptPopBtn(false); // Close the popup when Save is clicked
  };

  const handleDelete = (row) => {
    const updatedData = tableData.filter((item) => item.id !== row.id);
    setTableData(updatedData);
    console.log(`Deleted department with ID ${row.id}`);
  };

  const handleAddDept = (newDept) => {
    const newId = tableData.length > 0 ? Math.max(...tableData.map((item) => item.id)) + 1 : 1;
    const deptWithId = { ...newDept, id: newId };
    setTableData((prevData) => [...prevData, deptWithId]);
    console.log('Added new department:', deptWithId);
    setAddDeptPopBtn(false); // Close the popup when Add is clicked
  };

  const handleCancelAddDept = () => {
    setAddDeptPopBtn(false); // Close the popup when Cancel is clicked
  };

  return (
    <div className="p-7 text-2xl text-black bg-blue-100 w-full font-semibold ">
      {/* Add department button */}
      <button
        onClick={() => setAddDeptPopBtn(true)}
        className="bg-text-hover-color W-[60px] h-[40px] rounded-lg mt-1 text-center p-2 text-[20px] text-white font-normal"
      >
        Add
      </button>

      {/* Table data */}
      <table className="pl-[10px] text-left table-auto bg-white border w-full rounded-[25px] shadow-lg">
        <thead className="rounded-lg">
          <tr className="rounded-lg ">
            <th className="px-4 py-2 font-semibold">SI.no</th>
            <th className="px-4 py-2 font-semibold">Department</th>
            <th className="px-4 py-2 font-semibold">HOD</th>
            <th className="px-4 py-2 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="font-sans ">
          {tableData.map((row, index) => (
            <tr key={row.id} className={getRowColor(index)}>
              <td className="px-4 py-2 font-light text-[20px]  ">{row.id}</td>
              <td className="px-4 py-2 font-light text-[20px]">{row.department}</td>
              <td className="px-4 py-2 font-light text-[20px]">{row.hod}</td>
              <td className="px-4 py-2 flex gap-6 ">
                <button className="mr-2" onClick={() => setEditedDeptData(row) || setEditDeptPopBtn(true)}>
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

      {editDeptPopBtn && (
        <AdminEditDept
          deptData={editedDeptData}
          onEdit={handleEdit}
          onCancel={() => setEditDeptPopBtn(false)}
        />
      )}
      {addDeptPopBtn && (
        <AdminCreateDept onAddDept={handleAddDept} onCancel={handleCancelAddDept} />
      )}
    </div>
  );
};

export default Department;
