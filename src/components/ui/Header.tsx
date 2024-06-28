import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import CartSheet from "./CartSheet";

const Header = () => {

    return (
      <header className="sticky top-0 w-full border-b bg-black text-white z-10">
        <div className="h-16 container flex items-center">
            <MainNav />
            <MobileNav />
            <h1 className="flex items-center justify-end flex-1">
                <CartSheet  />
            </h1>
        </div>
      </header>
    );
}

export default Header;
