import { useRouter } from "next/router";
import Head from "next/head";

export default function NFTPage() {
  const router = useRouter();
  return <div>Post #{router.query.id}</div>;
}
