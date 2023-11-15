import React from 'react'
import {  Card, CardHeader, CardBody, CardFooter ,Image,Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'
const Cards = ({number,name}) => {
  return (
        <Card minW="xs" margin='1%'>
            <CardBody>
                <Stack mt='1' spacing='3'>
                <Heading size='sm'>{name}</Heading>
                <Text color='blue.600' fontSize='2xl'>
                    {number}
                </Text>
                </Stack>
            </CardBody>
    </Card>
  )
}

export default Cards