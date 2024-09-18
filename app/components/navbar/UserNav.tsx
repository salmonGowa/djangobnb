import { FaBars, FaUser } from "react-icons/fa"

const UserNAv=()=>{
    return (
      <div className="p-2 relative inline-block border rounded-full">
        <button className="flex items-center">
          <FaBars />
          <FaUser />
        </button>
      </div>
    );

}
export default UserNAv