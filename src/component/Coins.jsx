import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack, Heading, VStack, fadeConfig } from "@chakra-ui/react";
import Loader from "./Loader";


const Coin = () => {
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

  return <Container maxWidth={"container.xl"} bgColor={"Dark Purple"}>{loading ?<Loader/> :<>
  
  <HStack wrap={'wrap'}>
 
  {exchanges.map((i)=>(

    <ExchangeCard 
    bgColor={"Maroon"}
    key ={i.id}
    name={i.name} 
    img={i.image} 
    rank={i.trust_score_rank}
    url={i.url} 
    year_established= { i.year_established}/>
  ))}
   </HStack >
  
  </> }</Container>;
  
};


const ExchangeCard = ({ name, img, rank, url, year_established }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <VStack width={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"}
      css={{
        "&:hover": { transform: "scale(1.05)", }
      }}>
      <img src={img} width={40} height={40} objectFit="contain" alt="exchange" />
      <Heading color="white"  size="md" noOfLines={1}>
        {rank}
      </Heading>
      <text color="black" noOfLines={1}>{name}</text>
      <text color="black" noOfLines={1}>{ year_established}</text>
    </VStack>
  </a>
);


export default Coin;


