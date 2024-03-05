import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Tooltip,} from "@mui/material"
import { useOutletContext } from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
const Contacts = () => {

    const { openDrawer } = useOutletContext()
   
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
    ];


    return (
        <div className='p-2' style={openDrawer ? { marginLeft: 250, width: "100%" } : { width: '100%' }}>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Phone Number</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell style={{ border: 'none' }} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left" style={{ border: 'none' }}>{row.calories}
                                </TableCell>
                                <TableCell align="left" style={{ border: 'none' }}>{row.fat}</TableCell>
                                <TableCell align="left" style={{ border: 'none' }}>
                                    <TableCell align='left' style={{ border: 'none' }}>
                                        <Tooltip title="Edit" placement="top">
                                            <div aria-label="edit">
                                                <EditIcon />
                                            </div>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell align="left" style={{ border: 'none' }}>
                                        <Tooltip title="Delete" placement="top">
                                            <div aria-label="delete">
                                                <DeleteIcon />
                                            </div>
                                        </Tooltip>
                                    </TableCell>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Contacts
