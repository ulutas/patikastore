import {StyleSheet, Dimensions} from 'react-native';

const BannerStyle = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  banner_image: {
    height: Dimensions.get('screen').height / 6,
    width: Dimensions.get('screen').width / 2,
    marginHorizontal: 3,
  },
});

export default BannerStyle;
