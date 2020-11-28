import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 80%;
    max-width: 60vh;
    min-width: 35rem;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-basis: 0;
`;

const getMoveCountFromFen = (fen) => (fen ? parseInt(fen.split(' ')[5], 10) : null);

const Header = (props) => (
    <StyledHeader>
        <InfoBox id={'move-counter'}>
            <h2 className='h3'>{'Move'}</h2>
            <p className='h3'>{getMoveCountFromFen(props.fen)}</p>
        </InfoBox>
        <h1 id={'header'}>{'Minimalist Chess'}</h1>
        <InfoBox id={'level-indicator'}>
            <h2 className='h3'>{'Level'}</h2>
            <p className='h3'>{`${props.level}`}</p>
        </InfoBox>
    </StyledHeader>
);

Header.propTypes = {
    fen: PropTypes.string,
    level: PropTypes.string
};

export default Header;
