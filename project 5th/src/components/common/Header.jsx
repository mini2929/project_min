import { FaBars } from 'react-icons/fa';

export default function Header() {

	const setMenuToggle = useZustandStore(state => state.setMenuToggle);

    return (
        <header className="header">
            <h1 className='logo'>
				<a href='/'>Avallion</a>
			</h1>

			<ul className='gnb'>
				<li>
					<a href='/members'>MEMBERS</a>
				</li>
				<li>
					<a href='/post'>POST</a>
				</li>
				<li>
					<a href='/gallery'>GALLERY</a>
				</li>
				<li>
					<a href='/youtube'>YOUTUBUE</a>
				</li>
				<li>
					<a href='/contact'>CONTACT</a>
				</li>
			</ul>

            <span className='btnMobile' onClick={setMenuToggle}>
					<FaBars />
				</span>
		</header>
    )
}