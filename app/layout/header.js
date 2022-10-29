import { ChakraProvider, Box ,Text} from "@chakra-ui/react";


export default function Header ({ children }) {
    return (
        <ChakraProvider>
            <Box>
                <Box bgColor={'#000021'}
                     color={'#ff5500'}
                    p={1}>
                    <Text fontSize={40}>Nknight AMAMIYA Blog.</Text>
                </Box>
                {children}
            </Box>
        </ChakraProvider>
    )

}