// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {COLORS} from '../../../components/assets/color';
// import {HeartIcon} from '../../../components/vectors';
// import CustomCard from '../../../components/dynamicForms/customCard';
// import AudioPlayer from '../../../components/dynamicForms/customAudioPlayer';

// export default function RenderExperts({item, navigation}) {
//   console.log(item, 'expertitem');

//   const StarRating = ({numberOfStars}) => {
//     // Create an array of length equal to numberOfStars
//     const starsArray = Array.from({length: numberOfStars});
//     const emptyStars = 5 - numberOfStars;

//     return (
//       <View style={{flexDirection: 'row'}}>
//         {starsArray.map((_, index) => (
//           <Text style={{color: 'red', fontSize: 20}} key={index}>
//             ☆
//           </Text>
//         ))}
//         {[...Array(emptyStars)].map((_, index) => (
//           <Text
//             style={{color: 'gray', fontSize: 20}}
//             key={index + numberOfStars}>
//             ☆
//           </Text>
//         ))}
//       </View>
//     );
//   };

//   return (
//     <CustomCard
//       onPress={() =>
//         navigation.navigate('CustomVideo', {
//           src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//         })
//       }>
//       <Text style={{color: COLORS.primary}}>{item.name}</Text>
//       <Text style={{color: COLORS.primary}}>{item.distance} km away</Text>
//       <StarRating numberOfStars={item.rating} />
//       <TouchableOpacity style={{position: 'absolute', top: 10, right: 10}}>
//         <HeartIcon />
//       </TouchableOpacity>
//       <AudioPlayer
//         maximumTrackTintColor={COLORS.primary}
//         source="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
//       />
//     </CustomCard>
//   );
// }
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../components/assets/color';
import {HeartIcon} from '../../../components/vectors';
import CustomCard from '../../../components/dynamicForms/customCard';
import AudioPlayer from '../../../components/dynamicForms/customAudioPlayer';
import CustomActionSheet from '../../../components/dynamicForms/customBottomSheet';

interface Expert {
  name: string;
  distance: number;
  rating: number;
}

interface RenderExpertsProps {
  item: Expert;
  navigation: any;
}

const RenderExperts: React.FC<RenderExpertsProps> = ({item, navigation}) => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const StarRating: React.FC<{numberOfStars: number}> = ({numberOfStars}) => {
    const starsArray = Array.from({length: numberOfStars});
    const emptyStars = 5 - numberOfStars;

    return (
      <View style={{flexDirection: 'row'}}>
        {starsArray.map((_, index) => (
          <Text style={{color: 'red', fontSize: 20}} key={index}>
            ☆
          </Text>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <Text
            style={{color: 'gray', fontSize: 20}}
            key={index + numberOfStars}>
            ☆
          </Text>
        ))}
      </View>
    );
  };
  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  return (
    <CustomCard
      onPress={() =>
        navigation.navigate('CustomVideo', {
          src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        })
      }>
      <Text style={{color: COLORS.primary}}>{item.name}</Text>
      <Text style={{color: COLORS.primary}}>{item.distance} km away</Text>
      <StarRating numberOfStars={item.rating} />
      <TouchableOpacity
        onPress={toggleSheet}
        style={{position: 'absolute', top: 10, right: 10}}>
        <HeartIcon />
      </TouchableOpacity>
      <AudioPlayer
        maximumTrackTintColor={COLORS.primary}
        source="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <CustomActionSheet isOpen={isSheetOpen} setSheet={setIsSheetOpen}>
        <Text style={{color: 'red'}}>Action 1</Text>
        <Text style={{color: 'red'}}>Action 2</Text>
        <Text style={{color: 'red'}}>Action 3</Text>
      </CustomActionSheet>
    </CustomCard>
  );
};

export default RenderExperts;
