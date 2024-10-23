import { FaBars, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {

    const snsArr = [FaEnvelope, FaInstagram, FaYoutube];


    return (
        <footer className="footer">
            <ul className='sns'>
                {snsArr.map((Data, idx) => (
                    <li key={idx}>
                        <Data />
                    </li>
                ))}
            </ul>
        </footer>
    )
}