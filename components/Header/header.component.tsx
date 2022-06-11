import { Box, Flex } from "@chakra-ui/react";
import CoinMarketCapIcon from '../../assets/icons/coinmarket-logo.svg';

const HeaderComponent = () => {
  return(
    <Flex w="100%" py="5px" px="15px" mb="10px">
      <CoinMarketCapIcon />
      <Flex
        flexDir="row"
        w="35%"
        pl="20px"
        alignItems="center"
        lineHeight="50px"
        fontWeight="bold"
        fontSize="14px"
        justifyContent="space-between"
      >
        <Box>Cryptocurrencies</Box>
        <Box>Exchanges</Box>
        <Box>NFT</Box>
        <Box>Gravity</Box>
      </Flex>
    </Flex>
  )
}

export default HeaderComponent;
