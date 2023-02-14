import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Text } from 'styled-components/styled';

const styles = {
  backgroundColor: 'rgba(0, 0, 0, 0.87)',
  borderRadius: '4px',
  padding: '3px 16px',
};

export const UserMetaData = ({ id, text, children }) => {
  return (
    <>
      <Text id={id} data-tooltip-content={text}>
        {children}
      </Text>
      <Tooltip anchorId={id} noArrow={true} delayHide={150} style={styles} />
    </>
  );
};
