import React from 'react'
import styled from 'styled-components/macro'
import { QUERIES } from '../../constants'

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <AnchorWrapper href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </AnchorWrapper>
  )
}

const AnchorWrapper = styled.a`
  border-bottom: 1px solid var(--color-gray-300);
  padding: 16px 0;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const Wrapper = styled.article`
  color: var(--color-gray-900);

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    justify-content: revert;
  }

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row-reverse;
  }
`

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`

export default OpinionStory
