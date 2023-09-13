import { StatusFilter } from "components/StatusFilter/StatusFilter";
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
