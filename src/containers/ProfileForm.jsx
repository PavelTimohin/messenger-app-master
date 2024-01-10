import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const theme = createTheme();

const ProfileForm = ({
  firstName,
  lastName,
  photoUrl,
  onSettingsClick,
  onFindFriendsClick,
  onMessageClick,
  onLogoutClick,
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Box sx={{ mt: 4 }}>
      <label htmlFor="upload-photo">
        <input hidden accept="image/*" id="upload-photo" type="file" />
        <IconButton color="primary" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <Avatar alt={`${firstName} ${lastName}`} src={photoUrl} sx={{ width: 150, height: 150 }} />
    </Box>
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" component="h1">{`${firstName} ${lastName}`}</Typography>
      <Box sx={{ mt: 2 }}>
        <Button onClick={onSettingsClick} sx={{ mr: 1 }}>
        Messages
        </Button>
        <Button onClick={onFindFriendsClick} sx={{ mr: 1 }}>
          Find Friends
        </Button>
        <Button onClick={onMessageClick} sx={{ mr: 1 }}>
        Settings
        </Button>
        <Button onClick={onLogoutClick} variant="outlined">
          Logout
        </Button>
      </Box>
    </Box>
  </Box>
);

ProfileForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  onFindFriendsClick: PropTypes.func.isRequired,
  onMessageClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ mb: 4 }}>
          <ProfileForm
            firstName="Timohin"
            lastName="Pavel"
            photoUrl="https://source.unsplash.com/random"
            onSettingsClick={() => console.log('Settings clicked')}
            onFindFriendsClick={() => console.log('Find friends clicked')}
            onMessageClick={() => console.log('Message clicked')}
            onLogoutClick={() => console.log('Logout clicked')}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {''}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}