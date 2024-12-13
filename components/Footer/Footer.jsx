import Socials from "./Socials";
import Copyright from "./Copyright";
import LightHouseStats from "./LightHouseStats";

export function Footer({ url }) {
  return (
    <footer className="my-5">
      <LightHouseStats url={"https://www.dudleyspence.com/en"} />
      <Socials />
      <Copyright />
    </footer>
  );
}
