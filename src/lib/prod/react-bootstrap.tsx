import React from 'react';
import { exportLibrary } from 'lib/helpers';

const Toast = () => <React.Fragment></React.Fragment>;
const Modal = () => <React.Fragment></React.Fragment>;

const mock = { Toast, Modal };
const library = exportLibrary('react-bootstrap', mock);

export default library;
