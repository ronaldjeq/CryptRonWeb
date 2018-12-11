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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

const classes = {
  root: {
    flexGrow: 1,
    overflow: 'hidden',

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
      abecedario:'a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z',
      sustiTextOr:'i,d,d',
      sustiText:'5,2,6,3',
      encriptado:'ella no te ama',
      value:'inicia',
      positionTop: 200, // Just so the popover can be spotted more easily
      positionLeft: 400, // Same as above
    }
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };



  encript(){
    const {positionTop,
    positionLeft,
    abecedario,
    sustiTextOr,
    sustiText
  } = this.state;

  const fragmentSusti= sustiText.split(',');
  const number= [];
  fragmentSusti.map(item => {
    number.push(parseInt(item));  }) 
  const keyp = sustiTextOr.split(','); 
  let newitem=abecedario.split(',');
  let nnumber=0;
  let nkey=0;
  const newnumber=[];
  const newkeyp=[];
  let indice=0;
  const cript= [];
  let t=indice; //podsition actual
  newitem.map( (letter, key) => {
    if( nkey > keyp.length-1){
      nkey=0;
    }
    if( nnumber > number.length-1){
      nnumber=0;
    }
    newnumber.push(number[nnumber]);
    newkeyp.push(keyp[nkey]);

    nnumber= nnumber+1;
    nkey= nkey+1;
  })

 


  while (indice < newnumber.length){
if(this.state.value ==='inicia' && indice===0 ){
  t=0;
}
 else{
  if(newitem.length === 1){
      t=0;
    } else {
          if( newkeyp[indice]==='i'){
              if ( t - newnumber[indice] >=0){
                t =  t - newnumber[indice];
              } else {
                t =  t - newnumber[indice];
                while( t<0){
                  t = newitem.length  + t; 
                }
              }
          }
          else {

                if ( t + newnumber[indice]  <= newitem.length  ){
                  if(t === 0 && indice===0){
                    t =  t + newnumber[indice]  ;
                  }
                  else{
                    t =  t + newnumber[indice] -1 ;
                  }
                } else {
                  if(t + newnumber[indice] -1 === newitem.length ){
                    t = 0;
                  }
                    else {
                       t =  t + newnumber[indice];
                        let count=1;
                        if(t>newitem.length){
                          while( t>newitem.length ){
                            if(indice!==0){
                            }
                            t =  t- newitem.length; 
                          }
                          t=t-1;
                        }
                    }
                }
          }
          }
 }
  
   
    cript.push(newitem[t]);
    newitem.splice(newitem.indexOf(newitem[t]), 1);
    indice=indice+1;
  }
  //return(cript);
 //console.warn('sustitucion',cript);
  this.setState({encriptado:cript});
}
handleChange2 = event => {
  this.setState({ value: event.target.value });
};
  componentDidUpdate( prevState ) {
  }

  render() {
    const {
      positionTop,
      positionLeft,
      abecedario,
      sustiTextOr,
      sustiText,
      encriptado,
      value
    } = this.state;
    console.log(encriptado)
    console.log(value)
      return (
        <div className="App">
                <h3>ELIGE PRRO</h3>

      <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange2}
          >
            <FormControlLabel value="inicia" control={<Radio />} label="inicia" />
            <FormControlLabel value="empieza" control={<Radio />} label="empieza" />
          </RadioGroup>
        </FormControl>
        <h3>PON ABECEDARIO PRRO</h3>
            <TextField
              id="standard-name"
              label="Name"
              value={this.state.abecedario}
              onChange={this.handleChange('abecedario')}
              margin="normal"
            />

                  <h3>PON EL IDI PRRO</h3>
                  <TextField
                id="standard-name2"
                label="IDI PRRON"
                className={classes.textField}
                value={sustiTextOr}
                onChange={this.handleChange('sustiTextOr')}
                margin="normal"
              />
                                <h3>PON EL NUMERO PRRO</h3>
                                <TextField
                id="standard-name3"
                label="numeros PRRON"
                className={classes.textField}
                value={sustiText}
                onChange={this.handleChange('sustiText')}
                margin="normal"
              />                  

              <h3>DAME CLICK PRRO</h3>
            <Button variant="contained" onClick={() => this.encript()}>
              Default
            </Button>
            <h3>{encriptado}</h3>
        </div>
      );
    
  }
}

export default withStyles(classes)(App);
//export default App;
