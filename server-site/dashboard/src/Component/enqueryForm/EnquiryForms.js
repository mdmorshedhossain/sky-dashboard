import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';

const EnquiryForms = () => {
    const [images, setImages] = useState([]);
    const [refetch, setRefetch] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:5000/enquiry')
        .then(res => res.json())
        .then(data => {
            setImages(data)
            console.log(data);
        })
    },[refetch])

    // Delete enquiry
    const deleteImage = (id) =>{
         console.log(id);

        fetch(`http://localhost:5000/deleteEnquiry/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
          }).then(res => {
            alert('successfully delete image');
          });
          setRefetch(!refetch)
    }

    const columnsData = [
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Phone', field: 'phone' },
        { title: 'Comments', field: 'comments' }   
    ]
    return (
        <div style={{margin:'30px 10px 0px 10px', width:'100%',heigh:'full'}} className=''>
            <div style={{position:'relative'}} className='itemsList '>
                <MaterialTable
                    style={{padding:'10px'}}
                    title="Positioning Actions Column Preview"
                    columns={columnsData}
                    data={images}
                    actions={[
                        
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
        </div>
    );
};

export default EnquiryForms;