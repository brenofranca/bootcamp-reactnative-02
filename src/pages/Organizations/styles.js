import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
  },
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
