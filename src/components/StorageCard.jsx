import { useMemo, useState } from "react";
import {
    Box, Stack, Chip, Grid, Card, CardContent, CardHeader,
    Accordion, AccordionSummary, AccordionDetails, Typography, Button,
    Table, TableHead, TableRow, TableCell, TableBody
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ScienceIcon from "@mui/icons-material/Science";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import IcecreamIcon from "@mui/icons-material/Icecream";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const METHODS = [
    {
        key: "cooling",
        title: "Soğutma",
        icon: <KitchenIcon />,
        category: "Genel",
        summary: "1–4 °C’de bakteri üremesi yavaşlar; çiğ ve pişmiş gıdaları ayrı tut.",
        details: {
            pros: ["Pratik ve hızlı", "Günlük kullanım için ideal"],
            cons: ["Süre sınırlı", "Raf düzeni önemli"],
            warning: "Rafları aşırı doldurma; hava akışı kalsın.",
        },
        durationTip: "Çoğu pişmiş yemek: 3–4 gün",
    },
    {
        key: "freezing",
        title: "Dondurma",
        icon: <AcUnitIcon />,
        category: "Et & Genel",
        summary: "−18…−22 °C’de uzun süre saklama. Hava geçirmez paket şart.",
        details: {
            pros: ["Aylarca tazelik", "İsrafı azaltır"],
            cons: ["Çöz-yeniden dondurma yok", "Yanık riski (doğru paketlenmezse)"],
            warning: "Çözülen gıdayı tekrar dondurma.",
        },
        durationTip: "Kırmızı et: 6–12 ay; tavuk: 6–9 ay",
    },
    {
        key: "curing",
        title: "Tuzlama",
        icon: <ScienceIcon />,
        category: "Sebze",
        summary: "Tuz, su aktivitesini düşürerek bakterileri sınırlar.",
        details: {
            pros: ["Uzun ömür", "Fermente aromalar"],
            cons: ["Sodyum artışı", "Teknik doğru uygulanmalı"],
            warning: "Tuzu homojen dağıt; temiz kap kullan.",
        },
        durationTip: "Turşular: 6–12 ay (serin, karanlık)",
    },
    {
        key: "canning",
        title: "Konserveleme",
        icon: <RestaurantIcon />,
        category: "Sebze & Sos",
        summary: "Hava geçirmez kavanoz + ısıl işlemle oksijen uzaklaştırılır.",
        details: {
            pros: ["Oda sıcaklığında aylarca"],
            cons: ["Teknik hassas", "Kapak şişmesi riski"],
            warning: "Kapağı şişen, sızıntı yapan konserveleri tüketme.",
        },
        durationTip: "Asitli ürünler: 12–18 ay",
    },
    {
        key: "sugaring",
        title: "Şekerleme",
        icon: <IcecreamIcon />,
        category: "Meyve",
        summary: "Meyvedeki suyu şekere bağlayarak mikrobiyal gelişimi sınırlar.",
        details: {
            pros: ["Tatlı ürünler (reçel/marmelat)", "Oda sıcaklığında belirli süre"],
            cons: ["Yüksek şeker", "Kıvam tutturma gerekli"],
            warning: "Temiz kavanoz kullan; kapağı iyi kapat.",
        },
        durationTip: "Açılmamış reçel: 6–12 ay; açıldıktan sonra buzdolabı",
    },
    {
        key: "vacuum",
        title: "Vakumlama",
        icon: <Inventory2Icon />,
        category: "Et & Genel",
        summary: "Oksijeni uzaklaştırarak tat, koku ve dokuyu daha iyi korur.",
        details: {
            pros: ["Kaliteyi korur", "Dondurma yanığını azaltır"],
            cons: ["Cihaz/paket gerekir", "Tek başına ısıl işlem değildir"],
            warning: "Buzdolabında/derin dondurucuda sakla; açılınca hızla tüket.",
        },
        durationTip: "Vakumlu et (soğutma): 1–2 hafta; (dondurma): 6–12 ay",
    },
];

const CATEGORIES = ["Tümü", "Genel", "Et & Genel", "Sebze", "Sebze & Sos", "Meyve"];

export default function StorageExtras() {
    const [query, setQuery] = useState("");
    const [cat, setCat] = useState("Tümü");

    const filtered = useMemo(() => {
        return METHODS.filter((m) => {
            const okCat = cat === "Tümü" || m.category === cat;
            const okQ =
                !query ||
                m.title.toLowerCase().includes(query.toLowerCase()) ||
                m.summary.toLowerCase().includes(query.toLowerCase());
            return okCat && okQ;
        });
    }, [cat, query]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <Box sx={{ px: { xs: 2, md: 4 }, py: 3 }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {CATEGORIES.map((c) => (
                        <Chip
                            key={c}
                            label={c}
                            color={c === cat ? "success" : "default"}
                            variant={c === cat ? "filled" : "outlined"}
                            onClick={() => setCat(c)}
                        />
                    ))}
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="success" onClick={handlePrint}>PDF / Yazdır</Button>
                </Stack>
            </Stack>

            <Grid container spacing={2} sx={{ mt: 2 }}>
                {filtered.map((m) => (
                    <Grid item key={m.key} xs={12} sm={6} md={4} lg={3} >
                        <Card elevation={4} sx={{ height: "100%"}}>
                            <CardHeader
                                avatar={m.icon}
                                title={m.title}
                                subheader={m.category}
                                sx={{ "& .MuiCardHeader-title": { fontWeight: 700 } }}
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ mb: 1.5 }}>{m.summary}</Typography>

                                <Accordion disableGutters>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="subtitle2" fontWeight={700}>Detaylar</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="subtitle2">Artıları</Typography>
                                        <ul style={{ marginTop: 4 }}>
                                            {m.details.pros.map((p, i) => (
                                                <li key={i}><Typography variant="body2">{p}</Typography></li>
                                            ))}
                                        </ul>

                                        <Typography variant="subtitle2" sx={{ mt: 1 }}>Eksileri</Typography>
                                        <ul style={{ marginTop: 4 }}>
                                            {m.details.cons.map((p, i) => (
                                                <li key={i}><Typography variant="body2">{p}</Typography></li>
                                            ))}
                                        </ul>

                                        <Typography variant="subtitle2" sx={{ mt: 1 }}>Uyarı</Typography>
                                        <Typography variant="body2">{m.details.warning}</Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Typography variant="caption" sx={{ display: "block", mt: 1.5, color: "text.secondary" }}>
                                    ⏱️ Önerilen süre: {m.durationTip}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                    Hızlı Rehber: Önerilen Saklama Süreleri
                </Typography>
                <Table size="small" style={{ backgroundColor: '#ffff' }}>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#a6b1ab' }}>
                            <TableCell>Gıda</TableCell>
                            <TableCell>Yöntem</TableCell>
                            <TableCell>Önerilen Süre</TableCell>
                            <TableCell>Not</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow><TableCell>Kırmızı et</TableCell><TableCell>Dondurma</TableCell><TableCell>6–12 ay</TableCell><TableCell>Hava geçirmez paket</TableCell></TableRow>
                        <TableRow><TableCell>Tavuk</TableCell><TableCell>Dondurma</TableCell><TableCell>6–9 ay</TableCell><TableCell>Çöz-yeniden dondurma yok</TableCell></TableRow>
                        <TableRow><TableCell>Turşu</TableCell><TableCell>Tuzlama</TableCell><TableCell>6–12 ay</TableCell><TableCell>Serin, karanlık</TableCell></TableRow>
                        <TableRow><TableCell>Domates sos</TableCell><TableCell>Konserve</TableCell><TableCell>12–18 ay</TableCell><TableCell>Kapak şişmemeli</TableCell></TableRow>
                        <TableRow><TableCell>Pişmiş yemek</TableCell><TableCell>Soğutma</TableCell><TableCell>3–4 gün</TableCell><TableCell>1–4 °C</TableCell></TableRow>
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
}
