import { Dimensions, Platform } from "react-native"

const {height, width} = Dimensions.get('window')

export default {
  colors: {
    main: '#973DF2',

    title: '#252525',
    text: '#717171',

    lightGray: '#DDDDDD',

    shape: '#FFFFFF'
  },
  fonts: {
    bold: 'Manrope-Bold',
    regular: 'Manrope-Regular'
  },
  sizes: {
    width: width,
    height: height,

    radius_small: 2,
    radius_medium: 10,
    radius_large: 24,


    padding: 24,

    spacing: 10,
    
    item_size: Platform.OS === 'ios' ? width * 0.72 : width * 0.74,
}
}