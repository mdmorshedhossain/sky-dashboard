import React from 'react';

const Modal = ({setModal,modal}) => {
    return (
        <div style={{zIndex:'12', background:'#f2eded'}} className='rounded flex flex-col justify-center items-center border absolute h-[300px] w-[700px] top-[120px] right-[230px] shadow-lg'>
            <div>
                <input type="file" name="bannerImage"/>
                <button onClick={()=> setModal(!modal)} className='btn btn-sm font-bold text-white hover:bg-primary shadow bg-[#ad99b2]  border-0 rounded-full mt-12 absolute top-[-45px] right-[5px]'>X</button>
            </div>
        </div>
    );
};

export default Modal;