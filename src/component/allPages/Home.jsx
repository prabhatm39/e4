import React from 'react'
import { Button } from '@chakra-ui/react'
import { Show } from './Show'
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'
import { AddHos } from './AddHos';
import { Container } from '@chakra-ui/react'
import { AddDoc } from './AddDoc'

 

export const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <div>
        
         <Button color='red' variant='solid' onClick={onOpen}>
    Add Hospital
  </Button>
  <Container >
  <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <AddHos />
          </ModalBody>

          <ModalFooter>
            
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Container>
  <br/>
  <br/>
  <hr/>
  <br/>
  
  <AddDoc />


  
  <br/>
  <br/>
  <Show />
    </div>
  )
}
