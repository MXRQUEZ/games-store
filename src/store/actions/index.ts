import * as AuthActions from "./auth";
import * as ModalActions from "./modals";
import * as OrderActions from "./order";
import * as ProductActions from "./products";

export default {
  ...AuthActions,
  ...ModalActions,
  ...OrderActions,
  ...ProductActions,
};
