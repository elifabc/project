import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';


import pantryImg   from '../images/pantry.jpg'
import recipesImg  from '../images/recipes.jpg';
import storageImg  from '../images/storage.webp';
import pointImg    from '../images/point.jpeg';


const images = [
    { url: pantryImg,  title: 'Dolabım',            width: '25%' ,    to:"/pantry"},
    { url: recipesImg, title: 'Tarifler',           width: '25%' ,    to: "/recipes"},
    { url: pointImg,   title: 'Puan Durumu',          width: '25%',     to: "/score" },
    { url: storageImg, title: 'Saklama Koşulları',  width: '25%',     to: "/storage" },

];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 250,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': { opacity: 0.15 },
        '& .MuiImageMarked-root': { opacity: 0 },
        '& .MuiTypography-root': { border: '4px solid currentColor' },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    inset: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image) => (
                <ImageButton
                    key={image.title}
                    focusRipple
                    component={RouterLink}          // <Link />
                    to={image.to}                   // hedef rota
                    aria-label={image.title}
                    style={{ width: image.width }}
                    sx={{ textDecoration: 'none' }} // link alt çizgisi olmasın
                >
                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={(theme) => ({
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: `calc(${theme.spacing(1)} + 6px)`,
                            })}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    );
}