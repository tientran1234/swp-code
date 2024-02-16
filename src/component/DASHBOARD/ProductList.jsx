
import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { useState, useEffect } from "react"
import Modal from '@mui/material/Modal';
// import { deleteTicket, getTickets } from '../../../data/imgData';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Swal from 'sweetalert2';
import AddItem from './AddItem';
import EditItem from './EditItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteHome, getHome } from '../../data/apiHome';
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
const columns = [{
    title: 'ID',
    dataIndex: 'name',
    key: 'name',
    width: '40%',
  }, {
    title: 'NAME',
    dataIndex: 'name',
    key: 'age',
    width: '30%',
  }, {
    title: 'CATEGORY',
    dataIndex: 'category',
    key: 'address',
  }, {
    title: 'CREATE AT',
    dataIndex: 'createAt',
    key: 'address',
  }, {
    title: 'DESCRIPTIONS',
    dataIndex: 'descriptions',
    key: 'address',
  }, {
    title: 'IMAGE',
    dataIndex: 'img',
    key: 'address',
  }];

const deleteHomeId = (id) => {
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
            deleteTicket(id)
                .then(() => {
                    setFlag(!flag);
                    Swal.fire("Deleted!", "Your film has been deleted.", "success");
                })
                .catch((error) => {
                    console.error("Error deleting film:", error);
                    Swal.fire("Error", "An error occurred while deleting the film.", "error");
                });
        }
    });
};
function ProductList2() {
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
        getHome()
            .then((data) => {
                setData(data);
            })
            .catch((error) => {

                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            });

    }, [flag]);
    console.log(flag);
    const formEdit=(home)=>{
        console.log(home);
        const data = {    
            name:home.name,
            img:home.img,
            createAt:home.createAt,
            descriptions:home.descriptions,
            category:home.category,
            id:home.id
           };
        setFormId(data);
        handleDopen();
       
        
    }
    const deleteHomeId = (id) => {
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
                deleteHome(id)
                    .then(() => {
                        setFlag(!flag);
                        Swal.fire("Deleted!", "Your home has been deleted.", "success");
                    })
                    .catch((error) => {
                        console.error("Error deleting home:", error);
                        Swal.fire("Error", "An error occurred while deleting the home.", "error");
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
                   <AddItem closeEvent={handleClose} data={data} handleFlagChange={handleFlagChange}/>
                
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
                   <EditItem closeEventEdit={handleCloseEdit} data={formId}  handleFlagChange={handleFlagChange}/>
                   
                </Box>
            </Modal>
            
            <Table dataSource={data}>
                <Column  title="ID" dataIndex="id" key="firstName" />
                <Column title="Name" dataIndex="name" key="lastName" />
                <Column title="Category" dataIndex="category" key="age" />
                <Column title="Create At" dataIndex="createAt" key="address" />
                <Column title="Descriptions" dataIndex="descriptions" key="address" />
                <Column title="Image" style={styleCol} dataIndex="img" key="address" />

                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <EditIcon onClick={()=>formEdit(record)} ></EditIcon>
                            <DeleteOutlineIcon style={{cursor:"pointer"}}   onClick={(() => deleteHomeId(record.id))} ></DeleteOutlineIcon>
                          
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

export default ProductList2

