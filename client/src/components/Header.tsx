import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      {/* <ModeToggle /> */}
      <Link to="/">
        <h2 className="font-bold select-none">WD compiler</h2>
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link to="/compiler">
            <Button variant="secondary">Compiler</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
