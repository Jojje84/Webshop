import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;

`

const Banner = () => {
    return (
        <Container>
            10% off all products only menbers
        </Container>
    )
}

export default Banner