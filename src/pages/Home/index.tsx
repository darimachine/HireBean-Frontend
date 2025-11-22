import React from 'react';
import { Container, Grid, Box, Typography, Button, CircularProgress } from '@mui/material';
import { Filter } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import JobCard from "../../components/jobs/JobCard"; // Пример

// import useSWR from 'swr';
// Тук импортваш твоя custom hook или SWR конфигурация

const Home = () => {
  // ПРИМЕРНА ИНТЕГРАЦИЯ С ТВОЯ SWR / API
  // const { data: jobs, error, isLoading } = useSWR('/api/jobs');

  // Мок данни, докато вържеш бекенда:
  const isLoading = false;
  const jobs = [
    { id: 1, title: "Java Dev", company: "Test", location: "Sofia", salary: "5k", tags: ["Java"], isNew: true }
  ];

  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Latest Job Offers</Typography>
              <Button startIcon={<Filter size={16} />} color="inherit">Filters</Button>
            </Box>

            {/* Рендираме обявите динамично */}
            {jobs && jobs.map((job: any) => (
              <JobCard key={job.id} job={job} />
            ))}
          </Grid>

          {/* Тук може да сложиш Sidebar компонента */}
          <Grid item xs={12} md={4}>
            <Typography>Sidebar content...</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;