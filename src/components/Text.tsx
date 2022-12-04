import React from 'react';
import { Text, Modal, Card } from '@ui-kitten/components';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { StyleSheet, Pressable } from 'react-native';

const PgpText = withSizeInfo((props) => {
  const {
    sizeSelector,
    children,
    style,
    sizeSelectorStyles,
    baseStyle,
    category,
  } = props;

  const defaultStyles = sizeSelector(sizeSelectorStyles);
  return (
    <Text category={category} style={[baseStyle, defaultStyles, style]}>
      {children}
    </Text>
  );
});

const PageHeader = (props) => {
  return (
    <PgpText
      {...props}
      category="h1"
      baseStyle={Styles.page_header_base}
      sizeSelectorStyles={{}}
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

const PageFooter = (props) => {
  return (
    <PgpText
      {...props}
      category="p1"
      baseStyle={Styles.page_footer_base}
      sizeSelectorStyles={{
        lg: Styles.page_text_lg,
      }}
    />
  );
};

const TextModal = (props) => {
  const { modal_text } = props;
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Pressable onPress={() => setVisible(true)}>
        <PgpText
          {...props}
          category="p1"
          baseStyle={Styles.page_footer_base}
          sizeSelectorStyles={{
            lg: Styles.page_text_lg,
          }}
        />
      </Pressable>

      <Modal
        backdropStyle={Styles.backdrop}
        visible={visible}
        onBackdropPress={() => setVisible(false)}>
        <Card style={{margin: 30}}>
          <Pressable onPress={() => setVisible(false)}>
            <PgpText
              category="p1"
              baseStyle={Styles.page_footer_base}
              sizeSelectorStyles={{
                lg: Styles.page_text_lg,
              }}>
              {modal_text}
            </PgpText>
          </Pressable>
        </Card>
      </Modal>
    </>
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
  page_footer_base: {
    color: '#666E7A',
    fontSize: 20,
  },
  page_text_lg: {
    fontSize: 23,
  },
  page_footer_xs: {
    fontSize: 10,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export { PageHeader, PageText, PageFooter, TextModal };
