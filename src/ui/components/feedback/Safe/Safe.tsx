import React from 'react';
import { SafeContainer } from "./Safe.style";
import { Container } from '@material-ui/core';

const Safe = () => {
    return (
        <SafeContainer>
            <Container>
                Ambiente Seguro <i className={'twf-lock'}/>
            </Container>
        </SafeContainer>
    )
}

export default Safe;