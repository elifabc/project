import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
    const category = [
        "Tatlılar",
        "Çorbalar",
        "Ana Yemekler",
        "Pilav ve Makarna",
        "Salatalar",
        "Kahvaltılıklar",
        "Atıştırmalıklar",
        "Hamur İşleri",
        "Fırın Ürünleri ",
        "Ekmek Çeşitleri",
        "İçecekler",
        "Vejetaryen",
        "Vegan",
    ];


    return (
        <Autocomplete
            disablePortal
            options={category}
            sx={{ width: '43%', marginLeft:'20px', backgroundColor:'#ffff' }}
            renderInput={(params) => <TextField {...params} label="Tarif Kategorisi" />}
        />
    );
}
