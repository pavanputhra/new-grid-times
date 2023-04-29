import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <Head>
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
          <ActionGroupDesktop>
            <Button>Subscribe</Button>
            <Anchor>Already a subscriber?</Anchor>
          </ActionGroupDesktop>
          <ActionGroupMobile>
            <button>
              <User size={24} />
            </button>
          </ActionGroupMobile>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </Head>
  );
};

const Head = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  
  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
    color: var(--color-gray-900);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

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
`;

const ActionGroupMobile = styled(ActionGroup)`
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const ActionGroupDesktop = styled.div`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const Anchor = styled.a`
  font-size: (14 /16)rem;
`;


const MainHeader = styled(MaxWidthWrapper)`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
  @media ${QUERIES.desktopAndUp} {
    grid-row: 1 / -1;
  }
`;

export default Header;
