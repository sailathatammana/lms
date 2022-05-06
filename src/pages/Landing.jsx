import { useUser } from "../state/UserProvider";

export default function Landing() {
  const { user } = useUser();
  console.log("landing page", user);
  return (
    <div>
      <h1>Landing </h1>
      <p>welcome {user.name}</p>
    </div>
  );
}
