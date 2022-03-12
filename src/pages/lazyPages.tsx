import { FC, lazy, Suspense } from "react";
import Spinner from "@/components/ui/spinner/spinner";

const About = lazy(() => import("@/pages/about/about"));
const Products = lazy(() => import("@/pages/products/products"));
const UserProfile = lazy(() => import("@/pages/userProfile/userProfile"));
const Order = lazy(() => import("@/pages/order/order"));

export const AboutPage: FC = () => (
  <Suspense fallback={<Spinner />}>
    <About />
  </Suspense>
);

export const ProductsPage: FC = () => (
  <Suspense fallback={<Spinner />}>
    <Products />
  </Suspense>
);

export const ProfilePage: FC = () => (
  <Suspense fallback={<Spinner />}>
    <UserProfile />
  </Suspense>
);

export const OrderPage: FC = () => (
  <Suspense fallback={<Spinner />}>
    <Order />
  </Suspense>
);
