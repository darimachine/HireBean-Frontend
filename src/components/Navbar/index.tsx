import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import { Bell, Menu } from 'lucide-react';
import { colors } from 'theme/colors';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar
    position="sticky"
    color="inherit"
    elevation={0}
    className={styles.appBar}
    sx={{
      bgcolor: colors.white,
      borderBottom: `1px solid ${colors.secondaryGrey3}`,
      zIndex: (theme) => theme.zIndex.drawer + 1
    }}
  >
    {/* px: 3 гарантира, че логото е подравнено с филтрите отдолу */}
    <Container maxWidth={false} sx={{ px: { xs: 2, md: 3 } }}>
      <Toolbar disableGutters className={styles.toolbar}>
        <Box className={styles.logoContainer} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            color="secondary"
            sx={{
              fontWeight: 900,
              letterSpacing: '-0.5px',
              textDecoration: 'none',
              fontSize: '1.8rem',
              lineHeight: 1,
              mr: 4,
              fontFamily: '"Inter", sans-serif'
            }}
          >
            HireBean<span style={{ color: colors.primary, fontSize: '2.2rem', lineHeight: 0 }}>.</span>
          </Typography>

          <Box className={styles.navLinks} sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {['Job Board', 'Companies', 'IT Events', 'AI Tools'].map((item) => (
              <Button
                key={item}
                color="inherit"
                component={Link}
                to="/jobs"
                sx={{
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: colors.primary,
                  textTransform: 'uppercase',
                  px: 2,
                  '&:hover': { color: colors.secondary1, bgcolor: 'transparent' }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Box>

        <Box className={styles.actionsContainer}>
          <IconButton sx={{ mr: 1 }}>
            <Bell size={22} color={colors.primaryGrey1} />
          </IconButton>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              borderRadius: '6px',
              fontWeight: 600,
              borderWidth: '1px',
              mr: 1
            }}
          >
            For Employers
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ borderRadius: '6px', px: 3, fontWeight: 700, boxShadow: 'none' }}
          >
            Sign In
          </Button>

          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}>
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;