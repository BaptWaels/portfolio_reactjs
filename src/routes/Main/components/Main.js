import React from 'react'
import Home from '../../../components/Home';
import About from '../../../components/About';
import Skills from '../../../components/Skills';
import Portfolio from '../../../components/Portfolio';
import Contact from '../../../components/Contact';
import { scroller } from 'react-scroll';

import './Main.scss'

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
    return (
      <div>
        <Home />
        <About />
				<Skills />
				<Portfolio />
				<Contact />
      </div>
    )
	}
}

export default Main