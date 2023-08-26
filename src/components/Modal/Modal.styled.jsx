import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .close-modal {
    background-color: aquamarine;
    padding: 8px 10px;
    margin-left: 30 0px;
  }
  .tab-btn.active {
    background-color: #0808ee;
    color: #fff;
  }
  .tab-btn {
    background-color: #edf907;
    color: #000;
  }
`;

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 25px;
  padding: 25px;
  width: 360px;
  height: 450px;
  overflow: auto;
`;
