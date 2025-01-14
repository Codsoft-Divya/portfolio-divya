import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProjectData from '../ProjectData/ProjectData';
import Project1 from '..//..//Assets/Images/Project1.png'
import { Button } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function CustomCards() {
  const { id } = useParams();
  const project = ProjectData.find((p) => p.id === id);
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    project ? (
      <Card sx={{ maxWidth: 1000, margin: '0 auto', marginTop: '10rem'}}>
        <CardHeader
        //   avatar={
        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="project">
        //       {project.projectName.charAt(0)}
        //     </Avatar>
        //   }
        //   action={
        //     <IconButton aria-label="settings">
        //       <MoreVertIcon />
        //     </IconButton>
        //   }
          title={project.projectName}
        //   subheader={project.gitHubURL}
        />
        {project.img && (
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={project.img}
            alt={project.projectName}
          />
        )}
        <CardContent>
          <Typography variant="body2" color="text.primary" style={{ fontSize: '1.25rem' }} dangerouslySetInnerHTML={{ __html: project.projectDescription }} />
        </CardContent>
        <CardActions style={{ justifyContent: 'start' }}>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
          <Button
            variant="contained"
            color="primary"
            href={project.gitHubURL}
            target="_blank"
            rel=""
          >
            GitHub
          </Button>
        </CardActions>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>More details can be added here.</Typography>
          </CardContent>
        </Collapse> */}
      </Card>
    ) : (
      <Typography variant="h6" color="text.secondary">Project not found</Typography>
    )
  );
}