import { React, useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid"
import axios from "axios"

const Home = () => {

    const [scream, setScream] = useState({})

    useEffect(() => { 

        const getScreams = async () => {
           const response =  await axios.get("/screams")
           console.log()
           setScream(response.data)
        } 
        
        getScreams()

    }, [])

    // useEffect( async () => {

    //     const getScreams = await axios.get("/screams")
    //     setScream(getScreams.data) }

    //     , [])

    return (
        <Grid container spacing={16}>
            <Grid item sm={8} xs={12}>
                <p>Content...</p>
            </Grid>
            <Grid item sm={4} xs={12}>
                <p>Profile</p>
            </Grid>
        </Grid>
    );
}

;

export default Home;