import { useEffect, useState } from 'react';
import StudentInfo from './components/StudentInfo';
import { students } from './config';
import './index.css'; 
function App() {
  const [studentData,setStudentData] = useState(students);
  const [sort,setSort] = useState(true);
  const handleSearchData = (e) =>{
    const filterArray = studentData.filter((val)=>val.name.includes(e.target.value));
    if(e?.target?.value!=''){
      setStudentData(filterArray);
    }else{
      setStudentData(students);
    }
    
  };
  const handelCountryFilter = (e) =>{
    const filterArray = students.filter((val)=>val.country.includes(e.target.value));
    if(e?.target?.value!=''){
      setStudentData(filterArray);
    }else{
      setStudentData(students);
    }
    
  };
  const handleSort = () =>{
    setSort(!sort);
}
useEffect(()=>{
  let filterArray = studentData;
    if(sort){
      // studentData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
       filterArray = studentData.toSorted((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    }else{
      filterArray = studentData.toSorted((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
    }
    setStudentData(filterArray);
},[sort]);
  return (
    <>
      <div className='w-full p-10'>
        <input className='w-full mb-5 border p-2' placeholder='Search Here' onChange={handleSearchData} />
        <br/>
        <button className='p-1 border mb-5 cursor-pointer' onClick={handleSort}>A-Z Sort</button>
        <select className='p-1 border mb-5 ml-5' onChange={handelCountryFilter}>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
        </select>
        {
          studentData.length > 0 ? studentData.map((item)=>{
            return(<div key={item.id} className='border p-5 w-full rounded-2xl mb-10'><StudentInfo data={item} /></div>);
          }) : <div className='border p-5 w-full rounded-2xl mb-10'>No Data Found</div>
        }
      </div>
    </>
  )
}

export default App;
