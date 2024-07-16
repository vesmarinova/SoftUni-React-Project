import Container from "../ui/container";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="sm:flex sm:justify-between py-3 px-4 border-b">
        <Container>
          <div className="relative px-4 sm:px-6 lg:px8 h16 items-center justify-between w-full">
            <div className="flex items-center">
              <Link to={"/"} className="ml-4 lg:ml-0">
                <h1 className="text-xl font-bold">K2 Имоти</h1>
              </Link>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
