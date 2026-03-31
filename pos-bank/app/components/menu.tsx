export function Menu() {
    return (
        <nav className="bg-white shadow-sm rounded-lg p-4 mb-6">
            <ul className="flex space-x-4">
                <li>
                    <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/transactions" className="text-gray-700 hover:text-gray-900 font-medium">
                        Transações
                    </a>
                </li>
            </ul>
        </nav>
    );
}
