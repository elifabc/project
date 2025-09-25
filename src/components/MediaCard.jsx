import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Makarna from '../images/makarna.avif'

export default function MediaCard() {

    const recipes = [
        { id: 1, name: 'Makarna', image: 30, title: 'Bir tencereye bolca su ekleyip kaynamaya bırakın, ' +
                'ardından kaynayan suya tuz ekleyin ve içine makarnayı atın. Makarnayı haşlayın, genellikle 8-10 dakika arasında sürebilir. ' +
                'Haşlanan makarnayı süzün, ardından biraz zeytinyağı veya tereyağı ile karıştırın.'},
    ];

    return (

        <Card sx={{ maxWidth: 450, marginLeft:'18px', gap: '10px' }}>
            <CardMedia
                sx={{ height: 190 }}
                image={Makarna}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {recipes[0].name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {recipes[0].title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Detaylara Git</Button>
            </CardActions>
        </Card>
    );
}
