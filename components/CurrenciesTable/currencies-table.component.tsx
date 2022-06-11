import {useEffect, useState} from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import _ from "lodash"
import { FetchCoins } from "../../services";

const tableHead = ['#', 'Name', 'Price', '24h %', 'Market Cap', 'Volume(24h)', 'Circulating Supply'];

const CurrenciesTableComponent = () => {
  const [currencies, setCurrencies] = useState<any[]>([])


  const fetchCurrencies = async (): Promise<void> => {
    const data: any = await FetchCoins();
    setCurrencies(data)
  }

  useEffect(() => {
    fetchCurrencies()
  }, [])

  return (
    <TableContainer width="100%" fontSize="14px">
      <Table variant="unstyled">
        <Thead>
          <Tr>{tableHead.map((headTitle, Idx) => (<Th key={Idx}>{headTitle}</Th>))}</Tr>
        </Thead>
        <Tbody>
          {currencies.map((currency, idx) => (
            <Tr key={idx} height="10px" fontWeight="bold">
              <Td
                padding={6}
                borderBottomColor="gray.200"
                borderBottomWidth="1px"
              >
                {currency.market_cap_rank}
              </Td>
              <Td
                padding={6}
                display="flex"
                align="center"
                alignItems="center"
                fontWeight="bold"
                borderBottomColor="gray.200"
                borderBottomWidth="1px"
              >
                <Image src={currency.image} width="24px" height="width" mr="2"/>
                <Flex>
                  <Box pr="2">{currency.name}</Box>
                  <Box fontWeight="normal" fontSize="15px" color="gray.500">{_.upperCase(currency.symbol)}</Box>
                </Flex>
              </Td>
              <Td fontWeight={600} padding={6} borderBottomColor="gray.200" borderBottomWidth="1px">
                <Flex>
                  <Box>$<span>{currency.current_price.toLocaleString()}</span></Box>
                </Flex>
              </Td>
              <Td borderBottomColor="gray.200" borderBottomWidth="1px">
                {currency.price_change_percentage_24h.toFixed(2)}%
              </Td>
              <Td borderBottomColor="gray.200" borderBottomWidth="1px">
                ${currency.market_cap.toLocaleString()}
              </Td>
              <Td borderBottomColor="gray.200" borderBottomWidth="1px">
                ${currency.total_volume.toLocaleString()}
              </Td>
              <Td borderBottomColor="gray.200" borderBottomWidth="1px">
                {currency.circulating_supply.toLocaleString()} {_.upperCase(currency.symbol)}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default CurrenciesTableComponent;
