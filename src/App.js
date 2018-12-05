import React, { Component } from 'react';
import logo from './images/Encriptación.jpg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import spacing from '@material-ui/core/styles/spacing';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
const classes = {
  root: {
    flexGrow: 1,
    
  },
  paper: {
   //padding: theme.spacing.unit * 2,
   padding: spacing.unit *2,
    textAlign: 'center',
   // color: ''
  },
  card: {
    maxWidth: 345,
  },

  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1:18,
      number2:18,
      number3:18,
      positionTop: 200, // Just so the popover can be spotted more easily
      positionLeft: 400, // Same as above
    }
  }


  handleNumberInputChange = key => event => {
    if(event.target.value > 5 && event.target.value<24){
      let number= event==='number1'?this.state.number2:this.state.number2;
      const valor = parseInt(event.target.value, 10);
      const value3 = 54 - valor - number;
      this.setState({
        [key]: parseInt(event.target.value, 10),
        number3:value3,
      });
    }

  };

  componentDidUpdate( prevState ) {
    if (  this.state.changue ===true ) {
        const numberRest= 54- this.state.number1- this.state.number2;
        this.setState({number3:numberRest,changue:false });
  
        // return response
    }
  }

  render() {
    const {
      positionTop,
      positionLeft,
      number1,
      number2,
      number3,
    } = this.state;
      return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
            <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="240"
          src= {logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" component="h2">
            Encríptamelo
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl className="App-Formcontrol">
              <InputLabel className="App-inputLabel" >Letras con método de sustitución</InputLabel>
              <Input
                className="App-input"
                id="position-top"
                type="number"
                value={number1}
                onChange={this.handleNumberInputChange('number1')}
              />
            </FormControl>
            &nbsp;
            <FormControl className="App-Formcontrol">
              <InputLabel className="App-inputLabel" >Letras con método de inversión</InputLabel>
              <Input
                className="App-input"
                id="position-left"
                type="number"
                value={number2}
                onChange={this.handleNumberInputChange('number2')}
              />
            </FormControl>
            &nbsp;
            <FormControl className="App-Formcontrol">
              <InputLabel className="App-inputLabel" >Letras con método de transposición</InputLabel>
              <Input
                className="App-input"
                id="position-left"
                type="number"
                value={number3}
               // onChange={this.handleNumberInputChange('positionLeft')}
              />
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="position-top">anchorPosition.top</InputLabel>
              <Input
                id="position-top"
                type="number"
                value={positionTop}
                onChange={this.handleNumberInputChange("positionTop")}
              />
            </FormControl>
          </Grid>
        </div>
      );
    
  }
}

export default withStyles(classes)(App);
//export default App;
