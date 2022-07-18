import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export const Show = () => {
    const [data, setData]  = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/data')
        .then(function (response) {
          
          console.log(response.data);
          setData(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },[])
    console.log("data",data)
   
  return (
    <div>Show
        <TableContainer>
  <Table variant='simple' size='lg' >
    
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Name</Th>
        <Th>Hospital</Th>
        <Th>Specilation</Th>
        <Th isNumeric>Salary</Th>
        <Th>Details</Th>
      </Tr>
    </Thead>
    <Tbody>
     {data.map((re) => (
        <Tr>
            <Td>{re.id}</Td>
            <Td>{re.name}</Td>
            <Td>{re.hospital}</Td>
            <Td>{re.specialisation}</Td>
            <Td>{re.salary}</Td>
            <Td>View More Details</Td>
        </Tr>
     ))}
    </Tbody>
   
  </Table>
</TableContainer>
    </div>
  )
}
