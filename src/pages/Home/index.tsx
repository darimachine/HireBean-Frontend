import { Container, Grid, Box, Typography, Button, CircularProgress } from '@mui/material';
import Navbar from 'components/Navbar';
import HeroSection from 'components/HeroSection';
import JobCard from 'components/JobCard';
import AiAssistantWidget from 'components/AiWidget';
import JobFilters from 'components/JobFilters';
import styles from './styles.module.css';

const Home = () => {
  const isLoading = false;

  const jobs = [
    { id: 1, title: "Senior Java Developer", company: "TechSolutions Ltd", location: "Sofia / Hybrid", salary: "6000 - 9000 BGN", tags: ["Java", "Spring Boot", "AWS"], isNew: true, logo: "TS" },
    { id: 2, title: "Frontend React Developer", company: "CreativeSoft", location: "Remote", salary: "4500 - 7000 BGN", tags: ["React", "TypeScript", "MUI"], isNew: false, logo: "CS" },
    { id: 3, title: "DevOps Engineer", company: "CloudMasters", location: "Plovdiv", salary: "5000 BGN", tags: ["Docker", "K8s"], isNew: true, logo: "CM" },
    { id: 4, title: "Full Stack Engineer", company: "Global IT", location: "Varna", salary: "4000 - 6500 BGN", tags: ["Node.js", "Angular", "MongoDB"], isNew: false, logo: "GI" },
    { id: 5, title: "QA Automation", company: "SoftTest", location: "Sofia", salary: "3500 - 5500 BGN", tags: ["Selenium", "Python"], isNew: true, logo: "ST" },
  ];

  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;

  return (
    <Box className={styles.pageWrapper}>
      <Navbar />
      <HeroSection />

      <Container maxWidth={false} className={styles.mainContainer}>
        <Grid container spacing={3}>

          <Grid size={{xs:12, lg:2, xl:2}} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box className={styles.stickyWrapper}>
              <JobFilters />
            </Box>
          </Grid>

          <Grid size={{xs:12, lg:8, xl:8}} >
            <Box className={styles.listHeader}>
              <Box>
                <Typography variant="h5" className={styles.listTitle}>
                  Latest Job Offers
                </Typography>
                <Typography variant="body2" className={styles.jobsCount}>
                  {jobs.length} active positions found
                </Typography>
              </Box>

              <Button
                variant="outlined"
                color="inherit"
                className={styles.mobileFilterBtn}
                sx={{ display: { lg: 'none' } }}
              >
                Filters
              </Button>
            </Box>

            <Box className={styles.jobsList}>
              {jobs.map((job: any) => (
                <JobCard key={job.id} {...job} />
              ))}
            </Box>

            <Button
              fullWidth
              variant="outlined"
              className={styles.loadMoreBtn}
            >
              Load More Jobs
            </Button>
          </Grid>

          <Grid size={{xs:12, lg:2, xl:2}}  sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box className={styles.stickyWrapper}>
              <AiAssistantWidget />

              <Box className={styles.promoBox}>
                <Typography variant="subtitle2" className={styles.promoTitle}>
                  For Candidates
                </Typography>
                <Typography variant="h6" className={styles.promoHeading}>
                  Get matched with top companies
                </Typography>
                <Button fullWidth variant="contained" color="secondary" className={styles.createProfileBtn}>
                  Create Profile
                </Button>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Home;