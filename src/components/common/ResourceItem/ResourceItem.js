import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// For more complex UI: https://codesandbox.io/s/p4yfgw?file=/demo.tsx

//import {Wrapper} from './style';

const ResourceItem = ({title, children}) => (
    //<Wrapper>
        <Box sx={{ width: 275, textAlign: "center", display: "inline-block", margin: "auto", padding: "15px" }}>
            <Card variant="outlined" sx={{display: "block", marginLeft: "auto", marginRight: "auto"}}>{card}</Card>
        </Box>
   // </Wrapper>
);

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardHeader 
        title="hello there"
    />
    <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Review Seminar
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions style={{ alignItems: "center", justifyContent: "center"}}>
      <Button size="small" variant="contained">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default ResourceItem;