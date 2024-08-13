import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { IoMdClose } from "react-icons/io";

function EditPopUp({ teacher, teacherId, setPopUp }) {
  console.log(teacher);
  const [formData, setFormData] = useState({
    id: teacherId,
    name: "",
    email: "",
    role: teacher != null ? teacher.role : "",
    class: "",
    password: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/v1/user/updateuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) {
      alert("Succesfully Updated");
    } else {
      alert("Something went wrong");
    }
    setPopUp({ situation: false, id: "", teacher: "" });
  };

  const closePopUp = () => {
    setPopUp({ situation: false, id: "", teacher: "" });
  };
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darkGray px-6 py-10 rounded-5 shadow-xl">
      <div
        onClick={closePopUp}
        className=" cursor-pointer absolute right-5 top-5 text-lg"
      >
        {/*<IoMdClose /> */}
        <p>X</p>
      </div>
      <div className="xl:max-w-[400px]">
        <h1 className="text-xl font-bold">Edit the teachers data </h1>
        <p className="text-[13px] text-zinc-500 my-2">
          As a principal, you have an option to edit teachers data to stay up to
          data
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            className="border-2 border-black p-3 text-black placeholder-black font-semibold"
            type="text"
            placeholder="Teacher Name"
            // defaultValue={teacher.name}
            id="name"
            onChange={handleChange}
          />
          <input
            className="border-2 border-black p-3 text-black placeholder-black font-semibold"
            type="text"
            placeholder="Class room "
            // defaultValue={teacher.className}
            id="classRoom"
            onChange={handleChange}
          />
          <input
            className="border-2 border-black p-3 text-black placeholder-black font-semibold"
            type="email"
            placeholder="Email"
            // defaultValue={teacher.email}
            id="email"
            onChange={handleChange}
          />
          <input
            className="border-2 border-black p-3 text-black placeholder-black font-semibold"
            type="password"
            placeholder="Password"
            id="password"
            defaultValue="**********"
            onChange={handleChange}
          />
          <button className="bg-brightBlue p-2 rounded-md text-white font-bold my-2">
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPopUp;
