import React from "react";
import fos from "../assets/fileds";
import collegeList from "../assets/colleges";
import course from "../assets/courses";
import { useForm } from "react-hook-form";

export const DataForm = () => {
  const { register, handleSubmit } = useForm();
  //   console.log(fos);
  return (
    <div className="formContainer">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h1>Data Form</h1>

        <label for="FiledOfStudy">Field of Study</label>

        <select {...register("FiledOfStudy")} id="FiledOfStudy">
          {fos.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>

        <label for="collegeNames">Select Colleges</label>

        <select {...register("collegeNames")} id="collegeNames">
          {collegeList.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>

        <input
          type="text"
          {...register("instituteWebsite")}
          placeholder="Enter College Website"
        />
        <input
          type="text"
          {...register("instituteCampus")}
          placeholder="Enter Campus Name"
        />

        <label for="courses">Select Course</label>

        <select {...register("courses")} id="courses">
          {course.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
        <input
          type="text"
          {...register("instituteDesc")}
          placeholder="Enter a Short Description"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
