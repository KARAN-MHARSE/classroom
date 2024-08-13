import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { useSelector } from "react-redux";

function Header() {
  const { user, role } = useSelector((state) => state);
  console.log(role);
  return (
    <div className="bg-[#131313] p-5 flex items-center justify-between">
      {/* left */}
      <div className="flex items-center gap-2">
        {role && (
          <img
            className="size-[30px] rounded-full"
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            alt=""
          />
        )}
        <h2 className="text-lg">{role != null ? user.name : ""}</h2>
        <p className="text-[12px] relative top-[2px]">
          {role != null ? "(" + role + ")" : ""}
        </p>
      </div>
      {/* right */}
      <div className="flex items-center gap-3">
        {/* search bar */}
        <div className="border-2 border-lightText flex items-center gap-2 px-2 py-1 rounded-lg">
          <IoSearch />
          <input
            className="bg-transparent outline-none"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
        </div>
        <div className="w-[30px] h-[30px] flex items-center justify-center px-2 py-1 bg-lightText rounded-full ">
          <MdNotificationsNone size={25} />
        </div>
      </div>
    </div>
  );
}

export default Header;
