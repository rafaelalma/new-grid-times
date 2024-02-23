import React from 'react'
import styled from 'styled-components/macro'

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data'

import SectionTitle from '../SectionTitle'
import MainStory from '../MainStory'
import SecondaryStory from '../SecondaryStory'
import OpinionStory from '../OpinionStory'
import Advertisement from '../Advertisement'
import { QUERIES } from '../../constants'

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 252px;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr 386px 273px;
    grid-template-rows: 1fr 152px;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`

const MainStorySection = styled.section`
  grid-area: main-story;
  padding-bottom: 24px;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 24px;
    border-right: 1px solid var(--color-gray-300);
  }
`

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  padding-top: 24px;
  padding-bottom: 24px;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 24px;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-right: 24px;
    border-right: 1px solid var(--color-gray-300);
    border-bottom: 1px solid var(--color-gray-300);
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`

const VerticalStoryWrapper = styled.div`
  border-bottom: 1px solid var(--color-gray-300);
  padding: 16px 0;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  padding-top: 24px;
  padding-bottom: 24px;

  @media ${QUERIES.desktopAndUp} {
    padding-left: 24px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
  }
`

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;
    border-bottom: none;
    padding: 0 16px;

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }
`

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  padding-top: 24px;
  padding-bottom: 24px;

  @media ${QUERIES.tabletAndUp} {
  }

  @media ${QUERIES.desktopAndUp} {
    padding-left: 24px;
  }
`

export default MainStoryGrid
