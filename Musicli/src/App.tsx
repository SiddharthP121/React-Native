import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';

// Enable playback in silence mode for iOS
Sound.setCategory('Playback');

// List your local songs here
const songs = [
  {
    title: 'Dhurandhar Title Track',
    file: 'dhurandhar_title_track.mp3',
  },
  { title: 'Hawa Hawa', file: 'hawa_hawa.mp3' },
  {
    title: 'Ishq Jalakar Karvaan',
    file: 'ishq_jalakar_karvaan.mp3',
  },
  {
    title: 'Pal Pal Dil Ke Pas',
    file: 'pal_pal_dil_ke_paas_from_blackmail.mp3',
  },
  { title: 'Tuk Tak', file: 'tum_tak.mp3' },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const intervalRef = useRef<number | null>(null);

  // Load new sound when select a song
  const loadSound = () => {
    if (sound) {
      sound.release();
      setSound(null);
    }

    const track = new Sound(
      songs[currentIndex].file,
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.error('Error loading sound', error);
          return;
        }
        setDuration(track.getDuration());
        setSound(track);
        setPosition(0);
        setIsPlaying(false);
      },
    );
  };

  useEffect(() => {
    loadSound();

    return () => {
      if (sound) {
        sound.release;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  const playPause = () => {
    if (!sound) {
      return;
    }

    if (isPlaying) {
      sound.pause();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      sound.play(() => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsPlaying(false);
      });

      // Update the slider position every 500 ms
      intervalRef.current = setInterval(() => {
        sound.getCurrentTime(seconds => {
          setPosition(seconds);
        });
      }, 500);
    }

    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentIndex(prev => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentIndex(prev => (prev - 1 + songs.length) % songs.length);
  };

  const onSeek = (value: number) => {
    if (sound) {
      sound.setCurrentTime(value);
      setPosition(value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Now Playing: {songs[currentIndex].title}</Text>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onSlidingComplete={onSeek}
      />

      <Text style={styles.time}>
        {Math.floor(position)} / {Math.floor(duration)} sec
      </Text>

      <View style={styles.buttonRow}>
        <Button title="Prev" onPress={prevSong} />
        <Button title={isPlaying ? 'Pause' : 'Play'} onPress={playPause} />
        <Button title="Next" onPress={nextSong} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  time: {
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default App;
