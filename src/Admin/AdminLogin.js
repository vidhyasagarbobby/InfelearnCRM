import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn() {
  const classes = useStyles();
  const [click,setClick]=useState(false);
  const [OTP,setOTP]=useState(null);
  const history =useHistory();

  const handleOTP = async ()=>{
    if(OTP){
      const RE =/^[0-9\b]+$/;
      if (!RE.test(OTP)){
        alert('Enter valid OTP!');
      }
    }
    // fetch().then((otp)=>{
        
    // })
    history.push('/admin/dashboard');
  }

  const handleClick = ()=>{
    setClick(true);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value="admin@infelearn.com"
          />

          {click?<TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="otp"
            label="OTP"
            name="otp"
            autoFocus
            value={OTP}
            onChange={(e)=>{setOTP(e.target.value)}}
          />:''}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>{
              e.preventDefault();
              click?handleOTP():handleClick()
            }}
          >
            {click?'Sign In':'Send OTP'}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                Change Email
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
