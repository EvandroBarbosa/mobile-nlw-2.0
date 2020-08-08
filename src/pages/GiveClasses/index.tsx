import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {View, ImageBackground, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import giveClassesBgImg from '../../assets/images/give-classes-background.png';

const GiveClasses: React.FC = () => {
  const {goBack} = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImg}
        style={styles.content}>
        <Text style={styles.title}>Quer ser um proffy</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastra como professor em nossa
          plataforma
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
