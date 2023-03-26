import React, { useState } from 'react';
import {  NavLink } from "react-router-dom";
import "./pagination.scss";
import _ from "lodash"

let pageSize = 20;

const Pagination = ({avatarList, getCurrentPage}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const setCurPage = (curPage) => {
        setCurrentPage(curPage);
        getCurrentPage(curPage);
    }
        
    
    const pageCount = Math.ceil(avatarList.length / pageSize);
    if (pageCount <=1) return null;
    const pages = _.range(1, pageCount + 1);

    const onPrevious = () => {
        if (currentPage !== 1)
        setCurPage(currentPage - 1);
    }

    const onNext = () => {
        if (currentPage !== pageCount)
        setCurPage(currentPage + 1);   
    }
    
    return ( 
<nav>
  <ul className="pagination">
                <li className="page-item">
                    <NavLink to={`/${currentPage}`}
                        className={"link-button" + (currentPage === 1 ? " noactive" : "")} href="#"
                        onClick={onPrevious}>Previous
                    </NavLink></li>

                {pages.map((page) => <li className={"page-item" + (page===currentPage? " active" : "") }
                    key={page}
                >
                    <NavLink to={`/${currentPage}`}
                        className="link-button"
                        key={page} onClick={() => setCurPage(page)}>{page}
                    </NavLink></li>   
                )}

                <li className="page-item"><NavLink to={`/${currentPage}`}
                    className={"link-button" + (currentPage === pageCount ? " noactive" : "")}
                    onClick={onNext}>Next
                </NavLink></li>
            </ul>
</nav>

     );
}
 
export default Pagination;