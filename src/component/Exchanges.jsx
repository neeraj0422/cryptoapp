import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack, Heading, VStack, fadeConfig } from "@chakra-ui/react";
import Loader from "./Loader";


const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);

      setExchanges(data);
      console.log(data);
      setLoading(false);
    };
    fetchExchanges();
  }, []);

  return <Container maxWidth={"container.xl"} bgColor={"Midnight Blue"}>{loading ?<Loader/> :<>
  
  <HStack wrap={'wrap'}>
 
  {exchanges.map((i)=>(

    <ExchangeCard 
    key ={i.id}
    name={i.name} 
    img={i.image} 
    rank={i.trust_score_rank}
    url={i.url} />
  ))}
   </HStack >
  
  </> }</Container>;
  
};


const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <VStack width={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"}
      css={{
        "&:hover": { transform: "scale(1.05)", }
      }}>
      <img src={img} width={40} height={40} objectFit="contain" alt="exchange" />
      <Heading color="black"  size="md" noOfLines={1}>
        {rank}
      </Heading>
      <text color="black" noOfLines={1}>{name}</text>
    </VStack>
  </a>
);


export default Exchanges;


