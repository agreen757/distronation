// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";

export default function Notifications(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card mb='20px' {...rest}>
      <Flex align='center' w='100%' justify='space-between' mb='30px'>
        <Text
          color={textColorPrimary}
          fontWeight='bold'
          fontSize='2xl'
          mb='4px'>
          Notifications
        </Text>
        <Menu />
      </Flex>
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='1'
        label='Receive monthly reporting emails'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='2'
        label='Subscribe to newsletter'
      />
    </Card>
  );
}
