import React, {useEffect, useRef, ReactNode} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

interface CustomActionSheetProps {
  isOpen: boolean;
  children: ReactNode; // Define the type for the children prop
  setSheet: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomActionSheet: React.FC<CustomActionSheetProps> = ({
  isOpen,
  children,
  setSheet,
}) => {
  const actionSheetRef = useRef<ActionSheet>(null);
  useEffect(() => {
    if (isOpen) {
      actionSheetRef.current?.setModalVisible(true);
    } else {
      actionSheetRef.current?.setModalVisible(false);
      setSheet(false);
    }
  }, [isOpen]);

  return (
    <ActionSheet ref={actionSheetRef} onClose={() => setSheet(false)}>
      <View style={{padding: 20}}>{children}</View>
    </ActionSheet>
  );
};

export default CustomActionSheet;
