import React, { useContext } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Card, Modal } from '@ui-kitten/components';

import { PageText } from './Text';
import DataContext from '../Context/DataContext';
import IntroVideo from '../screens/Individual/Landing/IntroVideo';

const ModalData = {
  active_participants: {
    header: 'Active Participants',
    body: (
      <PageText
        children={
          'PGP-UK encourages its participants to be active and to engage in Citizen Science by taking on the roles of both subject and scientist.'
        }
      />
    ),
    hideOnPress: true,
  },
  open_access: {
    header: 'Open Access',
    body: (
      <PageText
        children={
          'PGP-UK data is openly and freely available without any restrictions.'
        }
      />
    ),
    hideOnPress: true,
  },
  genetic_variants: {
    header: 'Genetic Variants',
    body: (
      <PageText
        children={
          'Genetic variants are changes in the DNA sequence; for example: TCCGA to TCTGA. \n\nA variant is defined as private (unique to me or my family) if it has not been recorded in any of the main public variant databases. \n\nEpigenetic variants are chemical changes to the DNA, which alter its function without changing the DNA sequence.'
        }
      />
    ),
    hideOnPress: true,
  },
  intro_video: {
    header: 'My Story',
    body: <IntroVideo />,
    hideOnPress: false,
  },
};

const ModalView = () => {
  const { modalId, setModalId } = useContext(DataContext);
  const modalVisible = modalId == 'hidden' ? false : true;
  const modalHeader = ModalData[modalId]?.header;
  const modalBody = ModalData[modalId]?.body;
  const hideOnPress = ModalData[modalId]?.hideOnPress;

  return (
    <>
      <Modal
        shouldUseContainer={false}
        supportedOrientations={[
          'portrait',
          'portrait-upside-down',
          'landscape',
          'landscape-left',
          'landscape-right',
        ]}
        backdropStyle={styles.backdrop}
        visible={modalVisible}
        onBackdropPress={() => setModalId('hidden')}>
        <Card style={styles.modalCard}>
          <Pressable onPress={() => hideOnPress && setModalId('hidden')}>
            <PageText
              style={{ color: '#63BEE1', marginBottom: 5, fontWeight: '500' }}>
              {modalHeader}
            </PageText>
            {modalBody}
          </Pressable>
        </Card>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  pop_up_links: {
    color: '#63BEE1',
    paddingTop: 5,
  },
  modalCard: {
    position: 'absolute',
    top: '10%',
    margin: 30,
    alignSelf: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ModalView;
