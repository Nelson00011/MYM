import * as React from 'react';
import { Input } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { shades } from "../theme";
import { useState } from 'react'; 

// import classes from './AuthForm.module.css';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


function HomePage({ token }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoginMode, setIsLoginMode] = useState(true);
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickLogin = (event) => {
    setIsLogin(!isLogin)
  }

  const switchModeHandler = (event) => {
    setIsLogin(prevMode => !prevMode)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: email,
      password: password,
    });
  };
  
const googleAuth = () => {
  window.open(
    `${process.env.REACT_URL}/auth/google/callback`,
    "_self"
  );
}

  return (
    <ThemeProvider theme={defaultTheme}>
       <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://news.cgtn.com/news/3d3d414f7a45544f34457a6333566d54/img/3358de90f79c48beb04f693f990ee0d4/3358de90f79c48beb04f693f990ee0d4.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: shades.secondary[700]}}>
              <AutoAwesomeIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            {isLogin ? 'Log in' : 'Create New User'}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(evt)=> setEmail(evt.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(evt)=> setPassword(evt.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              {isLogin ? 'Sign in' : 'Create Account'}
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link variant="body2" onClick={onClickLogin}>
                  {isLogin ? "Don't have an account? Sign Up" :  "Have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>

          </Box>
         <Box>
              <Button onClick={googleAuth}>
                <span>Sign in With Google</span>
              </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default HomePage;
