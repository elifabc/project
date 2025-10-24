import * as React from 'react';
import Header from "./Header.jsx";
import DataTable from "./DataTable.jsx";
import '../css/Pantry.css'
import MediaCard from "./MediaCard.jsx";
import AddProduct from "./AddProduct.jsx";
import PageHeader from "./PageHeader.jsx";

export default function Pantry() {

    return (
        <div>
            <Header/>
            <br/>
            <PageHeader title={'Dolabım'}/>
            <br/>

            <div className='flexRow'>
                <div className='data-table'>
                    <DataTable/>
                </div>
                <div>
                    <AddProduct/>
                    <br/><br/>
                    <h2 className='offer'>Senin İçin Önerilen Tarif:</h2>
                    <MediaCard/>
                </div>
            </div>
        </div>
    )
}
