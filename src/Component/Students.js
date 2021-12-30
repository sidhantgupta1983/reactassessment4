import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';


const Students = () => {

    function createData(name, age, course, batch, change) {
        return { name, age, course, batch, change };
      }
    
    const rows = [
      createData('John',26, 'MERN', 'October',<NavLink to='#'>Edit</NavLink>),
      createData('Doe', 23, 'MERN', 'November', <NavLink to='#'>Edit</NavLink>),
      createData('Biden', 26, 'MERN', 'October', <NavLink to='#'>Edit</NavLink>),
      createData('Barar', 30, 'MERN', 'November', <NavLink to='#'>Edit</NavLink>),
      createData('Christ', 36, 'MERN', 'October', <NavLink to='#'>Edit</NavLink>),
      createData('Elent', 36, 'MERN', 'November', <NavLink to='#'>Edit</NavLink>),
      createData('Harshita', 25, 'MERN', 'June', <NavLink to='#'>Edit</NavLink>),
    ];

    return (
        <div>
            <div className='row1'>
                <h1>Students Details</h1>
                <button className='addStudent'>Add new student</button>
            </div>
            <div className='tableAlign'>
              <TableContainer component={Paper} >
                <Table sx={{ minWidth: 550 }} aria-label="simple table" >
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Name</b></TableCell>
                      <TableCell align="right"><b>Age</b></TableCell>
                      <TableCell align="right"><b>Course</b></TableCell>
                      <TableCell align="right"><b>Batch</b></TableCell>
                      <TableCell align="right"><b>Change</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.course}</TableCell>
                        <TableCell align="right">{row.batch}</TableCell>
                        <TableCell align="right">{row.change}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </div>
          </div> 
      );
    }

export default Students
