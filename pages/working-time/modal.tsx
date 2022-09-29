import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import styled from "./_styles";
import { IModalWorkingTime } from "./workingTimeModel";

const WorkingTimeModal: React.FC<IModalWorkingTime> = (props) => {    
  const renderClock = (data: string) => {
    const splitString = data?.split('');
    
    return(
    <Stack direction={"row"} spacing={1}>
      {
        splitString?.map((spl: string, index: number) => {
          if (spl === ':') {
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
        })
      }
    </Stack>)
  };

  return (
    <Dialog open={props?.isOpen ?? false} maxWidth={"md"} fullWidth={true}>
      <DialogContent>
        <Stack sx={styled?.modalContainer}>
          <Stack
            sx={styled?.modalContentContainer}
            direction={"row"}
            spacing={1}
          >
            {renderClock(props?.workingTimeData ?? "")}
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          if (props?.handleModalOpen) props?.handleModalOpen(false)
        }}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorkingTimeModal;
