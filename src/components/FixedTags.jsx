import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function LimitTags() {
    return (
        <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={product}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
                <TextField {...params} label="Tarif İçin Kullanmak İstediğiniz Malzemeleri Seçiniz" placeholder="Malzemeler" />
            )}
            sx={{ width: '55%', backgroundColor:'#fff',  }}
        />
    );
}

const product = [
    { title: 'Elma'},
    { title: 'Süt'},
    { title: 'Beyaz Şeker'},
    { title: 'Un'},
    { title: 'Pirinç'},
    { title: 'Esmer Şeker' },
    { title: 'Tuz'},
    { title: 'Tereyağı'},
    { title: 'Kaşar Peyniri'},
    { title: 'Kuru Maya'},
    { title: 'Tavuk'},
    { title: 'Patates' },
    { title: 'Patlıcan'},
    { title: 'Kıyma'},
    { title: 'Zeytinyağı'},
    { title: 'Domates'},
    { title: 'Biber Salçası'},
    { title: 'Domates Salçası'},
    { title: 'Kırmızı Biber'},
    { title: 'Yeşil Biber'},
    { title: 'Karabiber' },
];
