import React, { useEffect, useState } from "react";
import EditPopUp from "../components/EditPopUp";

function Students() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Student",
    class: "",
    password: "",
  });
  const [teachersList, setTeachersList] = useState({});
  const [popUp, setPopUp] = useState({
    situation: false,
    id: null,
    teacher: null,
  });
  // console.log(popUp);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://classroom-1-mlxm.onrender.com/api/v1/user/getallteachers"
      );
      const data = await res.json();
      setTeachersList(data.user);
    };
    getData();
  }, [popUp.situation]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Corrected typo

    try {
      const res = await fetch(
        "https://classroom-1-mlxm.onrender.com/api/v1/user/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      alert(JSON.stringify(data)); // Changed to stringify JSON response
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-5">
      {/* Add teachers */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row gap-2 border-b pb-4"
      >
        <input
          className="bg-darkGray px-4 py-2 font-semibold outline-none border-2 border-lightText rounded-lg"
          type="text"
          id="name"
          placeholder="Enter Student name"
          onChange={handleChange} // Corrected typo
        />
        <input
          className="bg-darkGray px-4 py-2 font-semibold outline-none border-2 border-lightText rounded-lg"
          type="text"
          id="email"
          placeholder="Enter email id to create Student Id"
          onChange={handleChange} // Corrected typo
        />
        <input
          className="bg-darkGray px-4 py-2 font-semibold outline-none border-2 border-lightText rounded-lg"
          type="text"
          id="className"
          placeholder="Class room eg. TE-b"
          onChange={handleChange} // Corrected typo
        />
        <input
          className="bg-darkGray px-4 py-2 font-semibold outline-none border-2 border-lightText rounded-lg"
          type="password"
          id="password"
          placeholder="Set password"
          onChange={handleChange} // Corrected typo
        />
        <button className="bg-brightBlue text-white font-semibold p-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Add Student
        </button>
      </form>

      {/* Teacher title  */}
      <h1 className="text-xl md:text-2xl font-bold text-lightText my-2">
        Students List
      </h1>
      {/* Teachers list */}
      <div className="flex flex-col gap-2">
        {teachersList.length > 0 &&
          teachersList.map((teacher) => {
            if (teacher.role == "Student") {
              return (
                <div className="flex justify-between items-center gap-2 bg-darkGray p-3 rounded-lg">
                  <div className="flex flex-col sm:flex-row items-center sm:gap-1">
                    <h1 className="font-semibold text-lightText">
                      {teacher.name}
                    </h1>
                    <p className="font-semibold text-[13px] text-lightText">
                      (Student)
                    </p>
                  </div>
                  <p className="font-semibold text-[14px] ml-4 text-lightText">
                    Class: {teacher.className}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setPopUp({ situation: true, id: teacher._id, teacher })
                      }
                      className="bg-brightBlue px-2 py-1 rounded-lg"
                    >
                      Edit
                    </button>
                    <button className="bg-brightBlue px-2 py-1 rounded-lg">
                      Delete
                    </button>
                  </div>
                </div>
              );
            }
          })}
      </div>

      {/* popup */}
      <div className={`${!popUp.situation && "hidden"}`}>
        <EditPopUp
          teacher={popUp.teacher}
          teacherId={popUp.id}
          setPopUp={setPopUp}
        />
      </div>
    </div>
  );
}

export default Students;

// https://classroom-1-mlxm.onrender.com/api/v1/user/createuser 404 (Not Found)
