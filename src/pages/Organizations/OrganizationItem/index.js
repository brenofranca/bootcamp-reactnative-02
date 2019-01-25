import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';

import styles from './styles';

const OrganzationItem = ({ organization }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
    <Text style={styles.title}>{organization.login}</Text>
  </View>
);

OrganzationItem.propTypes = {
  organization: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrganzationItem;
