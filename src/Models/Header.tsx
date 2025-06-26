import * as React from "react";
import { Link } from "react-router";
import { logoWeb } from "../assets/picture";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

interface Props {
  window?: () => Window;
}
interface TypeLink {
  path: string;
  title: string;
}
const drawerWidth = 240;
const navItems: TypeLink[] = [
  {
    path: "/course",
    title: "Course",
  },
  {
    path: "/quize",
    title: "Quize ",
  },
];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      component="div"
      onClick={handleDrawerToggle}
      className="bg-secondary  h-full "
    >
      <Box component="div" className="bg-white">
        <Box
          component="img"
          src={logoWeb}
          className=" w-full h-full object-fill p-5"
          sx={{ flexGrow: 1 }}
        />
      </Box>

      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding className="border-b-2 border-black">
            <Link to={item.path}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="header"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <CssBaseline />
      <Container>
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "white",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "white",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <Menu sx={{ color: "#766ddd", fontSize: "2.5rem" }} />
            </IconButton>
            <Box component="div" className="w-1/4">
              <Box
                component="img"
                src={logoWeb}
                className=" h-full w-3/5 lg:p-5 object-fill "
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </Box>
            <Box
              component="div"
              className="w-2/4"
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "start",
              }}
            >
              {navItems.map((item, index) => (
                <Link key={index} to={item.path}>
                  <Button
                    sx={{
                      color: "#766ddd",
                      textTransform: "capitalize",
                      fontSize: { xs: "1rem", lg: "1.5rem" },
                      fontWeight: "bold",
                      marginLeft: "1rem",
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{}}>
        <Toolbar />
      </Box>
    </Box>
  );
}
