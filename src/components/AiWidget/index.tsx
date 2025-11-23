import { Paper, Box, Typography, Button } from '@mui/material';
import { Bot, User } from 'lucide-react';
import { colors } from 'theme/colors';
import styles from './styles.module.css';

const aiTools = [
  { title: "Cover Letter AI", icon: <Bot size={18} />, desc: "Let AI write your motivation" },
  { title: "Interview Prep", icon: <User size={18} />, desc: "Mock questions" },
];

const AiAssistantWidget = () => {
  return (
    <Paper
      className={styles.container}
      sx={{ bgcolor: colors.primary, color: 'white' }}
    >
      <Box className={styles.header}>
        <Bot color={colors.secondary2} />
        <Typography variant="h6">HireBean AI</Typography>
      </Box>
      <Typography variant="body2" className={styles.description} sx={{ color: colors.primaryGrey3 }}>
        Boost your hiring process with our AI tools.
      </Typography>

      <Box className={styles.buttonContainer}>
        {aiTools.map((tool) => (
          <Button
            key={tool.title}
            variant="contained"
            fullWidth
            startIcon={tool.icon}
            className={styles.toolButton}
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
            }}
          >
            {tool.title}
          </Button>
        ))}
      </Box>
    </Paper>
  );
};

export default AiAssistantWidget;