import Header from "../app/layout/header"
import BodyLayout from "../app/layout/body";
import FooterLayout from "../app/layout/footer";
import {Box, Text} from "@chakra-ui/react";

export default function Index () {
    return (
        <>
            <Header/>
            <BodyLayout>
                <p>test</p>
                <Box>
                    <Text>aaaa</Text>
                </Box>
            </BodyLayout>
            <FooterLayout/>
        </>
    )
}