// Navigation Bar
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {colors} from "../../../theme/colors.ts";
import {
  Bell,
} from 'lucide-react';
const Navbar = () => (
  <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: `1px solid ${colors.secondaryGrey3}` }}>
    <Container maxWidth="lg">
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Typography variant="h5" color="secondary" sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
            HireBean<span style={{ color: colors.primary }}>.</span>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button color="inherit">Job Board</Button>
            <Button color="inherit">Companies</Button>
            <Button color="inherit">AI Tools</Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton>
            <Bell size={20} color={colors.primaryGrey1} />
          </IconButton>
          <Button variant="outlined" color="primary" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            For Employers
          </Button>
          <Button variant="contained" color="secondary">
            Sign In
          </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
export default Navbar;