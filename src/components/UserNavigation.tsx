import {Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Typography} from "@mui/material";
import {ContentCut} from "@mui/icons-material";

interface UserNavigationProps {
}

export const UserNavigation = ({}: UserNavigationProps) => {
    return (
        <Grid
            sx={{
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8
            }
            }>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <ContentCut fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘X
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ContentCut fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘X
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ContentCut fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘X
                    </Typography>
                </MenuItem>
            </MenuList>
        </Grid>)
}
