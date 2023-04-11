import { useState} from 'react'
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar"
import "react-pro-sidebar/dist/css/styles.css";
import {Box, IconButton, Typography, useTheme} from'@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import {HomeOutlined, PeopleOutlined, ReceiptOutlined,PersonOutlined,CalendarTodayOutlined,HelpOutlined,
BarChartOutlined, PieChartOutlined,TimelineOutlined, MenuOutlined, MapOutlined, ContactPage} from '@mui/icons-material'





const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
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
            <><Box mb="25px"
            textAlign="center">
              <img src={`../../assets/sticker.png`} alt="profile-user"
                width="75px"
                height="75px"
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
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactPage />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
            </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar