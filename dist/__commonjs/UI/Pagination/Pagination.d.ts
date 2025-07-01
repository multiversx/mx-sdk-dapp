/// <reference types="react" />
import { WithStylesImportType } from 'hocs/useStyles';
import { WithClassnameType } from 'UI/types';
export interface PaginationPropsType extends WithStylesImportType, WithClassnameType {
    onPageChange: (page: number) => void;
    currentPage: number;
    totalPages: number;
    isDisabled?: boolean;
    showLabels?: boolean;
    showEdgeButtons?: boolean;
    disabledClassName?: string;
    buttonsClassNames?: string;
}
export declare const Pagination: (props: PaginationPropsType) => JSX.Element;
//# sourceMappingURL=Pagination.d.ts.map