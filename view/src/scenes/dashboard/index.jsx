import { Box,Button, IconButton, Typography, useTheme } from "@mui/material"
import {tokens} from "../../theme"
import Header from "../../components/Header"
import { mockTransactions } from "../../data/mockData"
import { DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material"
import LineChart from "../../components/LineChart"
import BarChart from "../../components/BarChart"
import PieChart from "../../components/PieChart"
import GeographyChart from "../../components/GeographyChart"
import StatBox from "../../components/StatBox"
import ProgressCircle from "../../components/ProgressCircle"


const Dashboard = () => {
  const theme=useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title ="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
      <Box>
        <Button
        sx={{
          backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding:"10ps 20px"
        }}>
            <DownloadOutlined sx={{ mr: "10px"}} />
            Download Reports
        </Button>
      </Box>

        {/* Grid & Charts */}
        <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        >
          {/* Row 1 */}
          <Box gridColums ="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress = "0.75"
              increase ="+14%"
              icon = {
                <Email sx={{color: colors.greenAccent[600], fontSize: "26px"}} /> 
              }
            />

          </Box>
          <Box gridColums ="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          >
            <StatBox
              title="431,225"
              subtitle="Sales Obtained"
              progress = "0.5"
              increase ="+21%"
              icon = {
                <PointOfSale sx={{color: colors.greenAccent[600], fontSize: "26px"}} /> 
              }
            />

          </Box>
          <Box gridColums ="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          >
            <StatBox
              title="32,441"
              subtitle="New Clients"
              progress = "0.30"
              increase ="+5%"
              icon = {
                <PersonAdd sx={{color: colors.greenAccent[600], fontSize: "26px"}} /> 
              }
            />

          </Box>
          <Box gridColums ="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          >
            <StatBox
              title="1,325,134"
              subtitle="Traffic Inbound"
              progress = "0.80"
              increase ="+43%"
              icon = {
                <Traffic sx={{color: colors.greenAccent[600], fontSize: "26px"}} /> 
              }
            />

          </Box>
        </Box>
    </Box>
  )
}

export default Dashboard