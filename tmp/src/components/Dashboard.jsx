import React, { useState, useEffect } from "react";
import axios from "axios";

// import { use } from "../../../app/routes/hotel-router";
// import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Dashboard() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/hotels ')
      .then(res => {
        // console.log(res.)
        setPosts(res.data)

      })
      .catch(err => {
        console.log(err)
      })
  })
  // // console.log(posts)  
  // const data = posts.map((post, index) => {

  //   return (

  //     <Card sx={{ maxWidth: 345 }} className="m-5 " >

  //       <CardMedia
  //         component="img"
  //         height="140"
  //         image={post.image}
  //         alt="green iguana"
  //       />

  //       <CardContent >
  //         <Typography gutterBottom variant="h5" component="div">
  //           {post.name}
  //         </Typography>
  //         <Typography variant="body2" color="text.secondary">
  //           {post.adresse}
  //         </Typography>
  //       </CardContent>
  //       <CardActions>
  //         <Button size="small">Share</Button>
  //         <Button size="small">reserver</Button>
  //       </CardActions>

  //     </Card>

  //   )
  // })

  return (

    <div>

      <div className='card text-center'>
        <div className='overflow'>

          <img  alt='image 1' />


        </div>
        <div className='card-body text-dark'>
          <h4 className='card-title'></h4>
          <p className="card-text text-secondary">
            Lorem umpsun blabla blablablabl jbjbjkjsq kjqsckjj scugc kjkuyd zdiudbckjqss qsjckqsujdbskj sqkjckqcs
            qskjgshbdnsbdn,wjkx ndsnzid;n klnkjndc

          </p>
          <a href="#" className="btn btn-outline-success">
            Go Anywhere
          </a>

        </div>
      </div>

    </div>
  )

}

export default Dashboard;
