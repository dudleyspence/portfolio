import Socials from "./Socials";
import Copyright from "./Copyright";
import LightHouseStats from "./LightHouseStats";

export function Footer({ stats }) {
  return (
    <footer className="my-5">
      <LightHouseStats stats={stats} />
      <Socials />
      <Copyright />
    </footer>
  );
}
