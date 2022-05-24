import React from "react";
import { Skeleton, Stack, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import colors from "../constants/colors";

const SkeletonLoader = () => {
  const useStyles = makeStyles({
    loadersArea: {
      paddingTop: "30px",
      paddingLeft: "15%",
      paddingRight: "15%",
      width: "100%",
    },
  });
  const classes = useStyles();

  //   hmm... I din't figure out how to return multiple loaders without mapping smth.
  //   So array of numbers appeared. Let's just agree, this is still better than
  //   copypasting loader 8x times
  const numberOfLoaders = [1, 2, 3, 4, 5, 6, 7, 8];

  const randomWidth = () => {
    return ~~(Math.random() * (140 - 80) + 80);
  };
  const randomColor = (colors) => {
    const keys = Object.keys(colors);
    return colors[keys[(keys.length * Math.random()) << 0]];
  };
  return (
    <>
      <Grid className={classes.loadersArea} container spacing={4}>
        {numberOfLoaders.map((loader, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <Stack
              sx={{
                backgroundColor: randomColor(colors),
                alignItems: "center",
                borderRadius: "25px 100px",
                padding: "20px",
              }}
              align="center"
              spacing={1}
            >
              <Skeleton
                animation="wave"
                align="center"
                width={randomWidth()}
                variant="text"
              ></Skeleton>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton
                sx={{ backgroundColor: randomColor(colors) }}
                variant="rectangular"
                width={210}
                height={118}
              />
              <Skeleton
                animation="wave"
                width={randomWidth()}
                variant="text"
              ></Skeleton>
              <Skeleton
                animation="wave"
                width={randomWidth()}
                variant="text"
              ></Skeleton>
              <Skeleton
                animation="wave"
                width={randomWidth()}
                height={10}
                variant="rectangular"
              ></Skeleton>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkeletonLoader;
