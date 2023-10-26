import { useSelector } from "react-redux";

export default function SecureSection({ children }) {
  const isloggedin = useSelector((state) => state.user.isloggedin);

  if (isloggedin) {
    return children;
  }
  return null;
}
