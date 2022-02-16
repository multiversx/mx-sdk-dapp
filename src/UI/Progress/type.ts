export interface Props {
  id: string;
  done: boolean;
  children: React.ReactNode;
  progress: {
    startTime: number;
    endTime: number;
  };
}
