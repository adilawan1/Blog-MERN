import './App.css';
import {Container, AppBar , Typography,Grow,Grid} from '@material-ui/core';
import memories from './image/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Forms';
import useStyles from'./styles';
import {useDispatch} from 'react-redux';
import React, {useEffect,useState} from 'react';
import {getPosts} from './actions/posts';
import Login from './Login';


//import Post from './components/Posts/Post/Post';
function App() {
  const classes =useStyles();
  const dispatch = useDispatch();
  const [currentId,setCurrentId]= useState("");

useEffect(()=>{
  dispatch(getPosts());
},[currentId,dispatch]
);

  return (
 <Container maxwidth="sm">
   <AppBar position="static" className={classes.appBar} color="inherit">
      <Typography variant="h2" className={classes.heading}  align="center"> 
      Memories
      </Typography>
      <img src={memories} className={classes.image}alt="memories" height="60"  />






   </AppBar>
   <Grow in>
     <Container>


     <div align="center">
<Login/>
        </div>








       <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
          <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} />
          </Grid>

       </Grid>
     </Container>
   </Grow>
 </Container>
  );
}

export default App;
