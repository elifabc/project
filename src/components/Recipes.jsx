import React from "react";
import Header from "./Header.jsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useNavigate} from "react-router-dom";
import FixedTags from "./FixedTags.jsx";
import '../css/Recipes.css'
import ComboBox from "./ComboBox.jsx";
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import MediaCard from "./MediaCard.jsx";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Recipes() {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const navigate = useNavigate();

    return(
        <div>
            <Header/>
            <br/>
            <div className='myPantry'>
                <ArrowBackIosIcon onClick={() => navigate("/")}
                                  style={{marginLeft: '20px'}}/>
                <h1>Tarifler</h1>
                <Box sx={{
                    position: 'fixed',
                    right: 16
                }}>
                    <Fab size="large" color={"inherit"} aria-label="add" >
                        <AddIcon />
                    </Fab>
                </Box>
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
        </div>
    )
}

export default Recipes