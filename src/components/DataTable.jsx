import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Malzeme Adı', width: 200 },
    { field: 'dateOfReceipt', headerName: 'Alındığı Tarih', type: "date", width: 170 },
    { field: 'expirationDate', headerName: 'Son Kullanma Tarihi', type: "date", width: 170 },
    { field: 'remainingDate', headerName: 'Kalan Gün', width: 170 },
];

const rows = [
    { id: 1,  name: 'Elma',       dateOfReceipt: new Date('2025-09-20'), expirationDate: new Date('2025-09-27'),     remainingDate:'5'},
    { id: 2,  name: 'Makarna',    dateOfReceipt: new Date('2025-09-18'), expirationDate: new Date('2026-09-18'),     remainingDate:'10'},
    { id: 3,  name: 'Süt',        dateOfReceipt: new Date('2025-09-19'), expirationDate: new Date('2025-09-24'),     remainingDate:'54' },
    { id: 4,  name: 'Muz',        dateOfReceipt: new Date('2025-09-21'), expirationDate: new Date('2025-09-24'),     remainingDate:'53' },
    { id: 5,  name: 'Kaşar',      dateOfReceipt: new Date('2025-09-15'), expirationDate: new Date('2025-10-05'),     remainingDate:'55' },
    { id: 6,  name: 'Susam',      dateOfReceipt: new Date('2025-09-10'), expirationDate: new Date('2026-03-10'),     remainingDate:'73' },
    { id: 7,  name: 'Tereyağı',   dateOfReceipt: new Date('2025-09-12'), expirationDate: new Date('2025-12-12'),     remainingDate:'10' },
    { id: 8,  name: 'Salatalık',  dateOfReceipt: new Date('2025-09-22'), expirationDate: new Date('2025-09-26'),     remainingDate:'0' },
    { id: 9,  name: 'Yufka',      dateOfReceipt: new Date('2025-09-05'), expirationDate: new Date('2025-10-05'),     remainingDate:'18' },
    { id: 10, name: 'Yoğurt',     dateOfReceipt: new Date('2025-09-16'), expirationDate: new Date('2025-09-26'),     remainingDate:'35' },
    { id: 11, name: 'Tavuk',      dateOfReceipt: new Date('2025-09-20'), expirationDate: new Date('2025-09-22'),     remainingDate:'48' },
    { id: 12, name: 'Domates',    dateOfReceipt: new Date('2025-09-23'), expirationDate: new Date('2025-09-28'),     remainingDate:'82' },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable() {
    return (
        <Paper sx={{ width: '100%'  }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 , height: '100%' }}
            />
            <DeleteIcon style={{fontSize:'30px'}}/>
        </Paper>
    );
}
