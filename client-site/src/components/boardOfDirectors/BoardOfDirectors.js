import React , { useState, useEffect } from 'react';
import board_directory_img from "../../images/board_directory_img.png";
import chairman_img from "../../images/chairman_img.png";
import vice_chairman_img from "../../images/vice_chairman_img.png";


const BoardOfDirectors = () => {

    const [boardOfDirectory, setBoardOfDirectory] = useState([]);
    const [chairman, setChairman] = useState('');
    const [viceChairman, setViceChairman] = useState('');
    const [members, setMembers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/boardOfDirectors')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setChairman(data.find(d => d.title.toLowerCase() === 'chairman'))
            setViceChairman(data.find(d => d.title.toLowerCase() === 'vice chairman'))
            setMembers(data.filter(d => (d.title.toLowerCase() !== 'chairman') || (d.title.toLowerCase() !== 'vice chairman') ))
            setBoardOfDirectory(data)
        })
    },[])

    console.log("directors",chairman, viceChairman, members);

    const [boardDirHead, setBoardDirHead] = useState([
        {
            id: 1,
            image: chairman_img,
            title_name: "Syed Habib Ali",
            rank_name: "Chairman",  
        },
        {
            id: 2,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
    ]);
    const [SubBoardDirHead, setSubBoardDirHead] = useState([
        {
            id: 1,
            image: chairman_img,
            title_name: "Syed Habib Ali",
            rank_name: "Chairman",
        },
        {
            id: 2,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 3,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 4,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 5,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 6,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 7,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 8,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 9,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 10,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 11,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 12,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
        {
            id: 13,
            image: vice_chairman_img,
            title_name: "Mr. S. N. Manzur Murshed",
            rank_name: "Senior Vice Chairman",
        },
    ]);





    return (
        <div className="bg__body">
            <div className="banner_img">
                <img src={board_directory_img} className="img-fluid" alt="board_directory_img" />
                <div className="banner_img_text">
                    <h3 className="text-white">Board of Directors</h3>
                </div>
            </div>
            <div className="container mb-5 pt-4" >
                <div className="row">
                    <div className="col-12">
                        <h3 className="header_text_bold text-center">Board of Directors (2021-2023)</h3>
                        <hr className="board_hr" />
                    </div>
                </div>
                <div className="row gy-5 pt-4">
                    {
                        [1].map((item, id) => {
                            return (
                                <>
                                {/* chairman  */}
                                <div key={id} className="col-12">
                                    <div className="board_head_card">
                                        <div className="board_img">
                                            <img src= {`http://localhost:5000/images/${chairman.image}`} alt="image" />
                                        </div>
                                        <div className="p-0">
                                            <h6 className="board_title">{chairman.name}</h6>
                                            <p className="board_subtitle">{chairman.title}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* vice chairman  */}
                                <div key={id} className="col-12">
                                    <div className="board_head_card">
                                        <div className="board_img">
                                            <img src= {`http://localhost:5000/images/${viceChairman.image}`} alt="image" />
                                        </div>
                                        <div className="p-0">
                                            <h6 className="board_title">{viceChairman.name}</h6>
                                            <p className="board_subtitle">{viceChairman.title}</p>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                    
                    {/* Members  */}
                    <div className="row g-3 pt-3 justify-content-center">
                        {
                            members.length > 0 && members.map((item, id) => {
                                return (
                                    <div key={id} className="col-md-2">
                                        <div className="sub_board_card">
                                            <div className="card">
                                                <div className="sub_board_img">
                                                    <img src= {`http://localhost:5000/images/${item.image}`} alt="image" />
                                                </div>
                                                <div className="p-0">
                                                    <h6 className="sub_board_title">{item.name}</h6>
                                                    <p className="sub_board_subtitle">{item.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardOfDirectors;

