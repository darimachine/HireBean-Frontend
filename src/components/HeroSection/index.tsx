import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Chip,
} from '@mui/material';
import { Search, MapPin } from 'lucide-react';
import { colors } from 'theme/colors';
import styles from './styles.module.css';

const HeroSection = () => (
  <Box sx={{ bgcolor: colors.white, borderBottom: `1px solid ${colors.secondaryGrey3}` }}>
    <Container maxWidth={false} className={styles.container} sx={{ px: { xs: 2, md: 3 } }}>
      <Typography
        variant="h4"
        className={styles.title}
        sx={{ color: colors.primary, mb: 3, fontWeight: 800 }}
      >
        Find your next IT challenge
      </Typography>

      <Paper
        elevation={0}
        className={styles.searchPaper}
        sx={{ bgcolor: colors.secondaryGrey4, maxWidth: '1000px' }}
      >
        <TextField
          fullWidth
          placeholder="Keyword (e.g. Java, React)..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={18} />
              </InputAdornment>
            ),
            sx: { bgcolor: 'white', borderRadius: '6px', '& fieldset': { border: 'none' } },
          }}
        />
        <TextField
          fullWidth
          placeholder="Location..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MapPin size={18} />
              </InputAdornment>
            ),
            sx: { bgcolor: 'white', borderRadius: '6px', '& fieldset': { border: 'none' } },
          }}
        />
        <Button variant="contained" color="secondary" size="large" sx={{ px: 4, fontWeight: 700 }}>
          Search
        </Button>
      </Paper>

      <Box className={styles.trendingContainer}>
        <Typography
          variant="body2"
          className={styles.trendingLabel}
          sx={{ color: colors.primaryGrey1, fontWeight: 600 }}
        >
          Popular Searches:
        </Typography>
        {['Java', 'JavaScript', 'Python', 'DevOps', 'QA', 'Remote'].map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            clickable
            sx={{ bgcolor: colors.secondaryGrey3, color: colors.primary, fontWeight: 500 }}
          />
        ))}
      </Box>
    </Container>
  </Box>
);

export default HeroSection;
