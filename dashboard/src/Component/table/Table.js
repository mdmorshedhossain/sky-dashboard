import React from 'react';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import '../table/Table.css'

const Table = () => {
    const columnsData = [
        { title: 'Requision No', field: 'requisionNo' },
        { title: 'Requisitor', field: 'requisitor' },
        // { title: 'Supplier Short Code', field: 'supplierShortCode', render:(row)=> <img className='h-8 w-24 rounded mx-auto' src={row.supplierShortCode}/> },
        { title: 'Date', field: 'date' },
        { title: 'Item List', field: 'itemList' },
        { title: 'Product Qty.', field: 'productQuantity' },
        { title: 'Total Cost', field: 'totalCost' },
        { title: 'Status', field: 'status' },
        // { title: 'Action', field: 'action' }
    ]

    const rowData = [
        {
            requisionNo: '1111',
            requisitor:'Jakob Karason',
            // image:'https://www.nethravidyalaya.org/wp-content/uploads/2018/01/man-dummy.jpg',
            supplierShortCode: 'http://www.squarepharma.com.bd/images/medical-periodicals/square-newslatter-th.jpg',
            date: '16-12-12',
            itemList:'100 Types',
            productQuantity:'200 Box',
            totalCost: '2000',
            status: 'pending',
            action: ''
        },
        {
            requisionNo: '2222',
            requisitor:'Jakob Karason',
            // image:'https://www.nethravidyalaya.org/wp-content/uploads/2018/01/man-dummy.jpg',
            supplierShortCode: 'http://www.squarepharma.com.bd/images/medical-periodicals/square-newslatter-th.jpg',
            date: '16-12-12',
            itemList:'100 Types',
            productQuantity:'200 Box',
            totalCost: '2000',
            status: 'pending',
            action: ''
        },
        {
            requisionNo: '3333',
            requisitor:'Jakob Karason',
            // image:'https://www.nethravidyalaya.org/wp-content/uploads/2018/01/man-dummy.jpg',
            supplierShortCode: 'http://www.squarepharma.com.bd/images/medical-periodicals/square-newslatter-th.jpg',
            date: '16-12-12',
            itemList:'100 Types',
            productQuantity:'200 Box',
            totalCost: '2000',
            status: 'pending',
            action: ''
        },
        {
            requisionNo: '3333',
            requisitor:'Jakob Karason',
            // image:'https://www.nethravidyalaya.org/wp-content/uploads/2018/01/man-dummy.jpg',
            supplierShortCode: 'http://www.squarepharma.com.bd/images/medical-periodicals/square-newslatter-th.jpg',
            date: '16-12-12',
            itemList:'100 Types',
            productQuantity:'200 Box',
            totalCost: '2000',
            status: 'pending',
            action: ''
        },
        {
            requisionNo: '3333',
            requisitor:'Jakob Karason',
            // image:'https://www.nethravidyalaya.org/wp-content/uploads/2018/01/man-dummy.jpg',
            supplierShortCode: 'http://www.squarepharma.com.bd/images/medical-periodicals/square-newslatter-th.jpg',
            date: '16-12-12',
            itemList:'100 Types',
            productQuantity:'200 Box',
            totalCost: '2000',
            status: 'pending',
            action: ''
        },
        {
            requisionNo: '3333',
            requisitor:'Jakob Karason',
            // image:'https://www.nethravidyalaya.org/wp-content/uploads/2018/01/man-dummy.jpg',
            supplierShortCode: 'http://www.squarepharma.com.bd/images/medical-periodicals/square-newslatter-th.jpg',
            date: '16-12-12',
            itemList:'100 Types',
            productQuantity:'200 Box',
            totalCost: '2000',
            status: 'pending',
            action: ''
        },
        {
            requisionNo: '3333',
            requisitor:'Jakob Karason',
            // image:'https://www.nethravidyalaya.org/wp-content/uploads/2018/01/man-dummy.jpg',
            supplierShortCode: 'http://www.squarepharma.com.bd/images/medical-periodicals/square-newslatter-th.jpg',
            date: '16-12-12',
            itemList:'100 Types',
            productQuantity:'200 Box',
            totalCost: '2000',
            status: 'pending',
            action: ''
        },
        {
            requisionNo: '3333',
            requisitor:'Jakob Karason',
            // image:'https://www.nethravidyalaya.org/wp-content/uploads/2018/01/man-dummy.jpg',
            supplierShortCode: 'http://www.squarepharma.com.bd/images/medical-periodicals/square-newslatter-th.jpg',
            date: '16-12-12',
            itemList:'100 Types',
            productQuantity:'200 Box',
            totalCost: '2000',
            status: 'pending',
            action: ''
        },
        {
            requisionNo: '3333',
            requisitor:'Jakob Karason',
            // image:'https://www.nethravidyalaya.org/wp-content/uploads/2018/01/man-dummy.jpg',
            supplierShortCode: 'http://www.squarepharma.com.bd/images/medical-periodicals/square-newslatter-th.jpg',
            date: '16-12-12',
            itemList:'100 Types',
            productQuantity:'200 Box',
            totalCost: '2000',
            status: 'pending',
            action: ''
        },
    ]
    return (
        <div style={{margin:'30px 10px 0px 10px', width:'100%',heigh:'full'}} className=''>
            <div style={{position:'relative'}} className='itemsList '>
                <div style={{position:'absolute', zIndex:'1', top:'26px',right:'10px'}}>
                    <Link style={{textDecoration:'none'}} to='/'>
                        <p style={{
                            background:'#4B49AC', 
                            color:'white',
                            width:'100px', 
                            borderRadius:'5px', 
                            padding:'5px',
                            }}>
                            Add New
                        </p>
                    </Link>
                </div>
                <MaterialTable
                    style={{padding:'10px'}}
                    title="Positioning Actions Column Preview"
                    columns={columnsData}
                    data={rowData}
                    actions={[
                        {
                        icon: 'edit',
                        tooltip: 'Edit requisition',
                        iconProps: { style: { fontSize: "1rem"} },
                        onClick: (event, rowData) => alert("You Edit " + rowData.name)
                        },
                        rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Requisition',
                        iconProps: { style: { fontSize: "1rem" } },
                        onClick: (event, rowData) => alert("You want to delete " + rowData.name),
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

                    // components={{
                    //     Toolbar: (props) => <div>
                    //         <p>Create new</p>
                    //     </div>
                    //   }}
                    />

            </div>
        </div>
    );
};

export default Table;