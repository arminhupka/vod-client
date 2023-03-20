import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { ReactElement } from "react";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const MainDrawer = ({ open, onClose }: IProps): ReactElement => (
  <Drawer open={open} onClose={onClose}>
    <List>
      <ListItem>
        <ListItemText>Strona główna</ListItemText>
      </ListItem>
    </List>
  </Drawer>
);

export default MainDrawer;
