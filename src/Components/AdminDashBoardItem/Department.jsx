import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import AdminCreateDept from '../PopUpView/AdminPop/AdminDeparmentPop/AdminCreateDept';
import AdminEditDept from '../PopUpView/AdminPop/AdminDeparmentPop/AdminEditDept';
const Department = () => {

  const [EditDeptPopBtn ,setEditDeptPopBtn] = useState(false);
    const [AddDeptPopBtn ,setAddDeptPopBtn] = useState(false);
    
  const tableData = [
    { id: 1, department: 'CSE', hod: 'A',  },
    { id: 2, department: 'CSE', hod: 'S', },
    { id: 3, department: 'EC',  hod: 'G', },
    { id: 4, department: 'EC',  hod: 'P', },
    { id: 5, department: 'ECE', hod: 'B',  },
    { id: 6, department: 'ECE', hod: 'D',  },
    { id: 5, department: 'CE',  hod: 'T', },
    { id: 6, department: 'ECE', hod: 'L',  },
  
  ];
  const getRowColor = (index) => {
    return index % 2 === 0 ? 'bg-text-hover-bg' : '';
  }; 
  const handleEdit = (row) => {
    // Add your edit logic here
    console.log(`Editing row with ID ${row.id}`);
    setEditDeptPopBtn(true);
  };

  // Function to handle delete action
  const handleDelete = (row) => {
    // Add your delete logic here
    console.log(`Deleting row with ID ${row.id}`);
  };
  return (
    <div className="p-7 text-2xl text-black bg-blue-100 w-full font-semibold ">
      <div className="bg-dashboard-light-100 h-screen">
        <div className="p-5 gap-10 grid grid-cols-1 md:grid-cols-2">
        

          
        </div>
        <div className=" flex bg-white w-full h-[70px] mb-2 rounded-lg shadow-lg items-center justify-between">
        <div className='fixed top-[6rem] left-[65rem] z-[2]'>
         { EditDeptPopBtn &&           <button onClick={() => setEditDeptPopBtn(false)} className='cursor-pointer'>X</button>
}
        </div> 
        <div className='fixed top-[6rem] left-[65rem] z-[2]'>
         { AddDeptPopBtn &&   <button onClick={() => setAddDeptPopBtn(false)} className='cursor-pointer'>X</button>
}
        </div>
              <div className='flex w-[12.5rem] pl-2 gap-3 '>
              <div className=" border border-light-grey flex items-center rounded-md bg-light-white mt-1 px-2.5 py-2">
            <BsSearch className=" text-lg block float-left cursor-pointer mr-2.5"></BsSearch>
            <input
              type="search"
              placeholder="Search"
              className={`text-base bg-transparent    w-[12rem] text-grey focus:outline-none ${!open && 'hidden'}`}
            />
          </div>
          <div className='bg-text-hover-color W-[60px ]h-[40px] rounded-lg mt-1 text-center p-2 text-[20px] text-white font-normal'> 
              Search
          </div>
          <button onClick={() => setAddDeptPopBtn(true)} className='bg-text-hover-color W-[60px ]h-[40px] rounded-lg mt-1 text-center p-2 text-[20px] text-white font-normal'> 
              Add
          </button>
              </div> 
              
          </div>
        
        {/* Table data */}
        <table className="pl-[10px] text-left table-auto bg-white border w-full rounded-[25px] shadow-lg">
      <thead className="rounded-lg">
        <tr className=" rounded-lg ">
          <th className="px-4 py-2 font-semibold ">SI.no</th>
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
              <button className="mr-2" onClick={() => handleEdit(row)}>
                <i className="fa-solid fa-pencil text-blue-500"></i> {/* Edit Icon */}
              </button>
              <button onClick={() => handleDelete(row)}>
                <i className="fa-solid fa-trash text-red-500"></i> {/* Delete Icon */}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {EditDeptPopBtn && <AdminEditDept></AdminEditDept>} 
    {AddDeptPopBtn && <AdminCreateDept></AdminCreateDept>} 

        
      </div>
    </div>
  );
};

export default Department;
