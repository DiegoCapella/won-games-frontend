import Image from 'next/image'

import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GameCardProps } from 'components/GameCard'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import { HighlightProps } from 'components/Highlight'
import Base from 'templates/Base'

import * as S from './styles'
import TextContent from 'components/TextContent'
import Showcase from 'components/Showcase'

export type GameTemplateProps = {
  // slug?: string
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  // upcomingTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  // recommendedTitle: string
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  // upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  // recommendedTitle,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover>
      <Image src={cover} role="img" aria-label="cover" layout="fill" />
    </S.Cover>

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <Showcase
        // title={upcomingTitle}
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        // title={recommendedTitle}
        title="You may like these games"
        games={recommendedGames}
      />
    </S.Main>
  </Base>
)

export default Game
