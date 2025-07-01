import { ReactNode } from 'react';
import { WithClassnameType } from '../types';
export interface ProgressProps extends WithClassnameType {
    id: string;
    done: boolean;
    children: ReactNode;
    expiresIn?: number;
    isCrossShard?: boolean;
    progress: {
        startTime: number;
        endTime: number;
    };
}
export declare const Progress: (props: ProgressProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map