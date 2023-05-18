export interface ProgressHeaderStepType {
  title?: string;
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
