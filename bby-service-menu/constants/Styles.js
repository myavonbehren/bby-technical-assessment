// constants/Styles.js
import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const GlobalStyles = StyleSheet.create({
  // Screen Container
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background.primary,
    paddingHorizontal: 16,
    paddingVertical: 5
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.background.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border.light,
  },
  
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text.primary,
    letterSpacing: -0.4,
  },

  headerIcon: {
    width: 24,
    height: 24,
    color: Colors.icon.primary,
  },


  // Section Styles
  sectionContainer: {
    backgroundColor: Colors.background.secondary,
    marginBottom: 10,
    borderRadius: 10,
    padding: 8,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 0.1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 0.1,
    elevation: 1
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background.secondary,
    borderRadius: 10,
    paddingHorizontal: 10
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text.secondary,
    letterSpacing: 0.2,
    paddingVertical: 10
  },

  chevronIcon: {
    width: 16,
    height: 16,
    color: Colors.icon.secondary,
  },

  // Service Item Styles
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: Colors.background.primary,
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 0.1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 0.1,
    elevation: 1,
    marginBottom: 10
  },

  serviceItemLast: {
    borderBottomWidth: 0,
  },

  serviceContent: {
    flex: 1,
    marginRight: 12,
  },

  serviceName: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.text.primary,
    marginBottom: 2,
    letterSpacing: -0.2,
    marginLeft: 10,
  },

  serviceDuration: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.text.secondary,
    marginLeft: 10,
  },

  serviceRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  servicePrice: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text.primary,
    marginRight: 20,
    letterSpacing: -0.2,
  },

  moreIcon: {
    width: 20,
    height: 20,
    color: Colors.icon.tertiary,
  },

  // Touch Feedback
  touchable: {
    activeOpacity: 0.6,
  },

  // Hit Slop for better touch targets
  hitSlop: {
    top: 8,
    bottom: 8,
    left: 8,
    right: 8,
  },

  // Shadow (iOS)
  cardShadow: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  // List Container
  listContainer: {
    backgroundColor: Colors.background.primary,
    flex: 1
  }
});