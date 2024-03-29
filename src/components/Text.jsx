import React from 'react';
import { Text } from '@ui-kitten/components';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { StyleSheet } from 'react-native';

const PgpText = withSizeInfo((props) => {
  const {
    sizeSelector,
    children,
    style,
    sizeSelectorStyles = {},
    baseStyle,
    category,
    onPress,
  } = props;

  const defaultStyles = sizeSelector(sizeSelectorStyles);
  return (
    <Text
      category={category}
      style={[baseStyle, defaultStyles, style]}
      onPress={onPress}>
      {children}
    </Text>
  );
});

const PageHeader = ({ category, baseStyle, ...restProps }) => {
  return (
    <PgpText
      {...restProps}
      category={category || 'h1'}
      baseStyle={[baseStyle, Styles.page_header_base]}
    />
  );
};

const PageText = (props) => {
  return (
    <PgpText
      {...props}
      category="p1"
      baseStyle={Styles.page_text_base}
      sizeSelectorStyles={{
        lg: Styles.page_text_lg,
      }}
    />
  );
};

const Styles = StyleSheet.create({
  page_header_base: {
    color: '#63BEE1',
    fontWeight: '400',
  },
  page_text_base: {
    color: '#666E7A',
    fontSize: 20,
  },
  page_text_lg: {
    fontSize: 23,
  },
});

export { PageHeader, PageText, PgpText };
