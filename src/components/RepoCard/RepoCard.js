import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Grow,
  Paper,
  MenuList,
  IconButton,
  MenuItem,
  Popper,
  Tooltip,
  Link,
  ClickAwayListener,
} from "@mui/material";
import {styled} from '@mui/material/styles';
import { useState, useRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { blue } from "@mui/material/colors";

const StyledLink = styled(Link)(()=>{
  return {
    color: 'black',
    textDecoration: 'none'
  }
})

const RepoCard = ({ name, starCount, description, owner, menuItems }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const menuPressAndClose = (handler) => (event) => {
    handler?.();
    handleClose(event);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{ width: 300, height: 400, position: "relative" }}
    >
      <Box>
        <Tooltip title="Card menu">
          <IconButton
            ref={anchorRef}
            aira-label="more"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ position: "absolute", top: 10, right: 5, zIndex: 2 }}
          >
            <MoreVertIcon sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          sx={{ zIndex: 2 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {menuItems.map(({ label, menuPress, externalUrl }) => {
                      return (
                        <MenuItem
                          key={label}
                          onClick={menuPressAndClose(menuPress)}
                        >
                          {externalUrl ? (
                            <StyledLink
                              href={externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {label}
                            </StyledLink>
                          ) : (
                            label
                          )}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>

      <Box sx={{ bgcolor: blue[300], height: 100, width: "100%" }} />

      <CardContent>
        <Box
          sx={{
            margin: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            pt: 2,
          }}
        >
          <Avatar
            alt={`${owner.login} avatar`}
            src={owner.avatar_url}
            sx={{
              width: 150,
              height: 150,
              margin: "auto",
            }}
          />
        </Box>
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Box sx={{ overflowY: "auto", height: 100 }}>
            <Typography sx={{ mt: 1 }} variant="body2">
              {description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RepoCard;
