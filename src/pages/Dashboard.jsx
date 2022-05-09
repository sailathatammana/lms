import Student from "../pages/Student";
import Teacher from "../pages/Teacher";
import { useUser } from "../state/UserProvider";

export default function Dashboard() {
  const { user } = useUser();
  return <div>{user.role === "student" ? <Student /> : <Teacher />}</div>;
}
