import Rules from "./Rules";
import SwitchGameSection from "./SwitchGameSection";

function Footer() {
  return (
    <footer className="flex items-center justify-between w-full mt-auto px-12 sm:px-0 ">
      <SwitchGameSection />
      <Rules />
    </footer>
  );
}

export default Footer;
