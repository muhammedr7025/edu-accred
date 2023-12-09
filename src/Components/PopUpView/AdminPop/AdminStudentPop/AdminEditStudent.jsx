

const AdminEditStudent = () => {
  return (
    <div className="fixed left-0 top-0 z-[1] w-[100%] h-[100%] flex items-center justify-center bg-[rgba(0,0,0,0.4)]">   
    <div className="rounded-[10px] p-[2rem] bg-white w-[50rem]">
      <form action=""> 
        <div className="flex flex-col text-center gap-5"> 
         Edit Student Details 
          <div className="flex flex-col text-left">
            <label className="font-normal text-[20px] " htmlFor="SI.no">SI.no</label> 
            <input placeholder="Enter Si .no" className="font-serif font-normal text-[20px] p-2 border border-black" name='SI.no' type="text" />
          </div> 
          <div className="flex flex-col text-left">
            <label className="font-normal text-[20px] " htmlFor="Name">Name</label> 
            <input placeholder="Enter Name" className="font-serif font-normal text-[20px] p-2 border border-black" name='SI.no' type="text" />
          </div> 
          <div className="flex flex-col text-left">
            <label className="font-normal text-[20px] " htmlFor="Phone No:">Phone No:</label> 
            <input placeholder="Enter Phone No:" className="font-serif font-normal text-[20px] p-2 border border-black" name='SI.no' type="text" />
          </div>
          <div className="flex flex-col text-left">
            <label className="font-normal text-[20px] " htmlFor="Department">Department</label> 
            <select className="font-serif font-normal text-[20px] p-2 border border-black" name='SI.no' type="text">
              <option value="CSE">CSE</option>
              <option value="ME">ME</option> 
              <option value="CE">CE</option>  
              <option value="EC">EC</option> 
              <option value="EEE">EEE</option>  
            </select>
          </div>
          <div className="flex flex-col text-left">
            <label className="font-normal text-[20px] " htmlFor="Batch">Batch</label> 
            <select className="font-serif font-normal text-[20px] p-2 border border-black" name='SI.no' type="text">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          
          <div className="flex text-center justify-center rounded-lg">
          <button className="  w-[100px] h-[50px] text-white bg-blue-500 flex rounded-lg items-center justify-center">
          Submit
        </button>
          </div>
        </div>
        
      </form>
    </div>
  </div> 
  )
}

export default AdminEditStudent