// Search & Filter Section
import {Box, Button, Container, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import {colors} from "../../../theme/colors.ts";
import {MapPin} from "lucide-react";

const HeroSection = () => (
  <Box sx={{ py: 4, bgcolor: colors.white, borderBottom: `1px solid ${colors.secondaryGrey3}` }}>
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 800, color: colors.primary }}>
        Find your next IT challenge
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 1,
          bgcolor: colors.secondaryGrey4,
          border: 'none'
        }}
      >
        <TextField
          fullWidth
          placeholder="Keyword (e.g. Java, React)..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: <InputAdornment position="start"><Search size={18} /></InputAdornment>,
            sx: { bgcolor: 'white', borderRadius: '6px' }
          }}
        />
        <TextField
          fullWidth
          placeholder="Location..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: <InputAdornment position="start"><MapPin size={18} /></InputAdornment>,
            sx: { bgcolor: 'white', borderRadius: '6px' }
          }}
        />
        <Button variant="contained" color="secondary" size="large" sx={{ px: 4 }}>
          Search
        </Button>
      </Paper>

      <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Typography variant="body2" sx={{ pt: 0.5, color: colors.primaryGrey1 }}>Trending:</Typography>
        {['Java', 'JavaScript', 'Python', 'DevOps', 'QA'].map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            clickable
            sx={{ bgcolor: colors.secondaryGrey3, color: colors.primary }}
          />
        ))}
      </Box>
    </Container>
  </Box>
);