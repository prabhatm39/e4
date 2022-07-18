
import React, { useState } from 'react'

export const AddHos = () => {
    const [data, setData] = useState({
        name: "",
        add: ""
    })
    const handelChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name] : value
        })

    }
    const handelSumit = (e) => {
        e.preventDefault();
        console.log(data)
}
  return (
    <div style={{backgroundcolor: "teal"}}>
        <h1>Hospital Modal Form</h1>
        <form onSubmit={handelSumit}>
            <label>Hospital name</label>
            <input type="text" placeholder="Add Hospital"  value={data.name} onChange={handelChange} name="name"/>
            <hr/>
            <label>Address</label>
            <input type="text" placeholder="Address" name="add" onChange={handelChange} value={data.add} />
            <br/>
            <input type="submit" />

        </form>
    </div>
  )
}
