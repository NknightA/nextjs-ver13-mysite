import { Box } from "@chakra-ui/react";

export default function BodyLayout ({ children }) {
    return (
        <Box bgColor={'#000021'} color={'#fff'}>
            {children}
        </Box>
    )
}