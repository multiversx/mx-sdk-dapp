import React, { PropsWithChildren } from 'react';
import { RenderResult } from '@testing-library/react';
import { MemoryHistory } from 'history';
export interface RenderType extends RenderResult {
    history: MemoryHistory;
}
export declare const renderWithProvider: ({ children, route }: {
    children?: React.ReactNode;
} & {
    route?: string | undefined;
}) => RenderType;
//# sourceMappingURL=renderWithProvider.d.ts.map