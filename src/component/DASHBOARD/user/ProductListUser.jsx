
import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { useState, useEffect } from "react"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteUser, getListUser } from '../../../data/apiUser';
import EditUser from './EditUser';
import AddUser from './AddUser';
const { Column, ColumnGroup } = Table;
const styleCol={
    height:"1000px"
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height:"80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function ProductListUser() {
    const [open, setOpen] = React.useState(false);
    const [formId,setFormId]=useState();
    const [dopen, setDopen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleDopen = () => setDopen(true);
    const handleClose = () => setOpen(false);
    const handleCloseEdit = () => setDopen(false);
    const [flag, setFlag] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
       getListUser()
            .then((data) => {
                setData(data);
            })
            .catch((error) => {

                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            });

    }, [flag]);
    console.log(flag);
    const formEdit=(user)=>{
        
        const data = {    
            id:user.id,
            username:user.username,
            password:user.password,
           };
        setFormId(data);
        handleDopen();
       
        
    }
    console.log("Data",data);
    const deleteUserId = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "blue",
            cancelButtonColor: "red",
            confirmButtonText: "Yes ,delete it !"
        }).then((result) => {
            if (result.value) {
               deleteUser(id)
                    .then(() => {
                        setFlag(!flag);
                        Swal.fire("Deleted!", "Your user has been deleted.", "success");
                    })
                    .catch((error) => {
                        console.error("Error deleting user:", error);
                        Swal.fire("Error", "An error occurred while deleting the user.", "error");
                    });
            }
        });
    };

    const handleFlagChange = () => {
        setFlag(!flag);
      };
    console.log(dopen);
    
    return (
        <div>
            
            <Modal
                open={open}
                    
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                   <AddUser closeEvent={handleClose} data={data} handleFlagChange={handleFlagChange}/>
                
                </Box>
            </Modal>
            <div style={{ marginBottom: 20 }}>
                <Button type="primary" onClick={handleOpen}>ADD NEW</Button>
            </div>

            {console.log(data)}
            <Modal
                open={dopen}
                    
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                   <EditUser closeEventEdit={handleCloseEdit} data={formId}  handleFlagChange={handleFlagChange}/>
                   
                </Box>
            </Modal>
            
            <Table dataSource={data}>
                <Column  title="Id" dataIndex="id" key="firstName" />
                <Column title="User Name" dataIndex="username" key="lastName" />
                <Column title="Password" dataIndex="password" key="age" />

                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <EditIcon onClick={()=>formEdit(record)} ></EditIcon>
                            <DeleteOutlineIcon style={{cursor:"pointer"}}   onClick={(() => deleteUserId(record.id))} ></DeleteOutlineIcon>
                          
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

export default ProductListUser

