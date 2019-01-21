import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RightPane from './RightPane'
import LeftPane from './LeftPane'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({exercises, category}) =>
  <Grid container spacing={16}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises])=>
          !category || category===group ?
          <Fragment>
          <Typography variant="headline" style={{textTransform: "Capitalize"}}>{group}</Typography>
          {exercises.map((exercise)=>

            <List component="ul">
             <ListItem button>
               <ListItemText primary={exercise.title} />
             </ListItem>
           </List>

          )}


       </Fragment>
       : null
        )}
      </Paper>
  </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">
            Welcome!
        </Typography>
        <Typography variant="subheading" style={{marginTop: 20}}s>
            Please select an exercise.
        </Typography>
      </Paper>
  </Grid>
  </Grid>
