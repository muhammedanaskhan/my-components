

const MobileTopBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
        const target = event.currentTarget as HTMLElement;
        target.classList.toggle('open');
        setIsMenuOpen(prev => !prev);
    }, []);

    useEffect(() => {
        const navIcon = document.getElementById('nav-icon2');
        if (navIcon) {
            const handleClick = (event: MouseEvent) => toggleMenu(event as unknown as React.MouseEvent<HTMLElement>);
            navIcon.addEventListener('click', handleClick);

            return () => {
                navIcon.removeEventListener('click', handleClick);
            };
        }
    }, [toggleMenu]);


    return (
        <div className='topBarShadow z-[2147483600] w-full bg-white flex fixed top-0 sm:hidden h-[64px] justify-between items-center p-4'>

            <Link href={'/tokens'} className="flex items-center gap-[10.85px]">

                <span className='text-black font-bold text-[19.53px]'>Chef.fun</span>
            </Link>

            <div className="w-10 h-10 flex justify-center items-center bg-white border rounded-full">
                <div id="nav-icon2">
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div
                className={`fixed pb-8 inset-0 bg-[#0D0D0D] z-[2147483600] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible top-[64px]' : ' top-[64px] opacity-0 invisible'
                    }`}
            >
                <div className="h-full overflow-y-auto flex flex-col justify-between">


                </div>
            </div>

        </div>
    )
}

export default MobileTopBar