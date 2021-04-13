import React, { FC } from 'react';
import { Text } from 'native-base';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

interface TabBarIconProps {
  focused: boolean;
  label: PossibleRoutes;
  image: ImageSourcePropType;
}

type PossibleRoutes = 'Settings' | 'Feed' | 'Details';

export const TabBarIcon: FC<TabBarIconProps> = React.memo(
  ({ focused, label, image }) => {
    const focusedStyle = focused ? style.iconFocus : null;

    return (
      <View style={[style.tabBarIcon]}>
        <Image style={[style.iconStyle, focusedStyle]} source={image} />
        {focused && <Text style={style.tabBarText}>{label}</Text>}
      </View>
    );
  },
);

export const getTabBarIcon = (
  focused: boolean,
  label: PossibleRoutes,
  image: ImageSourcePropType,
): React.ReactNode => {
  return <TabBarIcon focused={focused} label={label} image={image} />;
};

const style = StyleSheet.create({
  iconFocus: {
    tintColor: '#238dfd',
    marginBottom: 0,
  },
  tabBarIcon: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarText: {
    color: '#FFFFFF',
    marginLeft: 7,
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: -0.16,
  },
  iconStyle: {
    marginBottom: 3,
    width: 25,
    height: 25,
  },
});
