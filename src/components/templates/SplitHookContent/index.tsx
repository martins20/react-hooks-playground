import React from "react";
import Topics from "../../organisms/Topics";

import { Container } from "./styles";

type TSplitContainerProps = {
  topics: string[];
};

const SplitHookContent: React.FC<TSplitContainerProps> = ({
  topics,
  children,
}) => {
  return (
    <Container>
      <section>
        <Topics data={topics} />
      </section>

      <section>{children}</section>
    </Container>
  );
};

export default SplitHookContent;
