import React from "react";
import Header from "./Header.jsx";
import { useNavigate } from "react-router-dom";
import {
    Box, Container, Paper, Stack, Typography, Avatar, Chip,
    LinearProgress, Divider, Button, Snackbar, Alert, Tooltip, IconButton
} from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PageHeader from "./PageHeader.jsx";

/** ✅ ÖRNEK VERİ (burayı kendi API çağrınla doldur) */
const currentUser = {
    id: 7,
    name: "Elif Abacı",
    avatar: "EA",
    points: 1050,
};

/**  ÖDÜL EŞİKLERİ
 * threshold: puan eşiği,
 * label: ödül metni,
 * code: verilecek kupon kodu (gerçekte backend döndürmeli),
 */

const REWARDS = [
    { id: "r1", threshold: 1000,  label: "Migros %5 indirim",  code: "INDIRIM5-XYZ" },
    { id: "r2", threshold: 2500, label: "Gratis %10 indirim", code: "INDIRIM10-ABC" },
    { id: "r3", threshold: 4000, label: "LC Waikiki %15 indirim", code: "INDIRIM15-QWE" },
];

export default function About() {

    const [claimed, setClaimed] = React.useState(() => ({}));
    const [snack, setSnack] = React.useState({ open: false, msg: "", severity: "success" });

    const points = currentUser.points;

    const nextReward = REWARDS.find(r => r.threshold > points);
    const progressToNext = (() => {
        if (!nextReward) return 100;
        const prev = [...REWARDS].reverse().find(r => r.threshold <= points) || { threshold: 0 };
        const span = nextReward.threshold - prev.threshold;
        const gained = points - prev.threshold;
        return Math.max(0, Math.min(100, Math.round((gained / span) * 100)));
    })();

    const handleClaim = (reward) => {
        if (points < reward.threshold) {
            setSnack({ open: true, msg: `Bu ödül için ${reward.threshold - points} puan daha gerekli.`, severity: "info" });
            return;
        }
        // Normalde burada backend'e "claim" isteği atılır, başarıyla dönünce kod gösterilir.
        setClaimed(prev => ({ ...prev, [reward.id]: true }));
        setSnack({ open: true, msg: `Tebrikler! "${reward.label}" kazandın.`, severity: "success" });
    };

    const copyCode = async (code) => {
        try {
            await navigator.clipboard.writeText(code);
            setSnack({ open: true, msg: "Kod kopyalandı!", severity: "success" });
        } catch {
            setSnack({ open: true, msg: "Kopyalama başarısız oldu.", severity: "error" });
        }
    };

    return (
        <Box>
            <Header/>
            <br/>
            <PageHeader title={'Puan Durumu'}/>

            <Container maxWidth="md" sx={{py: 3}} >

                <Paper elevation={3} sx={{p: 3, borderRadius: 4, mb: 2}}>
                    <Stack direction="row" spacing={2} alignItems="center" style={{}}>
                        <Avatar sx={{width: 64, height: 64, fontSize: 28}}>{currentUser.avatar}</Avatar>
                        <Box sx={{flex: 1, minWidth: 0}}>
                            <Typography variant="h6" sx={{fontWeight: 800}} noWrap>{currentUser.name}</Typography>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{mt: 0.5}}>
                                <Chip color="primary" label={`${points} puan`}/>
                            </Stack>

                            <Box sx={{mt: 2}}>
                                <Stack direction="row" justifyContent="space-between" sx={{mb: 0.5}}>
                                    <Typography variant="caption" sx={{opacity: 0.8}}>
                                        {nextReward
                                            ? `Sıradaki ödül: ${nextReward.label} (${nextReward.threshold} puan)`
                                            : "Tüm ödüller açıldı 🎉"}
                                    </Typography>
                                    <Typography variant="caption">{progressToNext}%</Typography>
                                </Stack>
                                <LinearProgress variant="determinate" value={progressToNext}
                                                sx={{height: 8, borderRadius: 999}}/>
                            </Box>
                        </Box>
                    </Stack>
                </Paper>


                <Paper elevation={0}
                       sx={{p: 2.5, borderRadius: 4, border: theme => `1px solid ${theme.palette.divider}`}}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{mb: 1}}>
                        <RedeemIcon/>
                        <Typography variant="h6" sx={{fontWeight: 800}}>İndirim Kodlarım</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{mb: 2, opacity: 0.8}}>
                        Belirli puan eşiklerine ulaşınca indirim kodları kazanırsın. Kazandıktan sonra kodu
                        kopyalayabilirsin.
                    </Typography>

                    <Stack spacing={1.5}>
                        {REWARDS.map((r, idx) => {
                            const unlocked = points >= r.threshold;
                            const isClaimed = !!claimed[r.id];
                            return (
                                <React.Fragment key={r.id}>
                                    <Stack
                                        direction={{xs: "column", sm: "row"}}
                                        alignItems={{xs: "stretch", sm: "center"}}
                                        spacing={1.5}
                                        sx={{
                                            p: 1.5,
                                            borderRadius: 2,
                                            bgcolor: unlocked ? "success.50" : "background.paper",
                                            border: theme => `1px dashed ${unlocked ? theme.palette.success.light : theme.palette.divider}`
                                        }}
                                    >
                                        <Stack direction="row" spacing={1} alignItems="center" sx={{flex: 1}}>
                                            {unlocked ? (
                                                <CheckCircleIcon color="success"/>
                                            ) : (
                                                <LockIcon color="disabled"/>
                                            )}
                                            <Box sx={{flex: 1, minWidth: 0}}>
                                                <Typography sx={{fontWeight: 700}}>{r.label}</Typography>
                                                <Typography variant="caption" sx={{opacity: 0.7}}>
                                                    Eşik: {r.threshold} puan
                                                    {!unlocked && ` • Kalan: ${Math.max(0, r.threshold - points)} puan`}
                                                </Typography>
                                            </Box>
                                        </Stack>

                                        {unlocked && !isClaimed && (
                                            <Button variant="contained" onClick={() => handleClaim(r)}>Ödülü
                                                Kazan</Button>
                                        )}

                                        {unlocked && isClaimed && (
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Chip color="success" variant="outlined" label={r.code}/>
                                                <Tooltip title="Kodu kopyala">
                                                    <IconButton
                                                        onClick={() => copyCode(r.code)}><ContentCopyIcon/></IconButton>
                                                </Tooltip>
                                            </Stack>
                                        )}

                                        {!unlocked && (
                                            <Button variant="outlined" disabled>
                                                {r.threshold} puanda açılır
                                            </Button>
                                        )}
                                    </Stack>

                                    {idx < REWARDS.length - 1 && <Divider/>}
                                </React.Fragment>
                            );
                        })}
                    </Stack>
                </Paper>

                <Box sx={{mt: 5, textAlign: "center", opacity: 0.8}}>
                    <Typography variant="caption" style={{backgroundColor: '#ffff'}}>
                        Not: Kupon kodları tek kullanımlıktır.
                    </Typography>
                </Box>
            </Container>

            <Snackbar
                open={snack.open}
                autoHideDuration={2500}
                onClose={() => setSnack(s => ({...s, open: false}))}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            >
                <Alert severity={snack.severity} variant="filled" sx={{width: "100%"}}>
                    {snack.msg}
                </Alert>
            </Snackbar>
        </Box>
    );
}
