import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Icon} from 'react-native-paper';

import postImg from '../../assets/images/postimg.jpg';
import dots from '../../assets/icons/dots.svg';
import img1 from '../../assets/images/profile.png';
import likeImg from '../../assets/images/like.webp';
import unLikeImg from '../../assets/images/unlike.png';
import commentImg from '../../assets/images/comment.png';
import sendImg from '../../assets/images/send.png';

const Post = ({postImage, title}) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };
  return (
    <View style={{gap: 10, marginTop: 13}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 14}}>
          <Image
            source={img1}
            style={{
              height: 60,
              width: 60,
              resizeMode: 'cover',
              borderRadius: 50,
            }}
          />
          <Text style={{fontSize: 20, color: 'white'}}>{title}</Text>
        </View>
        <View>
          <Image source={dots} style={{height: 40, width: 40}} />
        </View>
      </View>
      <View>
        <Image
          source={postImage}
          style={{resizeMode: 'cover', width: '100%', height: 540}}
        />
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={handleLike}>
          {like ? (
            <Image source={likeImg} style={styles.likeImg} />
          ) : (
            <Image source={unLikeImg} style={styles.likeImg} />
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={commentImg} style={styles.comment} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={sendImg} style={styles.comment} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Post;
