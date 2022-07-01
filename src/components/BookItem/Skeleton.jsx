import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={210}
    height={380}
    viewBox="0 0 210 380"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="5" y="1" rx="10" ry="10" width="200" height="280" />
    <rect x="6" y="285" rx="0" ry="0" width="200" height="20" />
    <rect x="5" y="315" rx="0" ry="0" width="100" height="10" />
    <rect x="5" y="335" rx="0" ry="0" width="100" height="10" />
    <rect x="5" y="355" rx="0" ry="0" width="100" height="10" />
  </ContentLoader>
);

export default Skeleton;
