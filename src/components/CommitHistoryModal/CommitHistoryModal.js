import PropTypes from "prop-types";
import {
  Modal,
  Box,
  Typography,
  CircularProgress,
  IconButton,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { styled } from "@mui/material/styles";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CancelIcon from "@mui/icons-material/Cancel";
import moment from "moment";

const Styled = {
  Container: styled(Box)(({ theme }) => {
    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "85%",
      height: "80%",
      backgroundColor: theme.palette.background.paper,
      border: `2px solid black`,
      boxShadow: 24,
      borderRadius: 10,
      padding: 10,
    };
  }),
};

const CommitHistoryModal = ({ open, closeModal, commits = [], isLoading }) => {
  const buildCommitTimeline = () => {
    return commits.map(({ commit }) => {
      const { author, message, tree } = commit || {};
      return (
        <TimelineItem key={tree.sha}>
          <TimelineOppositeContent color="text.secondary">
            {moment(author.date).format("M/D/YY h:mm A")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body1">{author.name}</Typography>
            <Typography variant="body2">{message}</Typography>
          </TimelineContent>
        </TimelineItem>
      );
    });
  };

  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-commit-history"
      aria-describedby="a list of commits in last 24 hours"
      keepMounted
    >
      <Styled.Container>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={closeModal} color="error">
            <CancelIcon fontSize="medium" />
          </IconButton>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Commits in last 24 hours
        </Typography>

        {isLoading && (
          <Box
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {!isLoading && (
          <>
            <Typography variant="body1">
              Total commits: {commits.length}
            </Typography>
            {commits.length > 0 && (
              <Box sx={{ overflowY: "auto", height: "inherit" }}>
                <Timeline>{buildCommitTimeline()}</Timeline>
              </Box>
            )}
          </>
        )}
      </Styled.Container>
    </Modal>
  );
};

CommitHistoryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  commits: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CommitHistoryModal;
