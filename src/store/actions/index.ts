import * as AuthActions from "./auth";
import * as ModalActions from "./modals";
import * as OrderActions from "./order";

export default {
  ...AuthActions,
  ...ModalActions,
  ...OrderActions,
};
