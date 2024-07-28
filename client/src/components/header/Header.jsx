import { Button } from "../ui/button";
import Container from "../ui/container";
import { Link } from "react-router-dom";

const routes = [
  {
    to:"/",
    label:"Начало"
  },

  {
    to:"/all-sale",
    label:"Продажби"
  },
  {
    to:"/all-rent",
    label:"Наеми"
  },
  {
    to:"/login",
    label:"Вход"
  },
  {
    to:"/register",
    label:"Регистрация"
  },
  
]

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
            
            <nav className="mx-6 flex items-center space-x-4 lg:space-x6 hidden md:block">
              {
                routes.map((route,i)=>(
                  <Button  key={i} asChild variant="link"> 
                  <Link
                  key={i}
                  to={route.to}
                  className="text-sm font-mediium transition-colors">
                    {route.label}
                  </Link>

                  </Button>
                ))
              }

            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}
