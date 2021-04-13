import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Button from './Button.jsx';
import Icon from './Icon.jsx';

const container = document.querySelector('#modal');

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  box-sizing: content-box;
  letter-spacing: 0.5px;
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .75);
`;

const StyledCloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 7px 10px;
  font-size: 1.25em;
  opacity: .5;

  &:hover, &:focus {
    opacity: 1;
  }
`;

const StyledContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 25px;
  transform: translate(-50%, -50%);
  background: rgba(17, 17, 17, .75);
  border: 2px solid #333;
  border-radius: 10px;

  & :nth-child(2) {
    margin-top: 0;
  }

  & :last-child {
    margin-bottom: 0;
  }
`;

const Modal = (props) => {
  const { children, onClose } = props;

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  return ReactDOM.createPortal((
    <StyledModal ref={ref}>
      <StyledBackground onClick={onClose} />
      <StyledContent>
        <StyledCloseButton label="Close" onClick={onClose}>
          <Icon name="times-circle" />
        </StyledCloseButton>
        {children}
      </StyledContent>
    </StyledModal>
  ), container);
};

export default Modal;
