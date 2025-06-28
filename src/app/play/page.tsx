import { Board, InfoBar } from "@/ui";

import s from "./page.module.scss";

export default function Page() {
  return (
    <div className={s.wrapper}>
      <Board className={s.board} />
      <InfoBar className={s.infobar} />
    </div>
  );
}
