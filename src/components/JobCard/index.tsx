import { Paper, Box, Typography, Chip, Avatar, IconButton, Button } from '@mui/material';
import { MapPin, DollarSign, Bell, ChevronRight } from 'lucide-react';
import { colors } from 'theme/colors.ts';
interface IJobProps {
  id: number | string;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  isNew?: boolean;
  logo?: string;
}
const JobCard = ({
  id: _id,
  title,
  company,
  location,
  salary,
  tags,
  isNew = false,
  logo,
}: IJobProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        mb: 2,
        transition: 'all 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          borderColor: colors.secondary1,
        },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
      }}
    >
      <Avatar
        variant="rounded"
        sx={{
          width: 64,
          height: 64,
          bgcolor: colors.secondaryGrey3,
          color: colors.secondary1,
          fontWeight: 'bold',
        }}
      >
        {logo || company.substring(0, 2).toUpperCase()}
      </Avatar>

      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <Box>
            <Typography variant="h6" sx={{ color: colors.secondary1, mb: 0.5 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, color: colors.primary }}>
              {company}
            </Typography>
          </Box>
          {isNew && (
            <Chip
              label="NEW"
              size="small"
              color="success"
              sx={{ height: 20, fontSize: '0.7rem' }}
            />
          )}
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 1.5,
            mb: 2,
            color: colors.primaryGrey1,
            fontSize: '0.875rem',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <MapPin size={14} /> {location}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <DollarSign size={14} /> {salary}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                borderRadius: '4px',
                bgcolor: colors.secondaryGrey4,
                color: colors.secondary1,
                border: `1px solid ${colors.secondaryGrey3}`,
              }}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1 }}>
        <IconButton size="small" sx={{ alignSelf: 'end', color: colors.primaryGrey2 }}>
          <Bell size={18} />
        </IconButton>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          endIcon={<ChevronRight size={16} />}
        >
          Details
        </Button>
      </Box>
    </Paper>
  );
};
export default JobCard;
