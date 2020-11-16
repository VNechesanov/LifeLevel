import styled from "styled-components";
import Checkbox from "antd/lib/checkbox";
import Modal from "antd/lib/modal";

import { colors } from "../../utils/theme";

export const ModalWrapper = styled(Modal)`
  .ant-modal-header {
    border-bottom: 1px solid ${colors.black};
  }

  .ant-modal-title {
    font-size: 24px;
  }

  .ant-modal-close-x {
    font-size: 24px;
  }

  .ant-modal-footer {
    border-top: none;

    .ant-btn {
      border-color: ${colors.riverBed};
      background: ${colors.riverBed};
      color: white;
      font-size: 14px;
    }
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

export const DateWrapper = styled(Wrapper)`
  justify-content: center;
`;

export const PickerWrapper = styled(Wrapper)`
  display: inline-block;
  margin-bottom: 0;

  .ant-picker:first-child {
    margin-right: 24px;
  }
`;

export const Title = styled(Wrapper)`
  color: black;
  font-size: 18px;
  margin-right: 15px;
  margin-bottom: 0;
`;

export const DescriptionWrapper = styled(Wrapper)`
  flex-direction: column;
`;

export const CheckboxWrapper = styled(Checkbox)<{ color: string }>`
  font-size: 24px;

  .ant-checkbox-wrapper {
    font-size: 24px;
  }

  .ant-checkbox-inner {
    background-color: ${(props) => props.color};
    border-color: ${(props) => props.color};
  }

  .ant-checkbox-checked::after {
    border-color: ${(props) => props.color};
  }
`;
