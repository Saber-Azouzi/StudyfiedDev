import "./HomePage.css";

import { Container } from "@mui/material";
import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function Home() {
  const [sets, setSets] = React.useState(/*[
    {
      id: "1",
      topic: "Maths",
      description: "Maths is the study of numbers, shapes and patterns",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "2",
      topic: "Science",
      description: "Science is the study of the world around us",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "3",
      topic: "English",
      description: "English is the study of the English language",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "4",
      topic: "History",
      description: "History is the study of the past",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "5",
      topic: "Geography",
      description: "Geography is the study of the earth",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "6",
      topic: "Art",
      description: "Art is the study of creativity",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "7",
      topic: "Music",
      description: "Music is the study of sound",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "8",
      topic: "Physical Education",
      description: "Physical Education is the study of physical fitness",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "9",
      topic: "Religious Education",
      description: "Religious Education is the study of religion",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "10",
      topic: "Computing",
      description: "Computing is the study of computers",
      creationTime: "2021-10-10T14:48:00",
    },
  ]
  */[]);

  const L = sets.length;
  let [leftIndex, setLeftIndex] = React.useState(0);
  let [rightIndex, setRightIndex] = React.useState(2);
  let [disableNextBtn, setDisableNextBtn] = React.useState(false);
  let [disablePrevBtn, setDisablePrevBtn] = React.useState(true);
  let leftindex: number = 0;
  let rightindex: number = 2;
  const [currentSets, setCurrentSets] = React.useState(sets.slice(0, 2 + 1));

  const handleNextSets = () => {
    leftindex = leftIndex + 3;
    rightindex = rightIndex + 3;

    let nextSets = sets.slice(leftindex, rightindex + 1);

    if (rightindex > L - 1) {
      setDisableNextBtn(true);

      nextSets = sets.slice(L - 3, L);
      setCurrentSets(nextSets);

      setLeftIndex(L - 3);
      setRightIndex(L - 1);
    } else {
      setLeftIndex(leftindex);
      setRightIndex(rightindex);
      setDisablePrevBtn(false);
      setCurrentSets(nextSets);
    }
  };

  const handlePrevSets = () => {
    leftindex = leftIndex - 2;
    rightindex = rightIndex - 2;

    if (leftindex < 0) {
      setLeftIndex(0);
      setRightIndex(2);
      setDisablePrevBtn(true);
      let prevSets = sets.slice(0, 3);
      setCurrentSets(prevSets);
    } else {
      setLeftIndex(leftindex);
      setRightIndex(rightindex);
      let prevSets = sets.slice(leftindex, rightindex + 1);
      setDisableNextBtn(false);
      setCurrentSets(prevSets);
    }
  };

  const bull = (
    <Box
      component="span"
      sx={{
        bgcolor: "tomato",
        display: "inline-block",
        mx: "7px",
        transform: "scale(0.8)",
      }}
    >
      •
    </Box>
  );

  return (
    <div className="page-content m-5">




   


      
      {sets.length !== 0? (
   <div className="sets-container">


   <div
id="slider"
className="flex flex-row space-x-7 justify-center card-container  "
style={{
margin: "100px",
}}
>
{currentSets.map((set) => {
return (
 <Card
   variant="outlined"
   sx={{
     border: "1px solid #f3f2f2",
     borderRadius: 7,
     boxShadow: " 0px 5px 6px 1px rgba(0, 0, 0, 0.2)",
     width: 275,
   }}
   className="card"
 >
   <React.Fragment>
     <CardContent
       sx={{
         display: "flex",
         flexDirection: "column",
         alignItems: "flex-start",
         width: "100%",
       }}
     >
       <Typography
         variant="h5"
         sx={{
           textWeight: "bold",
           textTransform: "capitalize",
           marginLeft: 1,
           marginTop: 1,
           marginBottom: 2,
         }}
         component="div"
       >
         {set && set.topic}
       </Typography>

       <Typography sx={{ textAlign: "left" }}>
         {set?.description}
       </Typography>
       <Typography
         sx={{ mb: 1, fontSize: "medium", marginTop: 2 }}
         color="text.secondary"
       >
         {set.creationTime}
       </Typography>
     </CardContent>

     <CardActions>
       <button className="learn-more" style={{}}>
         Learn more
       </button>
     </CardActions>
   </React.Fragment>
 </Card>
);
return null;
})}
</div>
</div>

      ):
      (
<Card
      variant="outlined"
      sx={{
        border: "1px solid #f3f2f2",
        borderRadius: 7,
        boxShadow: " 0px 5px 6px 1px rgba(0, 0, 0, 0.2)",
        width: 275,
        bgcolor: "#f3f2f2",
      }}
      className="add-card"
    >
      <React.Fragment>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
<div className="add-icon">
<AddCircleOutlineIcon />

  </div>        


          <Typography
            sx={{ mb: 1, fontSize: "medium", marginTop: 2 }}
            color="text.secondary"
          >
            create a new set 
          </Typography>
        </CardContent>

        <CardActions>
         
        </CardActions>
      </React.Fragment>
    </Card>

      ) }
  
      {/* <div className="navigation-buttons" style={{}}>
        <button
          className="Scroll-Btn Prev-Btn"
          disabled={disablePrevBtn}
          onClick={handlePrevSets}
        >
          <ArrowBackIosNewIcon />
        </button>
        <button
          className="Scroll-Btn Next-Btn"
          disabled={disableNextBtn}
          onClick={handleNextSets}
        >
          <ArrowForwardIosIcon />
        </button>
      </div> */}
    </div>
  );
}
export default Home;
