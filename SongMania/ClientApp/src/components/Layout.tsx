import * as React from 'react';
import { Container } from 'reactstrap';
import { MiniDrawer } from './Drawer';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <MiniDrawer/>
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
);
