import React from "react";
import Header from "./Header.jsx";
import { useNavigate } from "react-router-dom";
import {
    Box, Container, Paper, Stack, Typography, Tabs, Tab, Grid,
    TextField, Button, Snackbar, Alert, Avatar, IconButton,
    InputAdornment, Divider, Dialog, DialogTitle, DialogContent,
    DialogContentText, DialogActions
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LogoutIcon from "@mui/icons-material/Logout";
import SaveIcon from "@mui/icons-material/Save";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PageHeader from "./PageHeader.jsx";

/** ÖRNEK kullanıcı verisi (kendi auth/API’nizden doldurun) */
const initialUser = {
    name: "Elif",
    surname: "Abacı",
    email: "elifabaci@gmail.com",
    phone: "+90 555 555 55 55",
    city: "İstanbul",
    avatarUrl: "",
};

export default function Profile() {
    const navigate = useNavigate();

    const [tab, setTab] = React.useState(0);

    const [user, setUser] = React.useState(initialUser);
    const [saving, setSaving] = React.useState(false);

    const [pwForm, setPwForm] = React.useState({ current: "", next: "", confirm: "" });
    const [showPw, setShowPw] = React.useState({ current: false, next: false, confirm: false });
    const [pwSaving, setPwSaving] = React.useState(false);

    const [snack, setSnack] = React.useState({ open: false, msg: "", severity: "success" });

    const [logoutOpen, setLogoutOpen] = React.useState(false);
    const [deleteOpen, setDeleteOpen] = React.useState(false);

    const fileInputRef = React.useRef(null);
    const handleAvatarPick = () => fileInputRef.current?.click();
    const onAvatarChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setUser((u) => ({ ...u, avatarUrl: url }));
    };

    // Basit doğrulamalar
    const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);
    const profileErrors = {
        name: !user.name ? "Zorunlu" : "",
        email: !user.email ? "Zorunlu" : !isEmailValid(user.email) ? "Geçersiz e-posta" : "",
    };
    const canSaveProfile = !profileErrors.name && !profileErrors.email;

    // 🔒 Şifre validasyonu (ama dokunulana kadar hata gösterme)
    const [pwTouched, setPwTouched] = React.useState({ current: false, next: false, confirm: false });
    const pwErrors = {
        current: !pwForm.current ? "Zorunlu" : "",
        next: pwForm.next && pwForm.next.length < 8 ? "En az 8 karakter" : "",
        confirm: pwForm.confirm && pwForm.confirm !== pwForm.next ? "Şifreler uyuşmuyor" : "",
    };
    const canSavePw =
        pwForm.current.length > 0 &&
        pwForm.next.length >= 8 &&
        pwForm.confirm === pwForm.next;

    // AKSİYONLAR — yerlerine API çağrıları koyun
    const handleSaveProfile = async () => {
        if (!canSaveProfile) return;
        setSaving(true);
        try {
            // await api.updateProfile(user)
            await new Promise((r) => setTimeout(r, 800));
            setSnack({ open: true, msg: "Profil güncellendi.", severity: "success" });
        } catch (e) {
            setSnack({ open: true, msg: "Profil kaydedilirken hata oluştu.", severity: "error" });
        } finally {
            setSaving(false);
        }
    };

    const handleChangePassword = async () => {
        if (!canSavePw) return;
        setPwSaving(true);
        try {
            // await api.changePassword(pwForm)
            await new Promise((r) => setTimeout(r, 800));
            setSnack({ open: true, msg: "Şifren değiştirildi.", severity: "success" });
            setPwForm({ current: "", next: "", confirm: "" });
            setPwTouched({ current: false, next: false, confirm: false });
        } catch (e) {
            setSnack({ open: true, msg: "Şifre değiştirilemedi.", severity: "error" });
        } finally {
            setPwSaving(false);
        }
    };

    const handleLogout = async () => {
        setLogoutOpen(false);
        setSnack({ open: true, msg: "Çıkış yapıldı.", severity: "info" });
        navigate("/login");
    };

    const requestDelete = async () => {
        setDeleteOpen(false);
        setSnack({ open: true, msg: "Hesap silme talebin alındı.", severity: "warning" });
    };

    return (
        <Box>
            <div>
                <Header/>
                <br/>
                <PageHeader title={'Profilim'}/>
                <br/>
            </div>

            <Container maxWidth="md" sx={{py: 3}}>
                <Paper elevation={3} sx={{p: 3, borderRadius: 4, mb: 2}}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ flex: 1, minWidth: 0 }}>
                            <Box sx={{position: "relative"}}>
                                <Avatar src={user.avatarUrl} sx={{width: 88, height: 88, fontSize: 32}}>
                                    {user.name?.[0] || "U"}{user.surname?.[0] || " "}
                                </Avatar>
                            </Box>
                            <Box sx={{flex: 1, minWidth: 0}}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography variant="h6" sx={{fontWeight: 800}} noWrap>{user.name} {user.surname}</Typography>
                                </Stack>
                                <Typography variant="body2" sx={{opacity: 0.75}}>{user.email}</Typography>
                                <Typography variant="body2" sx={{opacity: 0.75}}>{user.city}</Typography>
                                {user.bio && <Typography variant="body2" sx={{mt: 0.5}}>{user.bio}</Typography>}
                            </Box>
                        </Stack>

                        <Stack spacing={1} alignItems="stretch" sx={{ width: { xs: "100%", sm: 180 } }}>
                            <Button
                                color="error"
                                variant="outlined"
                                startIcon={<LogoutIcon/>}
                                onClick={() => setLogoutOpen(true)}
                            >
                                Çıkış Yap
                            </Button>
                            <Button
                                color="error"
                                variant="contained"
                                startIcon={<DeleteForeverIcon/>}
                                onClick={() => setDeleteOpen(true)}
                            >
                                Hesabını Sil
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>

                <Dialog open={logoutOpen} onClose={() => setLogoutOpen(false)}>
                    <DialogTitle>Çıkış yapılsın mı?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Oturumun kapatılacak ve giriş sayfasına yönlendirileceksin.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setLogoutOpen(false)}>Vazgeç</Button>
                        <Button color="error" variant="contained" onClick={handleLogout}>Çıkış Yap</Button>
                    </DialogActions>
                </Dialog>

                <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
                    <DialogTitle>Hesabı Sil</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Hesabını silmek istediğine emin misin? Bu işlem geri alınamaz.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDeleteOpen(false)}>Vazgeç</Button>
                        <Button color="error" variant="contained" onClick={requestDelete}>Evet, Sil</Button>
                    </DialogActions>
                </Dialog>

                <Paper elevation={0} sx={{borderRadius: 4, border: (t) => `1px solid ${t.palette.divider}`}}>
                    <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="fullWidth">
                        <Tab label="Bilgilerim"/>
                        <Tab label="Şifre Değiştir"/>
                    </Tabs>
                    <Divider/>

                    {tab === 0 && (
                        <Box sx={{
                            p: 4,
                        }}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <TextField
                                        label="Ad"
                                        value={user.name}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        error={!!profileErrors.name}
                                        helperText={profileErrors.name}
                                        sx={{ width: '100%', maxWidth: 400 }}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <TextField
                                        label="Soyad"
                                        value={user.surname}
                                        onChange={(e) => setUser({ ...user, surname: e.target.value })}
                                        error={!!profileErrors.surname}
                                        helperText={profileErrors.surname}
                                        sx={{ width: '100%', maxWidth: 400 }}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <TextField
                                        label="E-posta"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        error={!!profileErrors.email}
                                        helperText={profileErrors.email}
                                        sx={{ width: '100%', maxWidth: 400 }}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <TextField
                                        label="Telefon"
                                        value={user.phone}
                                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                        sx={{ width: '100%', maxWidth: 400 }}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <TextField
                                        label="Şehir"
                                        value={user.city}
                                        onChange={(e) => setUser({ ...user, city: e.target.value })}
                                        sx={{ width: '100%', maxWidth: 400 }}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', marginTop: 12}}>
                                    <Stack direction="row" spacing={1}>
                                        <Button
                                            variant="contained"
                                            startIcon={<SaveIcon />}
                                            onClick={handleSaveProfile}
                                            disabled={!canSaveProfile || saving}
                                        >
                                            {saving ? 'Kaydediliyor...' : 'Kaydet'}
                                        </Button>
                                        <Button onClick={() => setUser(initialUser)}>Vazgeç</Button>
                                    </Stack>
                                </Grid>
                            </Grid>

                        </Box>
                    )}

                    {tab === 1 && (
                        <Box sx={{p: 3}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Mevcut Şifre"
                                        fullWidth
                                        type={showPw.current ? "text" : "password"}
                                        value={pwForm.current}
                                        onChange={(e) => setPwForm({...pwForm, current: e.target.value})}
                                        onBlur={() => setPwTouched(s => ({...s, current: true}))}
                                        error={pwTouched.current && !!pwErrors.current}
                                        helperText={pwTouched.current ? pwErrors.current : ""}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => setShowPw(s => ({...s, current: !s.current}))}>
                                                        {showPw.current ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Yeni Şifre"
                                        fullWidth
                                        type={showPw.next ? "text" : "password"}
                                        value={pwForm.next}
                                        onChange={(e) => setPwForm({...pwForm, next: e.target.value})}
                                        onBlur={() => setPwTouched(s => ({...s, next: true}))}
                                        error={pwTouched.next && !!pwErrors.next}
                                        helperText={pwTouched.next ? pwErrors.next : ""}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => setShowPw(s => ({...s, next: !s.next}))}>
                                                        {showPw.next ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Yeni Şifre (Tekrar)"
                                        fullWidth
                                        type={showPw.confirm ? "text" : "password"}
                                        value={pwForm.confirm}
                                        onChange={(e) => setPwForm({...pwForm, confirm: e.target.value})}
                                        onBlur={() => setPwTouched(s => ({...s, confirm: true}))}
                                        error={pwTouched.confirm && !!pwErrors.confirm}
                                        helperText={pwTouched.confirm ? pwErrors.confirm : ""}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => setShowPw(s => ({...s, confirm: !s.confirm}))}>
                                                        {showPw.confirm ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                                        <Button onClick={() => { setPwForm({ current: "", next: "", confirm: "" }); setPwTouched({ current: false, next: false, confirm: false }); }}>
                                            Temizle
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={handleChangePassword}
                                            disabled={!canSavePw || pwSaving}
                                        >
                                            {pwSaving ? "Güncelleniyor..." : "Şifreyi Değiştir"}
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                </Paper>
            </Container>

            <Snackbar
                open={snack.open}
                autoHideDuration={2500}
                onClose={() => setSnack((s) => ({...s, open: false}))}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            >
                <Alert severity={snack.severity} variant="filled" sx={{width: "100%"}}>
                    {snack.msg}
                </Alert>
            </Snackbar>
        </Box>
    );
}
