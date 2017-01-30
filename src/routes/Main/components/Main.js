import React from 'react'
import Home from '../../../components/Home';
import About from '../../../components/About';
import Presta from '../../../components/Presta';
import Skills from '../../../components/Skills';
import Portfolio from '../../../components/Portfolio';
import Contact from '../../../components/Contact';

import { scroller } from 'react-scroll';

class Main extends React.Component {
	componentDidMount() {
		const { location } = this.props;

		if(location && location.hash){
			let hash = location.hash.split('#')[1];
			this.scrollTo(hash);
		}
	}

	componentDidUpdate() {
		const { location } = this.props;

		if(location && location.hash){
			let hash = location.hash.split('#')[1];
			this.scrollTo(hash);
		}
	}

	scrollTo(anchor){
		scroller.scrollTo(anchor, {
			duration: 500,
			smooth: true,
		});
	}

	render() {
		const { intl, switchLanguage } = this.props;

    return (
      <div>
        <Home intl={intl} />
        <About intl={intl} switchLanguage={switchLanguage} />
        <Presta intl={intl} switchLanguage={switchLanguage} />
				<Skills intl={intl} switchLanguage={switchLanguage} />
				<Portfolio intl={intl} switchLanguage={switchLanguage} />
				<Contact intl={intl} switchLanguage={switchLanguage} />
      </div>
    )
	}
}

export default Main
