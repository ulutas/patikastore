import React from 'react';
import {Image, ScrollView} from 'react-native';
import BannerStyle from './Banner.Style';

const Banner = ({banner}) => {
  return (
    <ScrollView
      horizontal
      style={BannerStyle.container}>
        {banner.map(bannerNews => (
          <Image
            key={bannerNews.id}
            style={BannerStyle.banner_image}
            source={{uri: bannerNews.imageUrl}}
          />
        ))}
    </ScrollView>
  );
};

export default Banner;
