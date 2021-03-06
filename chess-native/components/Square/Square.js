import React from 'react';
import styled from 'styled-components';
/* import { Flipped } from 'react-flip-toolkit'; */
import PropTypes from 'prop-types';

import circle from '../../static/circle.svg';
import targetCircle from '../../static/target_circle.svg';
import isLightTile from './scripts/isLightTile';
import getPiece from './scripts/library';

const StyledSquare = styled.div`
    width: 12.5%;
    height: 12.5%;
    position: relative;
    background-color: ${(props) => (isLightTile(props.id) ? 'cornsilk' : '#b5721d')};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PlainButton = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: none !important;
`;

const ChessPiece = styled.img`
    width: 70%;
    position: relative;
    z-index: 2;
`;

const TargetCircle = styled.img`
    position: absolute;
    width: 100%;
    z-index: 1;
`;

const Square = (props) => {
    if (props.pieceID !== null) {
        const piece = getPiece(props.pieceID);
        return (
            <StyledSquare id={props.squareID}>
                {props.moves.includes(props.squareID)
                    && <TargetCircle src={targetCircle} alt={'target circle'} />
                }
                <Flipped flipId={props.pieceID}>
                    <PlainButton onClick={() => props.selectSquare(props.squareID, props.pieceID[0])}>
                        <ChessPiece src={piece.image} alt={piece.name} />
                    </PlainButton>
                </Flipped>
            </StyledSquare>
        );
    }
    if (props.moves.includes(props.squareID)) {
        return (
            <StyledSquare id={props.squareID}>
                <PlainButton onClick={() => props.selectSquare(props.squareID)}>
                    <ChessPiece src={circle} alt={'circle'} />
                </PlainButton>
            </StyledSquare>
        );
    }
    return <StyledSquare id={props.squareID} />;
};

Square.propTypes = {
    pieceID: PropTypes.string,
    squareID: PropTypes.string.isRequired,
    moves: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectSquare: PropTypes.func.isRequired
};

export default Square;
