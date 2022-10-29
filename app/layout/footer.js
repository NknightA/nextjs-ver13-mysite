import { Box } from "@chakra-ui/react";

export default function FooterLayout ({ children }) {
    return (
        <>
            <Box bgColor={'#ff5500'} color={'#fff'} textAlign={'center'}>
                {children}
                <p>Nknight AMAMIYA - All rights reserved. </p>
            </Box>
        </>
    )
}