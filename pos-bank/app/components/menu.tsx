import Link from "next/link";


export function Menu() {
    return (
        <nav className="bg-white shadow-sm rounded-lg p-4 mb-6">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/dashboard" className="text-gray-700 hover:text-gray-900 font-medium">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/transactions" className="text-gray-700 hover:text-gray-900 font-medium">
                        Transações
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
