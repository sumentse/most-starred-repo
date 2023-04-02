import PropTypes from "prop-types";
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
import { styled } from "@mui/material/styles";
import { useState, useRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { blue } from "@mui/material/colors";
import StatsInfo from "@components/StatsInfo";

const Styled = {
  ProfileBackground: styled(Box)(() => {
    return {
      background: blue[300],
      height: 100,
      width: "100%",
    };
  }),
};

const RepoCard = ({
  name,
  watcherCount,
  forkCount,
  starCount,
  description,
  owner,
  menuItems,
}) => {
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
      sx={{
        width: {
          xs: 300,
          sm: "100%",
        },
        height: 450,
        margin: "auto",
        position: "relative",
      }}
    >
      <Box>
        <Styled.ProfileBackground />
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
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: "bottom-start",
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
                            <Link
                              href={externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                color: "black",
                                textDecoration: "none",
                              }}
                            >
                              {label}
                            </Link>
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
          <Box
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              textAlign: "center"
            }}
          >
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontWeight: "bold",
              }}
            >
              {name}
            </Typography>
          </Box>
          <Box sx={{ overflowY: "auto", height: 100 }}>
            <Typography sx={{ mt: 1 }} variant="body2">
              {description}
            </Typography>
          </Box>
        </Box>
        <StatsInfo
          borderTopColor={blue[100]}
          forkCount={forkCount}
          watcherCount={watcherCount}
          starCount={starCount}
        />
      </CardContent>
    </Card>
  );
};

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string,
  forkCount: PropTypes.number.isRequired,
  starCount: PropTypes.number.isRequired,
  watcherCount: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      externalUrl: PropTypes.string,
      onClick: PropTypes.func,
    })
  ).isRequired,
};

export default RepoCard;
