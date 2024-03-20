import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Slider from 'react-native-slider';
import SoundPlayer from 'react-native-sound-player';
import {COLORS} from '../assets/color';
import {PlayIcon, PauseIcon} from '../vectors';
import {useIsFocused} from '@react-navigation/native';

const AudioPlayer = ({source, ...rest}) => {
  const isFocused = useIsFocused();

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const setupPlayer = async () => {
      try {
        await SoundPlayer.loadUrl(source);
        const info = await SoundPlayer.getInfo();
        setDuration(info.duration);
      } catch (error) {
        console.log('Error loading audio: ', error);
      }
    };

    setupPlayer();

    return () => {
      SoundPlayer.stop();
    };
  }, [source]);
  useEffect(() => {
    const interval = setInterval(async () => {
      if (isPlaying) {
        const info = await SoundPlayer.getInfo();
        setPosition(info.currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);
  useEffect(() => {
    return () => {
      SoundPlayer.pause();
      setIsPlaying(false);
    };
  }, [isFocused]);

  const togglePlayback = () => {
    if (isPlaying) {
      SoundPlayer.pause();
    } else {
      SoundPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  const onSeek = value => {
    console.log(value, 'seekvalue');
    SoundPlayer.seek(value);
    setPosition(value);
  };

  const formatDuration = duration => {
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };
  return (
    <View style={{marginHorizontal: 10}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={togglePlayback}
          style={{
            height: 30,
            width: 30,
            borderRadius: 80,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </TouchableOpacity>
        <Slider
          style={{width: 250, left: 10}}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onValueChange={onSeek}
          minimumTrackTintColor="pink"
          maximumTrackTintColor="white"
          thumbTintColor="red"
          {...rest}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: COLORS.primary}}>{`${formatDuration(
          position,
        )}`}</Text>
        <Text style={{color: COLORS.primary}}>{`${formatDuration(
          duration,
        )}`}</Text>
      </View>
      {/* <Button title={isPlaying ? 'Pause' : 'Play'} onPress={togglePlayback} /> */}
    </View>
  );
};

export default AudioPlayer;
