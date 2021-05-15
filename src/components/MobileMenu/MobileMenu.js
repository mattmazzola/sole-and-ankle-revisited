/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { COLORS, QUERIES } from '../../constants'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlay
      style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
      isOpen={isOpen}
      onClick={onDismiss}
    >
      <DialogContent
        style={{ boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)", top: 0, bottom: 0 }}
      >
        <UnstyledButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </UnstyledButton>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </DialogContent>
    </DialogOverlay>
  )
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  color: ${COLORS.gray[700]};

  a {
    color: inherit;
    text-decoration: none;
  }

  a:active {
    color; ${COLORS.primary};
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export default MobileMenu
