import React from 'react'
import Home from '../../../components/Home';
import About from '../../../components/About';
import Presta from '../../../components/Presta';
import Skills from '../../../components/Skills';
import Portfolio from '../../../components/Portfolio';
import Contact from '../../../components/Contact';

class Main extends React.Component {

	render() {
    return (
      <div>
        <Home />
        <About />
        <Presta />
				<Skills />
				<Portfolio />
				<Contact />
      </div>
    )
	}
}

export default Main
