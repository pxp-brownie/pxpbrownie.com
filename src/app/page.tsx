import { getBio, getProjects, getSocials } from "@/sanity/lib/data";
import ClientHome from "@/components/ClientHome";

export default async function Home() {
  let bio = null;
  let projects = [];
  let socials = [];

  try {
    // Attempt to fetch data if Sanity is configured
    [bio, projects, socials] = await Promise.all([
      getBio(),
      getProjects(),
      getSocials(),
    ]);
  } catch (error) {
    console.warn("Sanity could not be reached, falling back to static data.");
  }

  return (
    <ClientHome
      initialBio={bio}
      initialProjects={projects}
      initialSocials={socials}
    />
  );
}
