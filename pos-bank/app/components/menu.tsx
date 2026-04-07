import Link from "next/link";


export function Menu() {
    return (
        <nav className="self-start ml-0 mr-auto w-fit h-screen bg-white shadow-sm rounded-lg p-4 mb-6">
            <h1>Financial Flow</h1>
            <ul className="flex flex-col space-y-4">
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
