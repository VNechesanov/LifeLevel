import React, { useCallback, useEffect, useState } from "react";
import _isEmpty from "lodash/isEmpty";

import {
  Control,
  Container,
  ControlWrapper,
  Stub,
  Wrapper,
} from "./commonStyles";
import Card from "src/common/Card/Card";
import { DELTA, KeyValueObj } from "src/utils";

type Props<T> = {
  data: T[];
  visible: boolean;
  stubTitle: string;
  addButtonName: string;
  onClose: (id: string) => void;
  showModal: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const CommonContent = <T extends KeyValueObj>(props: Props<T>) => {
  const {
    data,
    visible,
    stubTitle,
    addButtonName,
    onClose,
    showModal,
    children,
  } = props;

  const [height, setHeight] = useState(window.innerHeight);

  const updateSize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);

    return function cleanup() {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const renderMainContent = useCallback(
    () =>
      data.map((item) => (
        <Card
          info={item.info}
          id={item.id}
          onClose={(id: string) => onClose(id)}
        />
      )),
    [data, onClose]
  );

  return (
    <Container>
      <ControlWrapper>
        <Control type="primary" onClick={showModal}>
          {addButtonName}
        </Control>
      </ControlWrapper>
      {children}
      {!visible && _isEmpty(data) && <Stub>{stubTitle}</Stub>}
      <Wrapper height={height - DELTA}>{renderMainContent()}</Wrapper>
    </Container>
  );
};

export default CommonContent;
