import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faChartColumn, faNewspaper, faUsers } from '@fortawesome/free-solid-svg-icons'

export default function AsideMenu() {
    const links = [
        ['Dashboard', '/admin', 'faChartColumn'],
        ['Content', '/admin/content', 'faNewspaper'],
        ['Users', '/admin/users', 'faUsers'],
        ['Settings', '/admin/settings', 'faGears']
    ]
    const icons = {
        'faChartColumn': faChartColumn,
        'faNewspaper': faNewspaper,
        'faUsers': faUsers,
        'faGears': faGears
    }
    const pathname = usePathname()

    return (
        <aside className="p-5">
            <h3 className="text-2xl text-center uppercase text-white">Polygon CMS</h3>
            <nav className="my-6">
                <ul className="group/item text-gray-100">
                    {links.map(([title, url, icon]) => (
                        <li key={title} className={`flex py-3 px-3 my-1 rounded-lg ${pathname === url && 'bg-cyan-700'} hover:bg-cyan-700 cursor-pointer hover:rounded-lg transition-colors ease-in-out duration-300`}>
                            <Link href={url} className="block w-full">
                                <FontAwesomeIcon icon={icons[icon]} className="fa-fw mr-3 h-4" />
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
