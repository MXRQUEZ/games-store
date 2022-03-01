import { FC } from "react";
import classes from "@/components/ui/forms/products/filter.module.scss";
import Select from "@/components/ui/select/select";

const ProductSelectForm: FC = () => {
  const types = ["Ascending", "Descending"];
  const criteria = ["Name", "Rating", "Price"];

  return (
    <form>
      <h4 className={classes.filter__text}>Sort</h4>
      <ul className={classes.sort}>
        <li className={classes.sort__by}>
          Type
          <Select options={types} />
        </li>
        <li className={classes.sort__by}>
          Criteria
          <Select options={criteria} />
        </li>
      </ul>
    </form>
  );
};

export default ProductSelectForm;
