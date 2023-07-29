import { Box, Spinner, VStack } from '@chakra-ui/react'
import { Scale } from 'chart.js'
import React from 'react'

const Loader = () => {
  return (
   <VStack height={"90vh"} justifyContent={"center"}>

<Box transform={"Scale(3)"}>

<Spinner size={"xl"}></Spinner>

</Box>


   </VStack>
  )
}

export default Loader