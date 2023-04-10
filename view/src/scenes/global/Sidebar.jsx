import { useState} from 'react'
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar"
// import 'react-pro-sidebar/dist'
import {Box, IconButton, Typography, useTheme} from'@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import {HomeOutlined, PeopleOutlined, ReceiptOutlined,PersonOutlined,CalendarTodayOutlined,HelpOutlined,
BarChartOutlined, PieChartOutlined,TimelineOutlinedn, MenuOutlined, MapOutlined} from '@mui/icons-material'

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  
  
  return (
    <Box 
    sx={{
      "& .pro-sidebar-inner": {
        background : `${colors.primary[400]} !important`
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important"
      },
      "& .pro-innet-item" : {
        padding: "5px 35px 5px 20px !important"
      },
      "& .pro-inner-item:hover" : {
        color: "#868dfb !important"
      },
      "& .pro-menu-item.active": {
        color : "#6870fa !important"
      }

    }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
            {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlined /> : undefined} 
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
          >
            {!isCollapsed && (
              <Box 
              display ="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)} >
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
              {/* USER  */}
          {!isCollapsed && (
            <><Box mb="25px">
              <img src={`../../assets/sticker.png`} alt="profile-user"
                width="100px"
                height="100px"
                style={{ cursor: "pointer", borderRadius: "50%" }} />
            </Box>
            <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Artis
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box></>
          )}
            </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar