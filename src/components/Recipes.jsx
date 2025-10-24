import React from "react";
import Header from "./Header.jsx";
import FixedTags from "./FixedTags.jsx";
import '../css/Recipes.css'
import ComboBox from "./ComboBox.jsx";
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import MediaCard from "./MediaCard.jsx";
import AddRecipe from "./AddRecipe.jsx";
import PageHeader from "./PageHeader.jsx";
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';

function Recipes() {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return(
        <div>
            <Header/>
            <br/>
            <div>
                <PageHeader title={'Tarifler'}/>
            </div>

            <div>
                <div className='fixesTags'>
                    <FixedTags/>
                    <ComboBox/>
                </div>
                <div className='fixesTags' style={{display: 'flex', alignItems: 'center'}}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange} /> }
                        label={<h4 style={{margin: 0, textDecoration:'underline'}}>Dolabına Uygun Tarifleri Göster</h4>} />
                </div> <br/>
            </div>
            <MediaCard/>
            <Tooltip title="Yeni tarif ekle" arrow placement="left">
                <Fab
                    size="large"
                    color="inherit"
                    aria-label="add"
                    sx={{
                        position: 'fixed',
                        right: 'max(16px, env(safe-area-inset-right))',
                        bottom: 'max(16px, env(safe-area-inset-bottom))',
                        zIndex: (theme) => theme.zIndex.tooltip + 1,
                        boxShadow: 6,
                    }}
                >
                    <AddRecipe />
                </Fab>
            </Tooltip>
        </div>
    )
}

export default Recipes