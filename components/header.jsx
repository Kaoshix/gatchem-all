import Image from "next/image";

export const Header = () => {
    return (
        <header className="flex justify-between items-center max-w-screen-2xl mx-auto p-4">
            <div>
                <Image src="/gatchem-all-logo.png" alt="Gatchem All" width={200} height={200} />
            </div>
            <nav>
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}