import { ReactNode } from 'react';
export interface ProgressHeaderStepType {
    title?: ReactNode;
    active: boolean;
    completed?: boolean;
    hidden?: boolean;
}
export interface ProgressHeaderPropsType {
    type?: 'detailed' | 'simple';
    steps: ProgressHeaderStepType[];
    collapsible?: boolean;
    size?: 'small' | 'large';
}
//# sourceMappingURL=ProgressHeader.types.d.ts.map