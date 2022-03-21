import Container from 'react-bootstrap/Container';

import NavLayout from './NavLayout';

const SiteLayout = (props) => { 
    return (
        <div>
            <NavLayout/>
            <Container>
                {props.children}
            </Container>
        </div>
    );
}

export default SiteLayout;