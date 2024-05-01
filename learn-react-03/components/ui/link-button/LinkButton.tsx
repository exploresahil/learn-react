import Link, { LinkProps } from "next/link";
import "./style.scss";
import { ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
}

const LinkButton = ({ children, className, ...props }: Props) => {
  return (
    <Link {...props} id="linkBtn">
      {children}
    </Link>
  );
};

export default LinkButton;
