"use client";

import { useState } from "react";
import { UtensilsCrossed, Menu as MenuIcon, SearchIcon } from "lucide-react";
import { useRecipesStore } from "@/store/recipeStore";
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  styled,
  InputBase,
  alpha,
} from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export const Navbar = () => {
  const { searchQuery, setSearchQuery } = useRecipesStore();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" color="primary" elevation={1}>
        <Box>
          <Toolbar
            sx={{
              justifyContent: "space-around",
              px: { xs: 2, sm: 3 },
              width: "100%",
              mx: "auto",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <UtensilsCrossed size={25} />
              <Typography variant="h6" component="div" fontWeight={600}>
                Recipe Explorer
              </Typography>
            </Box>

            {isMobile ? (
              <IconButton
                onClick={toggleDrawer(true)}
                edge="end"
                sx={{ color: "white" }}
              >
                <MenuIcon size={24} />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                <Search>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Search>
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  Log In
                </Button>
              </Box>
            )}
          </Toolbar>
        </Box>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            bgcolor: "primary.main",
            color: "white",
          },
        }}
      >
        <Box className="drawer-box" sx={{ width: 280, p: 2 }}>
          <List>
            <ListItem
              sx={{ flexDirection: "column", gap: 2, alignItems: "stretch" }}
            >
              <Search>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Search>
              <Button
                variant="outlined"
                fullWidth
                sx={{ color: "white", borderColor: "white" }}
              >
                Log In
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
