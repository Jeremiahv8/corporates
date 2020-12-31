import { useState, useEffect } from "react";
import { connect } from "react-redux";

import  LeftSidebar from "./left-sidebar";

const Shop = ({ products }) => {
    return <>
        {Category}
        {/*<LeftSidebar/>*/}
    </>
};

const Category = () => {
    const router = useRouter()
    const { pid } = router.query

    return <p>Category: {pid}</p>
}



export default Category;