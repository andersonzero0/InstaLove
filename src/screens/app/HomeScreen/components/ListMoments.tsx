import {Box, Icon, PressableBox, Text} from '@components';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export type Moments = {
  id: string;
  imageUrl: string;
  description: string;
  date: string;
};

type ListMomentsProps = {
  moments: Moments[];
};

export function ListMoments({moments}: ListMomentsProps) {
  function renderItem({item}: ListRenderItemInfo<Moments>) {
    const {imageUrl, date} = item;

    const formatDate = format(date, 'dd MMM yyyy', {
      locale: ptBR,
    });

    const [day, monthYear, year] = formatDate.split(' ', 3);

    const formattedDate = `${day} ${monthYear}\n${year}`;

    return (
      <Box
        width={SCREEN_WIDTH / 3.2}
        justifyContent="center"
        alignItems="flex-start"
        style={{aspectRatio: 9 / 16, position: 'relative'}}>
        <Image
          source={{uri: imageUrl}}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            overflow: 'hidden',
            borderRadius: 12,
            flex: 1,
          }}
        />
        <LinearGradient
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            position: 'absolute',
          }}
          colors={['transparent', 'rgba(0,0,0,0.9)']}
        />
        <Text bold style={{position: 'absolute', bottom: 10, left: 12}}>
          {formattedDate}
        </Text>
      </Box>
    );
  }

  return (
    <Box gap="s8">
      <PressableBox
        paddingHorizontal="s24"
        hitSlop={10}
        flexDirection="row"
        justifyContent="space-between">
        <Text semiBold>Meu momentos</Text>
        <Icon name="chevron-forward" />
      </PressableBox>
      <FlatList
        contentContainerStyle={{gap: 8, paddingHorizontal: 24}}
        horizontal
        data={moments}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
}
