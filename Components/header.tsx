import Link from 'next/link';
const Header = () => {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className=" flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Isobelle Holden</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          
            <li>
              <a href="#" className="block py-2 px-3 md:hover:bg-transparent  dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:hover:bg-transparent  dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">Experience</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:hover:bg-transparent  dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  md:hover:bg-transparent  dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;