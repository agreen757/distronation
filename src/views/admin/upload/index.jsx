import { Box, 
        Link, 
        Grid, 
        Button, 
        GridItem, 
        Avatar, 
        Icon,
        List,
        ListIcon,
        ListItem,
        Input,
        useColorModeValue, 
        FormControl, 
        FormLabel,
        InputGroup,
        InputLeftAddon,
        CheckboxGroup,
        Checkbox,
        Stack,
        RadioGroup,
        Radio,
        Table,
        Thead,
        Tbody,
        Tr,
        Td,
        useDisclosure,
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        Select,
        Textarea,
        ModalCloseButton,} from "@chakra-ui/react";

import Card from "components/card/Card.js";
import { FaUpload, FaImages, FaMusic } from "react-icons/fa";
import {useDropzone} from 'react-dropzone';
import React, {useState} from 'react';

export default function Upload() {
    const upColor = useColorModeValue("gray.700", "white");
    const inputcolor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue(
        "white !important",
        "#111C44 !important"
      );
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    //const [fileMetadata, setFileMetadata] = useState(acceptedFiles.map(file => {  return {name:file.name}  }));

    const { isOpen, onOpen, onClose } = useDisclosure()

    const files = acceptedFiles.map(file => {
       
        let icon;
        if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
            icon = FaImages;
        } else if (file.type === 'audio/mp3' || file.type === 'audio/mpeg' || file.type === 'audio/wav') {
            icon = FaMusic;
        }
        return (<ListItem>
                    <Link onClick={onOpen}>
                        <ListIcon as={icon} color="green.500" />
                        {file.name}
                    </Link>
                
                </ListItem>
            )
    })
    let fileMetadata = acceptedFiles.map(file => {

    })
   
    return (
        <Box pt={{ base: "130px", md: "90px", xl: "100px" }}>
           <Grid
            templateColumns="repeat(5, 1fr)"
            templateRows={{
            base: "repeat(2, 1fr)",
            lg: "1fr",
            }}>

            <GridItem colStart={1} colSpan={2}>
                <Card>
                    <section className="container">
                        <div {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} />
                        <Grid pt='20px' templateColumns='repeat(3 1fr)'>
                        <GridItem colStart={2}>
                        <Avatar bg='none' border='4px solid' borderColor='black' h='107px' w='107px' icon={ <Icon color={upColor} boxSize='3em'  h='24px' as={FaUpload} />} />
                        </GridItem>
                    </Grid>
                        </div>
                    </section>
                    <br></br>
                    <center>Upload Audio Images and Metadata</center>
                    
            
                
                </Card>
                <Box p={4}>
                <Table>
                    
                </Table>
                <List>
                    {files}
                </List>
            </Box>  
            </GridItem>
            <GridItem colStart={3} colSpan={3}>
            <form>
                <Grid templateColumns='repeat(3, 1fr)' templateRows="repeat(3, 1fr)">
                    <GridItem colStart={1} colSpan={1}>
                        <FormControl isRequired p={5}>
                            <FormLabel>Album</FormLabel>
                                <InputGroup>
                                    <Input color={inputcolor} type={'text'} placeholder="Album" />
                                </InputGroup>
                        </FormControl>
                    </GridItem>
                    <GridItem colStart={2} colSpan={1}>
                        <FormControl p={5}>
                            <FormLabel>Artist</FormLabel>
                                <InputGroup>
                                    <Input color={inputcolor} type={'text'} placeholder="Artist" />
                                </InputGroup>
                        </FormControl>
                    </GridItem>
                    <GridItem colStart={3} colSpan={1}>
                        <FormControl p={5}>
                            <FormLabel>Genre</FormLabel>
                                <InputGroup>
                                    <Input color={inputcolor} type={'text'} placeholder="Genre" />
                                </InputGroup>
                        </FormControl>
                    </GridItem>
                    <GridItem colStart={1} colSpan={1}>
                        <FormControl p={5}>
                            <FormLabel>UPC</FormLabel>
                                <InputGroup>
                                    <Input color={inputcolor} type={'text'} placeholder="UPC" />
                                </InputGroup>
                        </FormControl>
                    </GridItem>
                    <GridItem colStart={2} colSpan={1}>
                        <FormControl p={5}>
                            <FormLabel>Publisher</FormLabel>
                                <InputGroup>
                                    <Input color={inputcolor} type={'text'} placeholder="Publisher" />
                                </InputGroup>
                        </FormControl>
                    </GridItem>
                    <GridItem colStart={3} colSpan={1}>
                        <FormControl p={5}>
                            <FormLabel>Publishing Year</FormLabel>
                                <InputGroup>
                                    <Input color={inputcolor} type={'text'} placeholder="Publishing Year" />
                                </InputGroup>
                        </FormControl>
                    </GridItem>
                    <GridItem colStart={1} colSpan={1}>
                        <FormControl p={5}> 
                            <FormLabel>Ownership</FormLabel>
                                <InputGroup>
                                    <Input color={inputcolor} type={'text'} placeholder="Ownership" />
                                </InputGroup>
                        </FormControl>
                    </GridItem>
                    <GridItem colStart={2} colSpan={1}>
                        <FormControl p={5}>
                            <FormLabel>Excluded Ownership</FormLabel>
                                <InputGroup>
                                    <Input color={inputcolor} type={'text'} placeholder="Excluded Ownership" />
                                </InputGroup>
                        </FormControl>
                    </GridItem>
                </Grid>
                <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(1, 1fr)'>
                    <GridItem colStart={1} colSpan={1}>
                        <FormControl isRequired p={5}>
                            <FormLabel>Release Date</FormLabel>
                            <InputGroup>
                            
                                <Input color={inputcolor} type='date' placeholder="Release Date" />
                            </InputGroup>
                            
                        </FormControl>
                    </GridItem>
                    <GridItem colStart={2} colSpan={2}>
                        <FormControl is isRequired p={5}>
                            <CheckboxGroup>
                                <FormLabel>Upload Destination</FormLabel>
                            <Stack spacing={10} direction="row">
                                <Checkbox>YouTube</Checkbox>
                                <Checkbox>YouTube Music</Checkbox>
                                <Checkbox>Streaming</Checkbox>
                            </Stack>
                            </CheckboxGroup>
                        </FormControl>
                    </GridItem>
                    <GridItem colStart={1} colSpan={3}>
                        <FormControl isRequired p={5}>
                            <FormLabel>Policy</FormLabel>
                            <RadioGroup>
                                <Stack spacing={5} direction="row">
                                    <Radio value="Monetize">Monetize</Radio>
                                    <Radio value="Track">Non-Monetize</Radio>
                                    <Radio value="Block">Block</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                    </GridItem>
                </Grid>
               <Button colorScheme="blue" variant="outline" size="lg" w='100%' h='100%' mt='20px'>Validate</Button>
              
            </form>
           
        </GridItem>
        <GridItem colSpan={1}></GridItem>

        </Grid>
       <Modal isOpen={isOpen} onClose={onClose} color={inputcolor}>
            <ModalOverlay />
                <ModalContent>
                    <ModalHeader>File Metadata Entry</ModalHeader>
                    <ModalBody>
                        <form>
                        <Grid templateColumns='repeat(2, 1fr)' templateRows="repeat(1, 1fr)">
                            <GridItem colStart={1} colSpan={1}>
                                <FormControl isRequired p={5}>
                                    <FormLabel>Resource Type</FormLabel>
                                    <Stack spacing={3}>
                                        <Select>
                                            <option value="SoundRecording">Sound Recording</option>
                                            <option value="MusicVideo">Video</option>
                                            <option value="Image">Image</option>
                                        </Select>
                                    </Stack>
                                </FormControl>
                                <FormControl isRequired p={5}>
                                    <FormLabel>Artist</FormLabel>
                                    <InputGroup>
                                        <Input color={inputcolor} size='sm' type={'text'} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired p={5}>
                                    <FormLabel>Song Title</FormLabel>
                                    <InputGroup>
                                        <Input color={inputcolor} size='sm' type={'text'} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired p={5}>
                                    <FormLabel>ISRC</FormLabel>
                                    <InputGroup>
                                        <Input color={inputcolor} size='sm' type={'text'} />
                                    </InputGroup>
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl isRequired p={5}>
                                    <FormLabel>Track Number</FormLabel>
                                    <InputGroup>
                                        <Input color={inputcolor} size='sm' type={'text'} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired p={5}>
                                    <FormLabel>Song Length</FormLabel>
                                    <InputGroup>
                                        <Input color={inputcolor} size='sm' type={'time'} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired p={5}>
                                    <FormLabel>Parental Warning</FormLabel>
                                    <Stack spacing={3}>
                                        <Select>
                                            <option value="NotExplicit">Not Explicit</option>
                                            <option value="Explicit">Explicit</option>
                                            <option value="Unknown">Unknown</option>
                                            <option value="NoAdviceAvailable">No Advice Available</option>
                                        </Select>
                                    </Stack>
                                </FormControl>
                            </GridItem>
                        </Grid>
                        <FormControl p={5}>
                            <FormLabel>Notes</FormLabel>
                            <InputGroup>
                                <Textarea color={inputcolor} type={'text'} />
                            </InputGroup>
                        </FormControl>
                        <Button colorScheme="blue" variant="outline" size="lg" w='100%' h='100%' mt='20px'>Update</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
       </Modal>
        
        </Box>
    )

}