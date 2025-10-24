import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import TextField from '@mui/material/TextField';
import { useRef, useState } from "react";
import {Box, DialogContentText} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function AddRecipe() {
    const [open, setOpen] = useState(false);
    const fileInputRef = useRef(null);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleCapture = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Seçilen dosya:", file);
        }
    };

    return (
        <React.Fragment>
            <AddIcon
                ariant="contained"
                color="success"
                onClick={handleClickOpen}
            />

            <BootstrapDialog
                fullWidth
                maxWidth="sm"
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle
                    sx={{ m: 0, p: 2 }}
                    id="customized-dialog-title"
                    style={{ fontSize: '35px', fontFamily: 'initial' }}
                >
                    Yeni Tarif Ekle
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent dividers>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                        }}
                    >
                        <TextField id="recipeName" label="Tarif Adı" variant="filled" />
                        <TextField id="recipeCategory" label="Tarif Kategorisi" variant="filled" />
                        <TextField id="ingredients" label="Gereken Malzemeler" variant="filled" />
                        <TextField id="recipeMaking" label="Tarifin Yapılışı" variant="filled" multiline minRows={3} maxRows={10}/>
                    </Box>

                    <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={handleCapture}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            gap: 1,
                            color: "grey",
                            mt: 2,
                            cursor: "pointer",
                        }}
                        onClick={handleClick}
                    >
                        <CameraAltIcon fontSize="small" />
                        <Typography variant="body2" sx={{ color: "grey" }}>
                            Görsel ile Ürünü Gir
                        </Typography>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button variant="outlined" color="error" onClick={handleClose}>
                        Çıkış
                    </Button>
                    <Button variant="outlined" color="success" onClick={handleClose}>
                        Kaydet
                    </Button>
                </DialogActions>


            </BootstrapDialog>
        </React.Fragment>
    );
}
