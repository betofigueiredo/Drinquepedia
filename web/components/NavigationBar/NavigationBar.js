import React from 'react';

// CSS
import * as s from './NavigationBar.style';

// Utils
import config from '../../utils/config';

const NavigationBar = () => (
	<s.NavigationBar>
		<s.NavigationWrapper>
			<s.Logo>
				<img src={`${config.storage_path}/drinquepedia-logo.png`} />
			</s.Logo>
			<s.Menu>
				<ul>
					<li><a>Drinques</a></li>
					<li><a>Destaques</a></li>
					<li><a>Tudo sobre bar</a></li>
					<li><a>Dicas</a></li>
				</ul>
			</s.Menu>
		</s.NavigationWrapper>
	</s.NavigationBar>
);

export default NavigationBar;
