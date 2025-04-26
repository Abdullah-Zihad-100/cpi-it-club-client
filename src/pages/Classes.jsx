import Title from "../Components/Title";
import ClassCard from "../Components/ClassCard";
import { useQuery } from "@tanstack/react-query";
import { getClasses } from "../Apis/apis";
// import { useParams } from "react-router";

export default function Classes() {
  // const { id } = useParams();

  const { data: classData = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await getClasses(`classes`);
      return res;
    },
    // enabled: !!id,
  });

  return (
    <div className="pt-5">
      <div className="max-w-7xl mx-auto px-5">
        <div className="pt-20">
          <Title title={"Next Class Date"} heading={"Our Classes"} />
        </div>
        {classData?.map((classData) => (
          <ClassCard key={classData?._id} classData={classData} />
        ))}
      </div>
    </div>
  );
}
