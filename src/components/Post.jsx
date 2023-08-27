import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

function Post({ title, img }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            quos aperiam fuga culpa ipsam quod? Accusamus in voluptates
            molestias autem nemo natus dolorem sit ea fugiat eveniet officiis
            ullam ipsam, iure pariatur eum mollitia est repellat? Neque sit est
            debitis Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Suscipit quos aperiam fuga culpa ipsam quod? Accusamus in voluptates
            molestias autem nemo natus dolorem sit ea fugiat eveniet officiis
            ullam ipsam, iure pariatur eum mollitia est repellat? Neque sit est
            debitis.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
