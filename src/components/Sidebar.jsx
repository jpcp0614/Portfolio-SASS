import SocialNetworks from './SocialNetworks';

import Avatar from '../img/avatar.png';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
	return (
		<aside id="sidebar">
			<img src={Avatar} alt="João Paulo" />
			<p className="title">Desenvolvedor</p>
			<SocialNetworks />
			<p>Infos</p>
			<a href="#" className="btn">
				Download currículo
			</a>
		</aside>
	);
};

export default Sidebar;
