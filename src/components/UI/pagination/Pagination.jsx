import React from 'react';
import classes from "./Pagination.module.css"
import {useTotalPagesCount} from "../../../hooks/usePagination";
import Button from "../button/Button";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = useTotalPagesCount(totalPages)

    return (
        <div className={classes.pagination__wrapper}>
            {/*{pagesArray.map(p =>*/}
            {/*    <span*/}
            {/*        className={page === p ? `${classes.pagination__item} ${classes.pagination__current}` : `${classes.pagination__item}`}*/}
            {/*        key={p}*/}
            {/*        onClick={() => changePage(p)}*/}
            {/*    >*/}
            {/*        {p}*/}
            {/*    </span>*/}
            {/*)}*/}
            {page <= 1 ? <Button style={{background: '#ffffff', color: '#EAECF0', borderColor: '#EAECF0', cursor: 'default'}} onClick={(e) => e.preventDefault()}>Back</Button> :  <Button onClick={() => changePage(page-1)}>Back</Button>}
            {page >= totalPages ? <Button style={{background: '#ffffff', color: '#EAECF0', borderColor: '#EAECF0', cursor: 'default'}} onClick={(e) => e.preventDefault()}>Next</Button> :  <Button onClick={() => changePage(page+1)}>Back</Button>}
        </div>
    );
};

export default Pagination;