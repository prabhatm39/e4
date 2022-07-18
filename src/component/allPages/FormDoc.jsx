import React, { useState } from "react";
import axios from "axios"


const formdata = {
    name: "",
    hospital: "",
    spe: "",
    salary: ""
}
export const FormDoc = () => {
    const [data, setData] = useState(formdata);

    const onChange = (e) => {
const {name, value}  = e.target;
setData({
    ...data,
    [name] : value
})
    }
    const handelSumit = (e) => {
            e.preventDefault();
            console.log(data)
            axios.post('http://localhost:8080/data',data)
             
    }

  return (
    <div>
      <h1>Doctor Modal Form</h1>
      <form onSubmit={handelSumit}>
        <lable>Doctor Name: </lable>
        <input placeholder="name" value={data.name} onChange={onChange} name="name"/>
        <br />
        <label> Hospital</label>
        <select value={data.hospital} onChange={onChange} name="hospital">
          <option key="Sarkar">Sarkar</option>
        </select>

        <lable>Specialistion</lable>
        <select value={data.spe} onChange={onChange} name="spe">
          <option key="Heart">Heart</option>
          <option key="Kideny">Kidney</option>
          <option key="Nephrology">Nephrology</option>
        </select>
        <lable>Salary</lable>
        <input type="number" placeholder="salary" value={data.salary} onChange={onChange} name="salary"/>
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
};
