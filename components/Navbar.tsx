import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const MenuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.menu}>
      {MenuItems.map((item) => (
        <ActiveLink key={item.href} href={item.href} text={item.text} />
      ))}
    </nav>
  );
};
