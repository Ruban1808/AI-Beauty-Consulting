import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 4, textAlign: "center", backgroundColor: "#F5F5F5" }}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          Welcome to AI Beauty Consulting!
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Use the sidebar to navigate through the admin dashboard.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Dashboard;
