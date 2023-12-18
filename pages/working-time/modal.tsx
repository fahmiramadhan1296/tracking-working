import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import styled from "./_styles";
import { IModalWorkingTime } from "./workingTimeModel";

const WorkingTimeModal: React.FC<IModalWorkingTime> = (props) => {
  const { workingTimeData } = props;
  const renderClock = (data: string) => {
    const splitString = data?.split("");

    return (
      <Stack direction={"row"} spacing={1}>
        {splitString?.map((spl: string, index: number) => {
          if (spl === ":") {
            return (
              <Typography
                key={index}
                variant="h1"
                sx={styled?.modalContentText}
              >
                {spl}
              </Typography>
            );
          } else {
            return (
              <Box sx={styled?.modalContent} key={index}>
                <Typography variant="h1" sx={styled?.modalContentText}>
                  {spl}
                </Typography>
              </Box>
            );
          }
        })}
      </Stack>
    );
  };
  console.log(workingTimeData.isGreen);
  return (
    <Dialog open={props?.isOpen ?? false} maxWidth={"md"} fullWidth={true}>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Stack sx={styled?.modalContainer}>
          <h1>TIME GO HOME</h1>
          <Stack
            sx={{
              ...styled?.modalContentContainer,
              backgroundColor: workingTimeData.isGreen ? "green" : "red",
            }}
            direction={"row"}
            spacing={1}
          >
            {renderClock(workingTimeData?.timeGoHome ?? "")}
          </Stack>
        </Stack>
        {/* <Stack sx={styled?.modalContainer}>
          <h1>REMAINING TIME AT OFFICE</h1>
          <Stack
            sx={{
              ...styled?.modalContentContainer,
              flexDirection: "column",
              gap: 3,
            }}
            direction={"row"}
            spacing={1}
          >
            {workingTimeData?.remainingTime.map((time: any) => (
              <Typography key={time} variant="h3" sx={styled?.modalContentText}>
                {time}
              </Typography>
              // <h1 key={time}>{time}</h1>
            ))}
          </Stack>
        </Stack> */}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            if (props?.handleModalOpen) props?.handleModalOpen(false);
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorkingTimeModal;
