import { StyleSheet, Dimensions } from "react-native";
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');
const Box=70;
const MediumBox = 140;
const BigBox = 200;
export const styles = StyleSheet.create({
  //Layout
  Layout: {
    flex: 1,
    flexDirection: 'column',
    width: WIDTH,
    backgroundColor: '#2996D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Header
  Header: {
    height: 0.3 * HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'rgba(50,50,50,0.3)'
  },
  HLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Box,
    // backgroundColor:'rgba(50,50,50,0.5)'
  },
  HCenter: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'rgba(50,50,50,0.5)'
  },
  HRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'rgba(50,50,50,0.5)'
  },
  HeaderTitle: {
    textAlign: 'left',
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: 'rgba(250,250,250,0.9)',
    textTransform: 'uppercase',
  },
  Hicon: {
    fontSize: 18,
    color: 'rgba(250,250,250,0.9)',
  },
  HeaderTitleDetail: {
    textAlign: 'left',
    fontFamily: 'OpenSans',
    fontSize: 12,
    textAlign: 'center',
    color: 'rgba(250,250,250,0.9)',
    textTransform: 'capitalize',
  },
  //header Menu
  HMenu: {
    height: 0.15 * HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 20,
    // backgroundColor: 'rgba(50,50,50,0.05)',
    marginVertical: -1 * (0.075 * HEIGHT),
    zIndex: 99,
  },
  BoxMenu: {
    width: Box,
    height: Box,
    borderRadius: Box / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(250,250,250,250.5)',
    margin: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  //Scroll
  ScrollFlex: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#ffff',
    backgroundColor: '#e56f0c',
    width: WIDTH,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // backgroundColor: 'rgba(50,50,50,0.8)',
  },
  Container: {
    flex: 1,
    height: '10%',
    width: WIDTH,
    marginTop: 100,
  },
  SubContainer: {
    flex: 1,
    width: 'auto',
    marginHorizontal: 10,
  },

  //Kotak
  HistoryCard: {
    backgroundColor: '#ebf9f9',
    height: 91,
    marginBottom: 10,
    padding: 15.5,
    borderRadius: 42,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  ImageCapture: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 16,
  },

  Title: {
    textAlign: 'left',
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: 'black',
    textTransform: 'capitalize',
  },
  label: {
    textAlign: 'left',
    fontFamily: 'OpenSans',
    fontSize: 11,
    marginLeft: 5,
    fontWeight: '500',
    color: 'rgba(50,50,50,0.5)',
    textTransform: 'none',
  },
  //Splash
  SplasIconBox: {
    height: BigBox,
    width: BigBox,
    backgroundColor: 'rgba(250,250,250,1)',
    borderRadius: BigBox / 2,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    opacity: 0.8,
  },
  //Avatar
  HAvatar: {
    height: 0.2 * HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 20,
    // backgroundColor: 'rgba(50,50,50,0.05)',
    marginVertical: -1 * (0.1 * HEIGHT),
    zIndex: 99,
  },
  ImageAvatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    opacity: 1,
  },
  BoxAvatar: {
    width: MediumBox,
    height: MediumBox,
    borderRadius: MediumBox / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(250,250,250,0.6)',
    margin: 10,
    flexWrap: 'wrap',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    opacity: 1,
    overflow: 'hidden', //Over Flow ini untuk membuat semua objek hanya berada di dalam kawasana Groub saja , bahkan meskipun group dalama keadaan di radius
  },
});