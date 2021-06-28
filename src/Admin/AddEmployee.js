import React from 'react';
import clsx from 'clsx';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const currencies = [
    {
      value: 'employee',
      label: 'Employee',
    },
    {
      value: 'manager',
      label: 'Manager',
    },
  
  ];
  
  
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'inline-grid',
      flexWrap: 'wrap',
      padding: '30px 505px',
      height: '25px',
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '40ch',
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '40ch',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }));
  
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

function AddEmployee() {
    const classes = useStyles();


  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });



  // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // }



  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [currency, setCurrency] = React.useState('employee');

  const handlechange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate>
      {/* <InputLabel style={{fontSize: '23px',color:'black',height:'46px'}}>Create An Employee Account</InputLabel> */}

      <ThemeProvider theme={theme}>

        <TextField
          className={classes.margin}
          label="Name"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        <TextField
          className={classes.margin}
          label="E-mail"
          variant="outlined"
          id="mui-theme-provider-outlined-email"
        />


        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>


        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>

        <TextField
          className={classes.margin}
          label="Phone No."
          variant="outlined"
          id="mui-theme-provider-outlined-number"
        />

        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Joining Date"
            type="date"
            defaultValue="2021-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>

        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}

        {/* <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          /> */}

        {/* <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          /> */}


        {/* </MuiPickersUtilsProvider> */}


        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handlechange}
          helperText="Please select your Role"
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </ThemeProvider>
      <br />
      <Button variant="contained" color="primary" style={{ height: "35px", margin: '0px 6px' }}>
        Submit
      </Button>


    </form>
  );
}

export default AddEmployee
