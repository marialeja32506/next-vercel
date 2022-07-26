import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: React.FC<Props> = ({ text, href }) => {
  const style: CSSProperties = {
    color: "#0070f3",
    textDecoration: "undeline",
  };

  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
