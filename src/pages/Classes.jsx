import { useState } from "react";
import { axiosSecure } from "../Apis/axios";
import Title from "../Components/Title";
import { useEffect } from "react";
import ClassCard from "../Components/ClassCard";

export default function Classes() {
  const [classData, setClassData] = useState();
  useEffect(() => {
    axiosSecure("/classes").then((res) => setClassData(res?.data));}, []);
  console.log(classData);

  return (
    <div className="mb-10">

        <div className="max-w-7xl mx-auto px-5">
       <div className="pt-20">
       <Title  title={"Next Class Date"} heading={"Our Classes"}/>
       </div>
     {
      classData?.map(classData=>(
        <ClassCard key={classData?.className} classData={classData}/>
      ))
     }
</div>
    </div>
  )
}
