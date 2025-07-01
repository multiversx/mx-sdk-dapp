import { MouseEvent } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { WithStylesImportType } from 'hocs/useStyles';
import { WithClassnameType } from 'UI/types';
interface PaginationEdgeButtonPropsType extends WithClassnameType, WithStylesImportType {
    label: string;
    isInactive: boolean;
    showLabels?: boolean;
    paginationButtonIcon: IconDefinition;
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
}
export declare const PaginationEdgeButton: (props: PaginationEdgeButtonPropsType) => JSX.Element;
export {};
//# sourceMappingURL=PaginationEdgeButton.d.ts.map