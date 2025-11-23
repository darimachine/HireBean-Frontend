import { BrowserRouter, Route, Routes, Outlet } from 'react-router';
import Home from 'pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/jobs/:id" element={<JobDetails />} /> */}
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
};
export default Router;
