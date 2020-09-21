import React from 'react'
import ContentLoader from 'react-content-loader'
import { ComicItem, RowItem } from './styles'

const Skeleton = () => (
  <ComicItem>
    <RowItem>
      <ContentLoader
        rtl
        speed={1}
        width={182}
        height={260}
        viewBox="0 0 182 260"
        backgroundColor="#d5d5d5"
        foregroundColor="#ffffff"
      >
        <rect x="29" y="240" rx="2" ry="2" width="140" height="10" />
        <rect x="29" y="220" rx="2" ry="2" width="140" height="10" />
        <rect x="0" y="0" rx="100" ry="0" width="182" height="200" />
      </ContentLoader>
    </RowItem>
  </ComicItem>
)

export default Skeleton
