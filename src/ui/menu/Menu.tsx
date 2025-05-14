import Link from "next/link";

import s from "./menu.module.scss";

export const Menu = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <li className={s.menu__item}>
          <Link href="/">Главная</Link>
        </li>
        <li className={s.menu__item}>
          <Link href="/create-room">Создать комнату</Link>
        </li>
        <li className={s.menu__item}>
          <Link href="/find-room">Найти комнату</Link>
        </li>
      </ul>
    </nav>
  );
};
