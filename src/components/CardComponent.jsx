import { Grid,Paper,Divider } from '@mui/material'
import React from 'react'

export default function CardComponent(props) {

    const {location} = props; 

  return (
    <div>
        <Grid sx={{ flexGrow: 1 }} container spacing={2} className="grid">
        <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          { location.state.rowData.map((item) => (
            <Grid key={item.id} item>
              <Paper
                sx={{
                  height: 140,
                  width: 300,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <div className='cardDetails'>
                    <h3>{item.name}</h3>
                    <p>Rs.{item.price}</p>
                </div>
            </Paper>
            </Grid>
          ))}
        </Grid>
        </Grid>
        </Grid>
        <div className='divider'>
            <Divider variant="middle"/>
        </div>
        <div>
            <h1>Total: Rs.{location.state.totalPrice}</h1>
        </div>
    </div>
  )
}
