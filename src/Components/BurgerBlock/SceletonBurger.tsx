import React from 'react'
import ContentLoader from 'react-content-loader'

const SceletonBurger = () => (
  <ContentLoader
    speed={1.5}
    width={260}
    height={350}
    viewBox="0 0 260 350"
    backgroundColor="#e6e6e6"
    foregroundColor="#fafafa"
  >
    <circle cx="604" cy="520" r="37" />
    <circle cx="130" cy="113" r="98" />
    <rect x="35" y="224" rx="6" ry="6" width="195" height="26" />
    <rect x="23" y="259" rx="6" ry="6" width="221" height="66" />
    <rect x="570" y="527" rx="0" ry="0" width="16" height="2" />
    <rect x="11" y="378" rx="6" ry="6" width="79" height="34" />
    <rect x="123" y="378" rx="23" ry="23" width="146" height="33" />
    <rect x="245" y="427" rx="0" ry="0" width="0" height="6" />
    <rect x="576" y="259" rx="0" ry="0" width="12" height="29" />
    <rect x="578" y="258" rx="0" ry="0" width="20" height="12" />
    <circle cx="533" cy="277" r="56" />
    <circle cx="600" cy="288" r="30" />
    <circle cx="589" cy="282" r="13" />
    <rect x="572" y="243" rx="0" ry="0" width="35" height="161" />
  </ContentLoader>
)

export default SceletonBurger
