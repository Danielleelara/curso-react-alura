import React from "react";
import { useParams } from "react-router";
import ListaPost from "../components/ListaPost";

const Subcategoria =() =>{
    const { subcategoria } = useParams()
    return(
        <ListaPost url={`/posts?subcategoria=${subcategoria}`}/>
    )

}

export default Subcategoria