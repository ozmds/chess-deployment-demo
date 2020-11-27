import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Background = styled.div`
    position: fixed;
    z-index: 1050;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ModalContainer = (props) => (
    <Background>
        <div className='modal-dialog'>
            <div className='modal-content'>
                {props.children}
            </div>
        </div>
    </Background>
);

ModalContainer.propTypes = {
    children: PropTypes.node
};

export default ModalContainer;
