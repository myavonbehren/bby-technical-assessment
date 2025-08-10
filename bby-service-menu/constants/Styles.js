// constants/Styles.js
import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const GlobalStyles = StyleSheet.create({
  // Screen Container
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background.primary,
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

  // Search Bar Styles
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.background.secondary,
  },

  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.primary,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border.light,
  },

  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    color: Colors.icon.secondary,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.text.primary,
    padding: 0,
  },

  searchPlaceholder: {
    color: Colors.text.secondary,
  },

  // Section Styles
  sectionContainer: {
    backgroundColor: Colors.background.primary,
    marginBottom: 1,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.background.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border.light,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.text.secondary,
    textTransform: 'lowercase',
    letterSpacing: 0.2,
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
    backgroundColor: Colors.background.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border.ultraLight,
    borderRadius: 10
  },

  serviceItemLast: {
    borderBottomWidth: 0,
  },

  serviceContent: {
    flex: 1,
    marginRight: 12,
  },

  serviceName: {
    fontSize: 16,
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
    fontSize: 16,
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

  // Separator
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border.ultraLight,
    marginLeft: 16,
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
    backgroundColor: Colors.background.secondary,
    flex: 1,
  },

  // Status Bar
  statusBar: {
    backgroundColor: Colors.background.primary,
  },
});

// Typography Presets
export const Typography = StyleSheet.create({
  largeTitle: {
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: -0.8,
    color: Colors.text.primary,
  },
  
  title1: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.6,
    color: Colors.text.primary,
  },
  
  title2: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.4,
    color: Colors.text.primary,
  },
  
  title3: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.4,
    color: Colors.text.primary,
  },
  
  headline: {
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: -0.4,
    color: Colors.text.primary,
  },
  
  body: {
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: -0.4,
    color: Colors.text.primary,
  },
  
  callout: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: -0.2,
    color: Colors.text.primary,
  },
  
  subhead: {
    fontSize: 15,
    fontWeight: '400',
    letterSpacing: -0.2,
    color: Colors.text.primary,
  },
  
  footnote: {
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: -0.1,
    color: Colors.text.secondary,
  },
  
  caption1: {
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    color: Colors.text.secondary,
  },
  
  caption2: {
    fontSize: 11,
    fontWeight: '400',
    letterSpacing: 0.1,
    color: Colors.text.secondary,
  },
});

// Layout Constants
export const Layout = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  
  borderRadius: {
    sm: 6,
    md: 8,
    lg: 10,
    xl: 12,
    round: 50,
  },
  
  hitSlop: {
    top: 8,
    bottom: 8,
    left: 8,
    right: 8,
  },
  
  minTouchTarget: 44,
  
  screenPadding: 16,
  listItemHeight: 56,
  headerHeight: 44,
  tabBarHeight: 49,
};