

const Footer = () => {
    return (
        <footer className="flex flex-col items-center rounded-lg shadow m-4">
            <ul className="flex items-center mb-6  gap-3">
                <li><img className="rounded" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" width={35}/></li>
                <li><img className = "rounded" src="https://cdn-icons-png.freepik.com/256/15707/15707869.png?semt=ais_hybrid" width={35}/></li>
                <li><img className="rounded" src = "https://cdn-icons-png.flaticon.com/512/3291/3291667.png" width={35}/></li>
                <li><img className = "rounded"src="https://cdn.pixabay.com/photo/2022/06/05/07/04/person-7243410_1280.png" width={35}/></li>
            </ul>
            <ul className="flex items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Twitter</a>
                </li>
                <li>

                    <a href="#" className="hover:underline me-4 md:me-6">Instagram</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Github</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
            
        </footer>
    );
}





export default Footer;