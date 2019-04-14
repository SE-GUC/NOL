import React, { Component, Fragment } from 'react';

import { FacebookProvider, Page } from 'react-facebook';

import { Timeline } from 'react-twitter-widgets'

import instafeed from 'react-instafeed'
// import Image from './image'

class SocialMedia extends Component {
  
    render() {
    
    const options = {
        accessToken: '7218712199.7f80b2b.514044a5c7314c499a7c26c1a3ca01c4',
        clientId: '7f80b2b03b6b48f9886d908933fd6e9a',
        get: 'user', // popular, user
        locationId: null,
        resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
        sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
        tagName: null,
        userId: 6390622351,
      }

      var data = []
      instafeed(options).then(result => data = result.data)
            
    return (
      <div className="SocialMedia">
       
       <FacebookProvider appId="2011092822272498">
        <Page href="https://www.facebook.com/GUCMUN/" tabs="timeline" />
       </FacebookProvider>  
      
       <Timeline
        dataSource={{
        sourceType: 'profile',
        screenName: 'gucstudent'}}
        options={{
        username: 'gucstudent',
        height: '400'}}
        onLoad={() => console.log('Timeline is loaded!')}
        />


        <Fragment>
        {// eslint-disable-next-line no-unused-vars
        data &&
            data.map(({ caption, id, images, tags }, index) => {
            const image = images[options.resolution]
            console.log(image.url)
            return (
                <image src={image.url}/>
                // <Image
                //     key={index}
                //     url={image.url}
                //     title={caption.text}
                //     caption={caption.text}
                //     width={image.width}
                //     height={image.height}
                // />
                // </div>
            )
            })}
        </Fragment>

      </div>
    );
  }
}

export default SocialMedia;
