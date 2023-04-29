import React from 'react';
import styled from 'styled-components/macro';
import {QUERIES} from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Anchor href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <Text>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </Text>
      </Wrapper>
    </Anchor>
  );
};

const Anchor = styled.a`
  padding-top: 16px;
  padding-bottom: 16px;

  @media ${QUERIES.tabletOnly} {
    flex: 1 1 172px;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 1fr 48px;
  grid-template-areas: 'text avatar';

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 1fr;
    grid-template-areas: 'avatar' 'text' ;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: avatar;
`;

const Text = styled.div`
  grid-area: text;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
