import React, { useContext } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Card, Modal} from '@ui-kitten/components';

import { PageText } from './Text';
import DataContext from '../Context/DataContext';

const ModalData = {
  'active_participants': {
    header: "Active Participants",
    body: "PGP-UK encourages its participants to be active and to engage in Citizen Science by taking on the roles of both subject and scientist."
  },
  "open_access": {
    header: "Open Access",
    body: "PGP-UK data is openly and freely available without any restrictions."
  },
  "genetic_variants": {
    header: 'Genetic Variants',
    body: 'Genetic variants are changes in the DNA sequence; for example: TCCGA to TCTGA. \n\nA variant is defined as private (unique to me or my family) if it has not been recorded in any of the main public variant databases. \n\nEpigenetic variants are chemical changes to the DNA, which alter its function without changing the DNA sequence.'
  }
}

const ModalView = () => {
  const { modalId, setModalId} = useContext(DataContext)
  const modalVisible = modalId == 'hidden' ? false : true
  const modalHeader = ModalData[modalId]?.header
  const modalText = ModalData[modalId]?.body

  return (
    <>
      <Modal
        shouldUseContainer={false}
        backdropStyle={styles.backdrop}
        visible={modalVisible}
        onBackdropPress={() => setModalId('hidden')}>
        <Card style={{position: 'absolute', top: '30%', margin: 30 }}>
          <Pressable onPress={() => setModalId('hidden')}>
            <PageText style={{color: '#63BEE1', marginBottom: 5, fontWeight: '500'}}>{modalHeader}</PageText>
            <PageText>{modalText}</PageText>
          </Pressable>
        </Card>
      </Modal>
    </>
  )
}
const styles = StyleSheet.create({
  pop_up_links: {
    color: '#63BEE1',
    paddingTop: 5,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ModalView;
