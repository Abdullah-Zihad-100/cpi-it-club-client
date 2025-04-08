import Title from "../Components/Title";
import { FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
const Members = () => {
    return (
        <div className="pt-20">
           <Title heading={"Exclusive Members"} title={"There Are All Of Our Exclusive Member"}/>
           <div className="mt-10">
            
            <div className="flex justify-center">

            {/* Precident Card  */}
            <div className="bg-blue-50 rounded p-6 w-72 text-center shadow-sm">
      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md ring-4 ring-green-100 -mt-12">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt="Andrew Power"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-3">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          CO-FOUNDER
        </span>
      </div>
      <h2 className="text-xl font-semibold mt-3">Andrew Power</h2>
      <p className="text-sm text-gray-500 mt-1">
        Short details description can be added here
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="text-gray-600 hover:text-black text-xl border rounded-full p-2 border-gray-400">
          <FaTiktok />
        </a>
        <a href="#" className="text-gray-600 hover:text-black text-xl  border rounded-full p-2 border-gray-400">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-600 hover:text-black text-xl  border rounded-full p-2 border-gray-400">
          <FaLinkedin />
        </a>
      </div>
    </div>
            <div className="bg-blue-50 rounded p-6 w-72 text-center shadow-sm">
      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md ring-4 ring-green-100 -mt-12">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt="Andrew Power"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-3">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          CO-FOUNDER
        </span>
      </div>
      <h2 className="text-xl font-semibold mt-3">Andrew Power</h2>
      <p className="text-sm text-gray-500 mt-1">
        Short details description can be added here
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="text-gray-600 hover:text-black text-xl border rounded-full p-2 border-gray-400">
          <FaTiktok />
        </a>
        <a href="#" className="text-gray-600 hover:text-black text-xl  border rounded-full p-2 border-gray-400">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-600 hover:text-black text-xl  border rounded-full p-2 border-gray-400">
          <FaLinkedin />
        </a>
      </div>
    </div>
            </div>

           </div>
        </div>
    )
}
export default Members;