import React from 'react'
import ContentLoader from 'react-content-loader'

const SceletonSushi = () => (
  <ContentLoader
    speed={2}
    width={260}
    height={350}
    viewBox="0 0 260 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="567" y="233" rx="3" ry="3" width="88" height="6" />
    <rect x="554" y="234" rx="3" ry="3" width="52" height="6" />
    <rect x="457" y="236" rx="3" ry="3" width="410" height="6" />
    <rect x="384" y="232" rx="3" ry="3" width="380" height="6" />
    <rect x="438" y="229" rx="3" ry="3" width="178" height="6" />
    <circle cx="617" cy="236" r="71" />
    <rect x="499" y="344" rx="0" ry="0" width="188" height="144" />
    <rect x="536" y="423" rx="0" ry="0" width="138" height="20" />
    <rect x="567" y="411" rx="0" ry="0" width="20" height="37" />
    <rect x="508" y="422" rx="0" ry="0" width="181" height="12" />
    <rect x="577" y="402" rx="0" ry="0" width="5" height="42" />
    <rect x="22" y="165" rx="0" ry="0" width="215" height="22" />
    <rect x="140" y="197" rx="0" ry="0" width="96" height="40" />
    <rect x="33" y="8" rx="0" ry="0" width="190" height="146" />
    <rect x="23" y="206" rx="0" ry="0" width="68" height="28" />
    <rect x="41" y="222" rx="0" ry="0" width="13" height="0" />
  </ContentLoader>
)

export default SceletonSushi
