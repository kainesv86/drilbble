import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

interface MainNavbarProps {}

const MainNavbar: React.FunctionComponent<MainNavbarProps> = () => {
    const route = useRouter();

    const links = [
        {
            id: uuidv4(),
            name: 'Inspiration',
            path: '/inspiration',
        },
        {
            id: uuidv4(),
            name: 'Find Work',
            path: '/find-work',
        },
        {
            id: uuidv4(),
            name: 'Learn Design',
            path: '/learn-design',
        },
        {
            id: uuidv4(),
            name: 'Go Pro',
            path: '/go-pro',
        },
        {
            id: uuidv4(),
            name: 'Hire Designers',
            path: '/hire-designers',
        },
    ];

    const userLinks = [
        {
            id: uuidv4(),
            name: 'Hồ sơ',
            path: '/profile',
            icon: svgList['profile'],
        },
        {
            id: uuidv4(),
            name: 'Chỉnh sửa hồ sơ',
            path: '/profile/edit',
            icon: svgList['edit_profile'],
        },
        {
            id: uuidv4(),
            name: 'Đăng xuất',
            path: '/logout',
            icon: svgList['sign_out'],
        },
    ];

    return (
        <>
            {/* main desktop menu sart*/}
            <header className="z-20 flex items-center justify-center w-full h-20 transition-colors js-page-header backdrop-blur">
                <div className="flex items-center w-full px-6">
                    <div className="flex items-center justify-center gap-8">
                        <Link className="shrink-0" href="/">
                            <a>
                                <div className="w-[72px]">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/2560px-Dribbble_Text_Logo_Script.svg.png" />
                                </div>
                            </a>
                        </Link>
                        {/* End  logo */}

                        <nav className="flex justify-end w-full lg:justify-center">
                            <ul className="flex flex-row w-full gap-8 m-0">
                                {/* create */}
                                {links.map((link) => (
                                    <li className="group" key={link.id}>
                                        <Link href={link.path}>
                                            <a>
                                                <span className={'text-sm font-medium text-black'}>{link.name}</span>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="fixed inset-0 z-10 flex items-center ml-auto bg-white opacity-0 js-mobile-menu dark:bg-jacarta-800 lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
                        {/* End menu for desktop */}

                        <div className="flex items-center ml-8 xl:ml-12">
                            {/* End metamask Wallet */}

                            <ul className="flex items-center justify-center">
                                <li>
                                    <Link href={'/search'}>
                                        <div className="h-[18px] w-[18px]">
                                            <MagnifyingGlassIcon />
                                        </div>
                                    </Link>
                                </li>
                                <li className="mx-2.5">
                                    <Link href={'/login'}>
                                        <a className="text-sm font-medium text-black">Sign in</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/login'}>
                                        <button className="bg-[#f082ac] rounded-lg text-white text-sm font-medium py-2.5 px-4">Sign up</button>
                                    </Link>
                                </li>
                            </ul>
                            {/* <div className="relative js-nav-dropdown group-dropdown">
                                <button className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                                    {svgList['user']}
                                </button>
                                <div className="dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0">
                                    {userLinks.map((link) => (
                                        <Link href={link.path} key={link.id}>
                                            <a className="flex items-center px-5 py-2 space-x-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                                                {link.icon}
                                                <span className="mt-1 text-sm font-display text-jacarta-700 dark:text-white">{link.name}</span>
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <DarkMode /> */}
                        </div>
                        {/* End header right content (metamask and other) for desktop */}
                    </div>
                </div>
                {/* End flex item */}
            </header>
            {/* main desktop menu end */}
        </>
    );
};

export default MainNavbar;

const svgList: Record<string, React.ReactNode> = {
    user: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="w-4 h-4 transition-colors fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:fill-white"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
        </svg>
    ),
    profile: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
        </svg>
    ),
    edit_profile: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
    ),
    sign_out: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
        </svg>
    ),
};
