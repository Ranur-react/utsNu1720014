import React, {Comment, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,Image,
  ScrollViewComponent,
  ImageBackground,
} from 'react-native';
import {styles} from './../assets/style';
import Kotak from './../components/Kotak';
import {showToastWithGravityAndOffset} from './../components/_Toasview';
import {BgImage, UserImage, SativaImage} from './../Tools/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAlignJustify, faAngleLeft, faBook, faBrain, faCamera, faCoffee, faLaptopCode, faUmbrella} from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SourceList: [
        {
          detail: [
            'Nurdianto Utomo',
            'Jl. Jati Adabiah No. 26',
            'No BP: 1720014',
          ],
          link: require('./../assets/images/avatar1.png'),
        },
        {
          detail: [
            'Randi Saputra Zain',
            'Jl. Koto Kaciak No. 40',
            'No BP: 1710054',
          ],
          link: require('./../assets/images/avatar2.png'),
        },
        {
          detail: [
            'Fahmi Faqih Akbar',
            'Jl. Koto Kaciak No. 45',
            'No BP: 1710045',
          ],
          link: require('./../assets/images/avatar3.png'),
        },
        {
          detail: [
            'Ramahan Nuari',
            'Jl. Mega Permai No. 50',
            'No BP: 1710091',
          ],
          link: require('./../assets/images/avatar5.png'),
        },
      ],
    };
  }
  render() {
    const EachKotak = () => {
      return (
        <View style={styles.SubContainer}>
          {this.state.SourceList.map((value, i) => {
            return (
              <Kotak
                onClick={e => this.props.navigation.navigate('Detail', {value})}
                data={value}
                key={i}
                nama={'gambar1'}
              />
            );
          })}
        </View>
      );
    };
    return (
      <ImageBackground
        source={{uri: BgImage}}
        resizeMode="cover"
        style={styles.Layout}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <View style={styles.Header}>
          {/* // Back Button *Rq */}

          <TouchableOpacity
            onPress={() =>
              showToastWithGravityAndOffset('Ini Adalah Halaman Utama')
            }
            style={styles.HLeft}>
            <FontAwesomeIcon style={styles.Hicon} icon={faAngleLeft} />
          </TouchableOpacity>
          {
            // header Title *Rq
          }
          <View style={styles.HCenter}>
            <Text
              onPress={() => showToastWithGravityAndOffset("This's Title")}
              style={styles.HeaderTitle}>
              DAFTAR MAHASISWA
            </Text>
            <Text
              onPress={() =>
                showToastWithGravityAndOffset("This's Deskcriptions of Title")
              }
              style={styles.HeaderTitleDetail}>
              STMIK JAYANUSA
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => showToastWithGravityAndOffset('Ini Adalah Menu')}
            style={styles.HLeft}>
            <FontAwesomeIcon icon={faAlignJustify} />
          </TouchableOpacity>
        </View>
        {
          // header menu *JS
        }
        <View style={styles.HAvatar}>
          <View style={styles.BoxAvatar}>
            <Image
              style={styles.ImageAvatar}
              source={require('./../assets/images/2STMIK-Jayanusa-Padang-removebg-preview.png')}></Image>
          </View>
        </View>
        {/* // content *Rq */}
        <ScrollView>
          <View style={[styles.ScrollFlex]}>
            <View style={styles.Container}>
              <EachKotak />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
