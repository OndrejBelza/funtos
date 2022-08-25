import type { FC } from "react";
import DefaultLayout from "./DafaultLayout";

export type DefaultLayoutContainerProps = {
  children?: React.ReactNode;
};

const DefaultLayoutContainer: FC<DefaultLayoutContainerProps> = ({
  children,
}) => <DefaultLayout>{children}</DefaultLayout>;

export default DefaultLayoutContainer;
