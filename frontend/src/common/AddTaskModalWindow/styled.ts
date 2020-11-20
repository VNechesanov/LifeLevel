import styled from "styled-components";
import Checkbox from "antd/lib/checkbox";
import Modal from "antd/lib/modal";
import { BorderOutlined } from "@ant-design/icons";

import { colors, px } from "src/utils";

export const ModalWrapper = styled(Modal)`
  .ant-modal-header {
    border-bottom: 1px solid ${colors.black};
  }

  .ant-modal-title {
    font-size: ${px(24)};
  }

  .ant-modal-close-x {
    font-size: ${px(24)};
  }

  .ant-modal-footer {
    border-top: none;

    .ant-btn {
      border-color: ${colors.riverBed};
      background: ${colors.riverBed};
      color: white;
      font-size: ${px(14)};
    }
  }
`;

export const Wrapper = styled.div`
  margin-bottom: ${px(20)};
  display: flex;
`;

export const DateWrapper = styled(Wrapper)`
  justify-content: center;
`;

export const PickerWrapper = styled(Wrapper)`
  display: inline-block;
  margin-bottom: 0;

  .ant-picker:first-child {
    margin-right: ${px(24)};
  }
`;

export const Title = styled(Wrapper)`
  color: black;
  font-size: ${px(18)};
  margin-right: ${px(15)};
  margin-bottom: 0;
`;

export const DescriptionWrapper = styled(Wrapper)`
  flex-direction: column;
`;

export const CheckboxWrapper = styled(Checkbox)<{ color: string }>`
  position: relative;
  font-size: ${px(24)};

  .ant-checkbox-wrapper {
    font-size: ${px(24)};
  }

  .ant-checkbox-inner {
    background-color: ${(props) => props.color};
    border-color: ${(props) => props.color};
  }

  .ant-checkbox-checked::after {
    border-color: ${(props) => props.color};
  }

  .ant-checkbox-inner {
    width: ${px(35)};
    height: ${px(35)};
  }

  .ant-checkbox-inner::after {
    display: none;
  }
`;

export const CheckMarker = styled(BorderOutlined)`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-52%, -48%);
  color: ${colors.white};
  background-color: ${colors.white};
  border-radius: ${px(1)};
`;

export const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
