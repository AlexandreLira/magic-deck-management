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
    spacing: 10,
    item_size: Platform.OS === 'ios' ? width * 0.72 : width * 0.74,
    radius: 10,
    radius_2: 34
}
}