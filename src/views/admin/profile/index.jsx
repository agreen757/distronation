/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, Grid, GridItem, Icon,Table,Text,TableContainer,Tbody,Td,Tr,Input,useColorModeValue } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import Card from "components/card/Card.js";
import General from "views/admin/profile/components/General";
import Notifications from "views/admin/profile/components/Notifications";
import Projects from "views/admin/profile/components/Projects";
import Storage from "views/admin/profile/components/Storage";
import Upload from "views/admin/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import {React, useMemo} from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";


 


export default function Overview() {
  const textColorSecondary = "gray.400";
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Banner
          gridArea='1 / 1 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
        <GridItem colSpan={2}>
        <Card mb={{ base: "0px", lg: "20px" }} >
        <Text color={textColorSecondary} fontSize='sm'>
        Social URLs
      </Text>
          <TableContainer>
            <Table>
              <Tbody>
                <Tr>
                  <Td>
                    Instagram
                  </Td>
                  <Td>
                    <Input placeholder="URL"></Input>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    Twitter
                  </Td>
                  <Td>
                    <Input placeholder="URL"></Input>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    Spotify
                  </Td>
                  <Td>
                    <Input placeholder="URL"></Input>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    TikTok
                  </Td>
                  <Td>
                    <Input placeholder="URL"></Input>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          </Card>
         <Card>
          <Text color={textColorSecondary} fontSize='sm'>
          Monthly Reporting Email List
          </Text>
          <TableContainer>
            <Table>
              <Tr>
                <Td>
                  <Input value="foo@bar.com, lary@gmail.com"></Input>
                </Td>
              </Tr>
            </Table>
          </TableContainer>
          </Card>
        </GridItem>
        <GridItem colSpan={2}>
          <Card>
            <Text color={textColorSecondary} fontSize='sm'>Bank Information</Text>
            <TableContainer>
              <Table>
                <Tr>
                  <Td>
                    Bank Name
                  </Td>
                  <Td>
                  <Input></Input>
                  </Td>
                    

                </Tr>
                <Tr>
                  <Td>
                    Account Name
                  </Td>
                  <Td>
                    <Input></Input>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Account Name</Td>
                  <Td><Input></Input></Td>
                </Tr>
                <Tr>
                  <Td>Account Number</Td>
                  <Td><Input></Input></Td>
                </Tr>
              </Table>
            </TableContainer>
          </Card>
        </GridItem> 
        <GridItem colSpan={1}>
          <Card>
          <Text color={textColorSecondary} fontSize='sm'>User Details</Text>
          <TableContainer>
            <Table>
              <Tr>
                <Td>Address</Td>
                <Td><Input></Input></Td>
              </Tr>
              <Tr>
                <Td>Phone Number (POC)</Td>
                <Td><Input></Input></Td>
              </Tr>
              <Tr>
                <Td>Email</Td>
                <Td><Input></Input></Td>
              </Tr>
              <Tr>
                <Td>Website</Td>
                <Td><Input></Input></Td>
              </Tr>
            </Table>
          </TableContainer>
          </Card>
        </GridItem>
        <GridItem colSpan={1}>
        <Notifications
          used={25.6}
          total={50}
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "2 / 1 / 3 / 3",
            "2xl": "1 / 3 / 2 / 4",
          }}
        />
        </GridItem>
        
       {/* <Storage
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          used={25.6}
          total={50}
        />
        <Upload
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "1 / 3 / 2 / 4",
          }}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe='20px'
          pb={{ base: "100px", lg: "20px" }}
        /> */}
      </Grid>
      <Grid
        mb='20px'
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "10px", xl: "20px" }}>
        {/* <Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
      <General
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH='365px'
          pe='20px'
        /> */}
       
      </Grid>
    </Box>
  );
}
