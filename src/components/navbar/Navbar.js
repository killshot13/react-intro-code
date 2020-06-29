import React from 'react';

const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
            </ul>
            <h1>Welcome {props.hello} from Navbar</h1>
        </nav>
    );
}

export default Navbar