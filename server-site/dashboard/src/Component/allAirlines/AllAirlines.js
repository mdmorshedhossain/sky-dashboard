import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const AllAirlines = () => {
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [images, setImages] = useState([]);
    const [refetch, setRefetch] = useState(false);
    const [updatedId, setUpdatedId] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/allAirlines')
        .then(res => res.json())
        .then(data => {
            setImages(data)
            console.log(data);
        })
    },[refetch])

    

    // Delete images
    const deleteImage = (id) =>{
         console.log(id);

        fetch(`http://localhost:5000/deleteAirlines/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
          }).then(res => {
            alert('successfully delete image');
          });
          setRefetch(!refetch)
    }

    // Update images
    const openModal = (id) =>{
        setUpdatedId(id);
        setEditModal(!editModal)
    }
    

    const columnsData = [
        { title: 'Airlines Name', field: 'name' },
        { title: 'Location', field: 'location' },
        { title: 'Phone', field: 'phone' },
        { title: 'Telephone', field: 'telephone' },
        { title: 'Email', field: 'email' },
        { title: 'Website', field: 'website' },
        
    ]
    return (
        <div style={{margin:'30px 10px 0px 10px', width:'100%',heigh:'full'}} className=''>
            <div style={{position:'relative'}} className='itemsList '>
                <div style={{position:'absolute', zIndex:'1', top:'26px',right:'10px'}}>
                    <Link onClick={() => setModal(!modal)} style={{textDecoration:'none'}} to='#'>
                        <p style={{
                            background:'#4B49AC', 
                            color:'white',
                            width:'200px', 
                            borderRadius:'5px', 
                            padding:'5px',
                            }}>
                            Add New Airlines
                        </p>
                    </Link>
                    {/* <label htmlFor="my-modal-3" className="btn modal-button">open modal</label> */}
                </div>
                <MaterialTable
                    style={{padding:'10px'}}
                    title="Positioning Actions Column Preview"
                    columns={columnsData}
                    data={images}
                    actions={[
                        {
                        icon: 'edit',
                        tooltip: 'Edit requisition',
                        iconProps: { style: { fontSize: "1rem"} },
                        onClick: (event, rowData) => openModal(rowData.id)
                        },
                        rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Requisition',
                        iconProps: { style: { fontSize: "1rem" } },
                        onClick: (event, rowData) => deleteImage(rowData.id),
                        disabled: rowData.birthYear < 2000
                        })
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                        // searchField:true,
                        showTitle:false,
                        searchFieldAlignment: "left",
                        searchFieldStyle: { 
                            padding:'1px 5px',
                            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.08)',
                            // backgroundColor:'#fcf9f9',
                            borderRadius: 5,
                            fontSize:'.75rem'
                        },
                        rowStyle:{
                            fontSize:'.75rem',
                            // textAlign:'center',
                            border:'1px solid #c9c9c9'
                        },
                        headerStyle:{
                            fontSize:'.75rem',
                            border:'1px solid #c9c9c9' ,
                            textAlign:'center',
                        }
                    }}
                />
            </div>

            {/*Add new events modal */}
            {
                    modal 
                    && 
                    <div style={{zIndex:'12', background:'#f2eded'}} className='rounded flex flex-col justify-center items-center border absolute h-[300px] w-[700px] top-[120px] right-[230px] shadow-lg'>
                    <div className='flex flex-col'>
                        <form
                            // onSubmit={insertImage}
                            action='http://localhost:5000/addAirlines'
                            method='post'
                            encType='multipart/form-data'
                        >
                            <div>
                                <input name='name' className='w-full rounded-sm px-2 text-sm h-8' type="text" placeholder='Name' /> <br />
                                <input name='location' className='w-full mt-2 rounded-sm px-2 text-sm h-8' type="text" placeholder='Location' /> <br />
                                <input name='telephone' className='w-full mt-2 rounded-sm px-2 text-sm h-8' type="text" placeholder='telephone' /> <br />
                                <input name='phone' className='w-full mt-2 rounded-sm px-2 text-sm h-8' type="text" placeholder='Phone' /> <br />
                                <input name='email' className='w-full mt-2 rounded-sm px-2 text-sm h-8' type="text" placeholder='Email' /> <br />
                                <input name='website' className='w-full mt-2 rounded-sm px-2 text-sm h-8' type="text" placeholder='Website' /> <br />
                                
                                <button 
                                onClick={()=> setModal(!modal)} 
                                className='btn btn-sm font-bold text-white hover:bg-primary shadow bg-[#ad99b2]  border-0 rounded-full mt-12 absolute top-[-45px] right-[5px]'>X</button>
                            </div>

                            <input 
                            type="submit" 
                            value="Save and continue" 
                            className='font-semibold text-white hover:bg-primary shadow bg-[#ad99b2]  border-0 mt-4 w-[200px] py-1 rounded-sm' />
                        </form>
                    </div>
                </div>
                }
            
            {/*Edit events modal */}


             {/*Edit image modal */}
             {
                editModal 
                && 
                <div style={{zIndex:'12', background:'#f2eded'}} className='rounded flex flex-col justify-center items-center border absolute h-[300px] w-[700px] top-[120px] right-[230px] shadow-lg'>
                    <div>
                        <h1 className='pb-4 text-2xl font-semibold'>Update Our events page</h1>
                        <form
                            // onSubmit={insertImage}
                            action='http://localhost:5000/editAirlines'
                            method='post'
                            encType='multipart/form-data'
                        >
                            <div>
                                <input name='name' className='w-full rounded-sm px-2 text-sm h-8' type="text" placeholder='Name' /> <br />
                                <input name='location' className='w-full mt-2 rounded-sm px-2 text-sm h-8' type="text" placeholder='Location' /> <br />
                                <input name='telephone' className='w-full mt-2 rounded-sm px-2 text-sm h-8' type="text" placeholder='telephone' /> <br />
                                <input name='phone' className='w-full mt-2 rounded-sm px-2 text-sm h-8' type="text" placeholder='Phone' /> <br />
                                <input name='email' className='w-full mt-2 rounded-sm px-2 text-sm h-8' type="text" placeholder='Email' /> <br />
                                <input name='website' className='w-full mt-2 rounded-sm px-2 text-sm h-8' type="text" placeholder='Website' /> <br />
                                <input type="text" name='id' value={updatedId} hidden />
                                <button 
                                onClick={()=> setModal(!modal)} 
                                className='btn btn-sm font-bold text-white hover:bg-primary shadow bg-[#ad99b2]  border-0 rounded-full mt-12 absolute top-[-45px] right-[5px]'>X</button>
                            </div>

                            <input 
                            type="submit" 
                            value="Save and continue" 
                            className='font-semibold text-white hover:bg-primary shadow bg-[#ad99b2]  border-0 mt-4 w-[200px] py-1 rounded-sm' />
                        </form>
                        <button onClick={()=> setEditModal(!editModal)} className='btn btn-sm font-bold text-white hover:bg-primary shadow bg-[#ad99b2]  border-0 rounded-full mt-12 absolute top-[-45px] right-[5px]'>X</button>
                    </div>
                </div>
            }
            {/* End modal */}
            
            <ToastContainer />
        </div>
    );
};

export default AllAirlines;