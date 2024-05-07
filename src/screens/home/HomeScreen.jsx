import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainWrapper from '../../container/MainWrapper/MainWrapper';
import img1 from '../../assets/images/profile.png';
import {data, postsData, storyDate} from '../../utils/data';
import dots from '../../assets/icons/dots.svg';
import postImg from '../../assets/images/postimg.jpg';
import {Icon} from 'react-native-paper';
import likeImg from '../../assets/images/like.webp';
import unLikeImg from '../../assets/images/unlike.png';
import commentImg from '../../assets/images/comment.png';
import sendImg from '../../assets/images/send.png';
import Post from '../../components/Post/Post';
import Stories from '../../components/Stories/Stories';
import InstaStory from 'react-native-insta-story';
import Header from '../../container/Header/Header';

const HomeScreen = ({navigation}) => {
  const [count, setCount] = useState(0);

  return (
    <MainWrapper>
      {/* <ScrollView
        style={
          {
            // flexDirection: 'row',
            // display: 'flex',
            // flex: 1 / 3,
            // borderWidth: 1,
            // borderStyle: 'solid',
            // borderColor: 'red',
          }
        }
        horizontal={true}> */}
      <Header />
      <View style={styles.mainView}>
        <InstaStory
          data={data}
          duration={10}
          avatarSize={70}
          avatarTextStyle={{color: 'white'}}
          // avatarTextStyle={{color: 'white'}}
        />
        {/* {storyDate.map((item, i) => {
            return <Stories key={i} image={item.image} name={item.name} />;
          })} */}
      </View>
      {/* </ScrollView> */}
      <View style={{flex: 60}}>
        <ScrollView style={{flex: 1}}>
          {postsData.map((item, i) => {
            return <Post key={i} postImage={item.image} title={item.name} />;
          })}
        </ScrollView>
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    flex: 10.2,
    height: 30,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red',
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  text: {
    color: 'white',
  },
  likeImg: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
  },
  bottomView: {
    padding: 4,
    flexDirection: 'row',
    gap: 10,
  },
  comment: {
    width: 40,
    height: 30,
    resizeMode: 'center',
  },
});

export default HomeScreen;
