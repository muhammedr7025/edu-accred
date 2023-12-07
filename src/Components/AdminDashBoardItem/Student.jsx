import { BsSearch } from 'react-icons/bs';  

const Student = () => {
    const tableData = [
        { id: 1, name: 'A', phone: '123456789', department: 'CSE',  batch: '2020' },
        { id: 2, name: 'S', phone: '123456789', department: 'CSE', batch: '2020' },
        { id: 3, name: 'G', phone: '123456789', department: 'EC',  batch: '2020' },
        { id: 4, name: 'P', phone: '123456789', department: 'EC',  batch: '2020' },
        { id: 5, name: 'B', phone: '123456789', department: 'ECE', batch: '2020' },
        { id: 6, name: 'D', phone: '123456789', department: 'ECE', batch: '2020' },
        { id: 5, name: 'T', phone: '123456789', department: 'CE',  batch: '2020' },
        { id: 6, name: 'L', phone: '123456789', department: 'ECE', batch: '2020' },
      
      ];
      const getRowColor = (index) => {
        return index % 2 === 0 ? 'bg-text-hover-bg' : '';
      }; 
      const handleEdit = (row) => {
        // Add your edit logic here
        console.log(`Editing row with ID ${row.id}`);
      };
    
      // Function to handle delete action
      const handleDelete = (row) => {
        // Add your delete logic here
        console.log(`Deleting row with ID ${row.id}`);
      };
      return (
        <div className="p-7 text-2xl text-black bg-blue-100 w-[1240px] font-semibold ">
          <div className="bg-dashboard-light-100 h-screen">
            <div className="p-5 gap-10 grid grid-cols-1 md:grid-cols-2">
              {/* First Set of Elements */}
              {/* <div className="w-full md:w-[35rem] h-[5rem] bg-white rounded-md shadow-lg ">
                <div className="flex justify-between px-4 py-2">
                  <div className="flex flex-col my-3.5">
                    <div className="text-[grey] text-xl"></div>
                    <div className="text-text-hover-color">Create Staff</div>
                  </div>
                  <div className="flex  py-[10px]">
                    <div className="w-[2.5rem] md:w-[2.5rem] h-[2.5rem] bg-light-blue rounded-[25%] text-center py-[5%]">
                      -{`>`}
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Second Set of Elements */}
              {/* <div className="w-full md:w-[35rem] h-[5rem] bg-white rounded-md shadow-lg ">
                <div className="flex justify-between px-4 py-2">
                  <div className="flex flex-col my-3.5">
                    <div className="text-[grey] text-xl"></div>
                    <div className="text-text-hover-color">
                      Enter Staff Details
                    </div>
                  </div>
                  <div className="flex  py-[10px]">
                    <div className="w-[2.5rem] md:w-[2.5rem] h-[2.5rem] bg-light-blue rounded-[25%] text-center py-[5%]">
                      -{`>`}
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Third Set of Elements */}
              {/* <div className="w-full md:w-[35rem] h-[5rem] bg-white rounded-md shadow-lg ">
                <div className="flex justify-between px-4 py-2">
                  <div className="flex flex-col my-3.5">
                    <div className="text-[grey] text-xl"></div>
                    <div className="text-text-hover-color">UpDate Staff</div>
                  </div>
                  <div className="flex  py-[10px]">
                    <div className="w-[2.5rem] md:w-[2.5rem] h-[2.5rem] bg-light-blue rounded-[25%] text-center py-[5%]">
                      -{`>`}
                    </div>
                  </div>
                </div>
              </div> */}
    
              {/* Fourth Set of Elements */}
              {/* <div className="w-full md:w-[35rem] h-[5rem] bg-white rounded-md shadow-lg   ">
                <div className="flex justify-between px-4 py-2">
                  <div className="flex flex-col my-3.5">
                    <div className="text-[grey] text-xl"></div>
                    <div className="text-text-hover-color">
                       Delete Staff
                    </div>
                  </div>
                  <div className="flex py-[10px]">
                    <div className="w-[2.5rem] md:w-[2.5rem] h-[2.5rem] bg-light-blue rounded-[25%] text-center py-[5%]">
                      -{`>`}
                    </div>
                  </div>
                </div>
              </div>  */}
            </div> 
            <div className=" flex bg-white w-full h-[60px] mb-2 rounded-lg shadow-lg items-center justify-between">
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
            <div className='bg-text-hover-color W-[60px ]h-[40px] rounded-lg mt-1 text-center p-2 text-[20px] text-white font-normal'> 
                Add
            </div>
                </div> 
                
            </div>
            {/* Table data */}
              <table className="pl-[10px] text-left table-auto bg-white border w-full rounded-[25px] shadow-lg">
          <thead className="rounded-lg">
            <tr className=" rounded-lg ">
              <th className="px-4 py-2 font-semibold ">SI.no</th>
              <th className="px-4 py-2 font-semibold">Name</th>
              <th className="px-4 py-2 font-semibold">Phone No:</th>
              <th className="px-4 py-2 font-semibold">Department</th>
              
              <th className="px-4 py-2 font-semibold">Batch</th>
              <th className="px-4 py-2 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="font-sans ">
            {tableData.map((row, index) => (
              <tr key={row.id} className={getRowColor(index)}>
                <td className="px-4 py-2 font-light text-[20px]">{row.id}</td>
                <td className="px-4 py-2 font-light text-[20px]">{row.name}</td>
                <td className="px-4 py-2 font-light text-[20px]">{row.phone}</td>
                <td className="px-4 py-2 font-light text-[20px]" >{row.department}</td>
                <td className="px-4 py-2 font-light text-[20px]">{row.batch}</td>
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
    
    
    
            {/* Additional Set of Elements */}
            <div className="p-5 gap-10 flex flex-col md:flex-row">
              {/* Fifth Set of Elements */}
              <div className="w-full md:w-[40rem] h-[20rem] bg-white rounded-md shadow-lg flex flex-col justify-center items-center">
                <div className="flex justify-between px-4 py-2 w-full">
                  <div className="flex flex-col">
                    <div className="text-[grey] text-xl">T</div>
                    <div></div>
                  </div>
                  <div className="flex  py-[10px]">
                    <div className="w-[13.5rem] md:w-[13.5rem] h-[18rem] bg-light-blue rounded-lg flex text-center text-white justify-center items-center">
                      {/* Your content goes here */}
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Sixth Set of Elements */}
              <div className="w-full md:w-[30rem] h-[20rem] bg-white rounded-md shadow-lg flex flex-col justify-center items-center">
                <div className="flex justify-between px-4 py-2 w-full">
                  <div className="flex flex-col">
                    <div className="text-[grey] text-xl"></div>
                    <div></div>
                  </div>
                  <div className="flex">
                    <div className="w-[13.5rem] md:w-[13.5rem] h-[18rem] bg-light-blue rounded-lg flex text-center text-white justify-center items-center">
                      {/* Your content goes here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Student