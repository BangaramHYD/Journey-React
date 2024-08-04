import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Images from '../assets/Bangaram.jpg'
import {MusicPlayer} from './Music';
import TypewriterEffect from './Text';

export default function MediaCard({scroll,message,song}) {
    // const message = `This night is sparkling, don't you let it go
    // I'm wonderstruck, blushing all the way home
    // I'll spend forever wondering if you knew
    // I was enchanted to meet you❤️
    // `
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Images}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            
            {scroll <800 ? "Our college❤️":"All the very Best"}
        </Typography>
        <Typography sx={{ fontSize: '10px' }} variant="body2" color="text.secondary">
        {/* {scroll<900 ? <TypewriterEffect text={message} speed={100}/>:"The Place we meet ❤️"} */}
        {scroll<1000 ? <TypewriterEffect text={message} speed={100}/>:null}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
        {scroll<1000 ? <MusicPlayer song={song}/>:null}
        
      </CardActions>
    </Card>
  );
}
