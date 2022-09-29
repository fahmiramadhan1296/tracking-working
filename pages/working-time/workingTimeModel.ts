import { Dayjs } from "dayjs";

export interface IWorkingTime {
  hours: number;
  minutes: number;
  lastEntry: Dayjs | null | undefined;
  outOffice: Dayjs | null | undefined;
}

export interface IModalWorkingTime {
  isOpen?: boolean | undefined;
  handleModalOpen?: Function;
  workingTimeData?: string ;
}