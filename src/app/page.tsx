import { NavEntry } from "@/components/NavEntry";
import { NavMain } from "@/components/NavMain";

export default function Home() {
  return (
    <>
      <div id="main-container" className="w-full my-auto ">
        <NavMain>
          <NavEntry name="Home" />
          <NavEntry name="About" />
          <NavEntry name="Projects" />
          <NavEntry name="Resume" />
          <NavEntry name="Blog" />
          <NavEntry name="Contact" />
        </NavMain>
      </div>
    </>
  );
}
