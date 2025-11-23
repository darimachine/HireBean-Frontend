import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Divider,
} from '@mui/material';
import { colors } from 'theme/colors';

const categories = [
  { label: 'Backend Development', count: 120 },
  { label: 'Frontend Development', count: 85 },
  { label: 'Fullstack Development', count: 64 },
  { label: 'Quality Assurance', count: 42 },
  { label: 'DevOps / SysAdmin', count: 38 },
  { label: 'Mobile Development', count: 25 },
  { label: 'PM / BA / Agile', count: 18 },
  { label: 'Data Science / AI', count: 12 },
];

const technologies = [
  'Java',
  'JavaScript',
  'Python',
  'C#',
  'React',
  'Angular',
  'Spring Boot',
  'AWS',
];

const JobFilters = () => {
  return (
    <Box sx={{ pr: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, color: colors.primary }}>
          Filters
        </Typography>
        <Button size="small" sx={{ color: colors.secondaryGrey1, textTransform: 'none' }}>
          Clear all
        </Button>
      </Box>

      {/* Секция Категории */}
      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: colors.primary }}>
        CATEGORIES
      </Typography>
      <FormGroup sx={{ mb: 3 }}>
        {categories.map((cat) => (
          <FormControlLabel
            key={cat.label}
            control={
              <Checkbox
                size="small"
                sx={{
                  color: colors.primaryGrey2,
                  '&.Mui-checked': { color: colors.secondary1 },
                }}
              />
            }
            label={
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Typography variant="body2" color="text.primary">
                  {cat.label}
                </Typography>
                <Typography variant="caption" sx={{ color: colors.primaryGrey2, ml: 1 }}>
                  ({cat.count})
                </Typography>
              </Box>
            }
            sx={{
              '& .MuiFormControlLabel-label': { width: '100%' },
              mb: 0.5,
            }}
          />
        ))}
      </FormGroup>

      <Divider sx={{ mb: 3 }} />

      {/* Секция Технологии */}
      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: colors.primary }}>
        TECH STACK
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {technologies.map((tech) => (
          <Button
            key={tech}
            variant="outlined"
            size="small"
            sx={{
              borderRadius: '4px',
              color: colors.primaryGrey1,
              borderColor: colors.secondaryGrey3,
              minWidth: 'auto',
              px: 1,
              py: 0.2,
              fontSize: '0.75rem',
              '&:hover': { borderColor: colors.secondary1, color: colors.secondary1 },
            }}
          >
            {tech}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default JobFilters;
