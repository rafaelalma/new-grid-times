import React from 'react'
import styled from 'styled-components/macro'
import { Menu, Search, User } from 'react-feather'

import { QUERIES } from '../../constants'

import MaxWidthWrapper from '../MaxWidthWrapper'
import Logo from '../Logo'
import Button from '../Button'

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <MobileButton>
              <User size={24} />
            </MobileButton>
          </ActionGroup>
          <SubscribeWrapper>
            <Button>Subscribe</Button>
            <Link>Already a subscriber?</Link>
          </SubscribeWrapper>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  @media ${QUERIES.laptopAndUp} {
    position: relative;
    margin: 16px 0 81px 0;
  }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
    color: var(--color-gray-900);
    min-height: 98px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.laptopAndUp} {
    flex: 1;
  }
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    position: absolute;
    inset: 0;
  }
`

const MobileButton = styled.button`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const SubscribeWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`

const Link = styled.a`
  font-size: 0.875rem;
  font-style: italic;
  text-decoration: underline;
`

export default Header
