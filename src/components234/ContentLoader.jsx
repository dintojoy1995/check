import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContentLoader, { Facebook } from 'react-content-loader'
function ContentLoader1() {

  const deviceId = uuidv4();
console.log('Device UUID:', deviceId);
console.log("afasf");
  return (
    <div>
 <ContentLoader viewBox="-10 0 500 70">
    {/* Only SVG shapes */}    
    <rect x="0" y="17" rx="5" ry="5" width="70" height="30" />
    <rect x="0" y="55" rx="5" ry="5" width="70" height="15" />

    <rect x="80" y="17" rx="4" ry="4" width="300" height="10" />
    <rect x="80" y="33" rx="4" ry="4" width="250" height="8" />
    <rect x="80" y="45" rx="4" ry="4" width="200" height="8" />
    <rect x="80" y="60" rx="4" ry="4" width="300" height="10" />
  </ContentLoader>
  
    </div>

  )
}

export default ContentLoader1