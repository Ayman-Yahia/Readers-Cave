import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from '../styling/ImageCard.module.css';
const useStyles = makeStyles({
    root: {
      // minWidth: "200px",
      // maxWidth:"400px",
      width:"300px",
      height:"300px"
    },
    media: {
      minHeight: "200px",
      // maxWidth:"400px",
      backgroundSize:"100% 100%"
    },
  });
const Item = (props) => {
    const {section} = props;
    const classes = useStyles();

  return (     
    <Card className={classes.root} style={{backgroundColor:"#4c4c4c"}}  style={{color:"white"}} >
      <CardActionArea style={{backgroundColor:"#4c4c4c"}} >
        <CardMedia
          className={classes.media}
          image={section.image}
        />
        <CardContent style={{backgroundColor:"#4c4c4c"}} >
          <Typography gutterBottom variant="h5" component="h2">
          {section.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{backgroundColor:"#4c4c4c"}} style={{color:"white"}}>
          {section.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Item
