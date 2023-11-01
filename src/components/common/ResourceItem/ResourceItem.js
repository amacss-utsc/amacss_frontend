import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// For more complex UI: https://codesandbox.io/s/p4yfgw?file=/demo.tsx

//import {Wrapper} from './style';

const ResourceItem = ({ title, key, desc, link }) => (
  //<Wrapper>
  <Box
    key={key}
    sx={{
      textAlign: "center",
      height: "100%",
      margin: "auto",
      padding: "15px",
    }}
  >
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingY: "0.8rem",
      }}
    >
      <CardHeader title={title} />
      {/* <CardMedia
                component="img"
                height="194"
                image="@images\resources\src\images\resources\csca08-final-review-winter-22.jpg"
                alt="CSCA08 Review Seminar"
              /> */}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {desc}
        </Typography>
        {/* <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography> */}
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography> */}
        {/* <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography> */}
      </CardContent>
      <CardActions style={{ alignItems: "center", justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          href={link}
          target="_blank"
          style={{
            color: "black",
            border: "thin solid black",
            backgroundColor: "white",
          }}
        >
          <b>View on Youtube</b>
        </Button>
      </CardActions>
    </Card>
  </Box>
  // </Wrapper>
);

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const card = <React.Fragment></React.Fragment>;

export default ResourceItem;
