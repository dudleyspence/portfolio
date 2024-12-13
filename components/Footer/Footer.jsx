import Socials from "./Socials";
import Copyright from "./Copyright";
import LightHouseStats from "./LightHouseStats";

export async function Footer({ url }) {
  const stats = await fetchLighthouseStats(url);

  return (
    <footer className="my-5">
      {stats ? (
        <LightHouseStats stats={stats} />
      ) : (
        "Fetching lighthouse Stats..."
      )}

      <Socials />
      <Copyright />
    </footer>
  );
}
