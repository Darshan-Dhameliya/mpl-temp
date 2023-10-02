import { useStore, useUserContext } from "@/context";

export default function SecureSection({ children }) {
  const { isloggedin } = useStore();
  if (isloggedin) {
    return children;
  }
  return null;
}
