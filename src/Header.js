import react from 'react';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <div className="App-breakpoint App-grid-2">
                <div className="App-logo">
                    <h4>Personal</h4>
                </div>
                <ul>
                    <li>
                        <a href="/" className="active">Home</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <button id="get-started"><i className="fas fa-user"></i> Contact me</button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;