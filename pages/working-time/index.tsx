import type { NextPage } from "next";
import { useCallback, useMemo, useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Box, Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Stack } from "@mui/system";
import { Dayjs } from "dayjs";
import { IModalWorkingTime, IWorkingTime } from "./workingTimeModel";
import WorkingTimeModal from "./modal";
import { format2Number } from "@/utils/common";
import { styled } from "./styles";
import Input from "@/components/atoms/input";
import Dropdown from "@/components/atoms/dropdown";

const timeInOffice = [
  {
    id: "4",
    value: 4,
    label: "4 Hours",
  },
  {
    id: "6",
    value: 6,
    label: "6 Hours",
  },
  {
    id: "8",
    value: 8,
    label: "8 Hours",
  },
];

const WorkingTime: NextPage = () => {
  const initialValue: IWorkingTime = {
    hours: 0,
    minutes: 0,
    lastEntry: null,
    outOffice: null,
    timeInOffice: 6,
  };

  const [pageValue, setPageValue] = useState<IWorkingTime>(initialValue);
  const [modalWorkingTime, setModalWorkingTime] =
    useState<IModalWorkingTime | null>(null);

  const handleOpenModal = (isOpen: boolean) => {
    setModalWorkingTime({
      ...modalWorkingTime,
      isOpen: isOpen,
    });
  };

  const handleChangeState = (
    key: string,
    value: string | number | Dayjs | null | undefined,
    stateData: any
  ) => {
    stateData((prevState: any) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const submit = useCallback(() => {
    let { hours, minutes, timeInOffice } = pageValue;
    const totalHoursInOffice = timeInOffice * 60;
    const currentTime = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    };
    hours = hours * 60; /** convert to minutes */
    const countTimeInWorkArea = hours + minutes;
    const reminderTimeInWorkArea = totalHoursInOffice - countTimeInWorkArea;
    const timeBackToHome = pageValue?.lastEntry?.add(
      reminderTimeInWorkArea,
      "minutes"
    );
    const time = {
      hours: format2Number(Number(timeBackToHome?.hour())),
      minutes: format2Number(Number(timeBackToHome?.minute())),
    };
    const remainingTime = {
      hours:
        Number(timeBackToHome?.hour()) - currentTime.hours > 0
          ? Number(timeBackToHome?.hour()) - currentTime.hours
          : 0,
      minutes:
        Number(timeBackToHome?.minute()) - currentTime.minutes > 0
          ? Number(timeBackToHome?.minute()) - currentTime.minutes
          : 0,
    };

    console.log(remainingTime.hours);
    const mdlData = {
      timeGoHome: `${time?.hours}:${time?.minutes}`,
      remainingTime: [
        `${remainingTime.hours} Hours`,
        `${remainingTime.hours} Minutes`,
      ],
      isGreen: remainingTime.hours === 0 && remainingTime.minutes === 0,
    };
    setModalWorkingTime({
      ...modalWorkingTime,
      isOpen: true,
      workingTimeData: mdlData,
    });
  }, [modalWorkingTime, pageValue]);

  const isEnableSubmitButton = useMemo(() => {
    const { lastEntry } = pageValue;
    return !lastEntry;
  }, [pageValue]);

  const checkMaxNumber = (maxNumber: number, value: number) => {
    return value < maxNumber;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* ----------- Modal ---------- */}
      <WorkingTimeModal
        isOpen={modalWorkingTime?.isOpen}
        workingTimeData={modalWorkingTime?.workingTimeData}
        handleModalOpen={handleOpenModal}
      />
      {/* ---------------------------- */}
      <Stack sx={styled?.container}>
        <Box sx={styled?.containerBox}>
          <Stack spacing={3} padding={3}>
            <Stack spacing={2}>
              <TimePicker
                label="Last Entry"
                value={pageValue?.lastEntry}
                onChange={(ev) =>
                  handleChangeState("lastEntry", ev, setPageValue)
                }
                renderInput={(params) => (
                  <Input {...params} customInput={{ inputColor: "#FFFFFF" }} />
                )}
                ampm={false}
                disableOpenPicker
              />
              <Stack spacing={1} direction={"row"}>
                <Input
                  id="totalHours"
                  label="Hours"
                  variant="outlined"
                  placeholder="hours"
                  type={"number"}
                  value={format2Number(pageValue?.hours)}
                  inputProps={{ maxLength: 1 }}
                  customInput={{ inputColor: "#FFFFFF" }}
                  onChange={(ev) =>
                    checkMaxNumber(6, Number(ev?.target?.value)) &&
                    handleChangeState(
                      "hours",
                      Number(ev?.target?.value),
                      setPageValue
                    )
                  }
                />
                <Input
                  id="totalHours"
                  customInput={{ inputColor: "#FFFFFF" }}
                  label="Minutes"
                  variant="outlined"
                  placeholder="minutes"
                  type={"number"}
                  value={format2Number(pageValue?.minutes)}
                  onChange={(ev) =>
                    checkMaxNumber(60, Number(ev?.target?.value)) &&
                    handleChangeState(
                      "minutes",
                      Number(ev?.target?.value),
                      setPageValue
                    )
                  }
                />
              </Stack>
              <Dropdown
                inputLabel={{
                  label: "Time in Office",
                }}
                select={{
                  onChange: (ev) =>
                    handleChangeState(
                      "timeInOffice",
                      Number(ev?.target?.value),
                      setPageValue
                    ),
                  defaultValue: 6,
                }}
                menuItem={timeInOffice}
              />
            </Stack>

            <Stack spacing={2}>
              <Button
                variant="contained"
                onClick={submit}
                disabled={isEnableSubmitButton}
              >
                Check
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setPageValue(initialValue);
                }}
              >
                Clear
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </LocalizationProvider>
  );
};

export default WorkingTime;
