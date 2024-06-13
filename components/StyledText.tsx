import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function MontSerratBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'MontSerratBold' }]} />;
}

export function MontSerratText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'MontSerrat' }]} />;
}

export function MontSerratSemiBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'MontSerratSemiBold' }]} />;
}

export function MontSerratMediumText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'MontSerratMedium' }]} />;
}

