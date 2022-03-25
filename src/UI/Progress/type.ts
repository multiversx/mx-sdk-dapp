export interface Props {
  id: string;
  done: boolean;
  children: React.ReactNode;
  expiresIn?: number;
  progress: {
    startTime: number;
    endTime: number;
  };
}
