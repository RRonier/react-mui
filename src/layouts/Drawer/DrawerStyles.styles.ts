import { styled } from "@mui/material/styles";
import { ListItemButton, Paper } from "@mui/material";

export const DrawerPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  whiteSpace: "nowrap",
  width: 260,
  backgroundColor: "red",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  "&.MuiDrawer-paperAnchorDockedLeft": {
    width: 260,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - ${260}px)`,
    },
  },
}));

export const ToolbarIcon = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const NestedListItem = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
}));
