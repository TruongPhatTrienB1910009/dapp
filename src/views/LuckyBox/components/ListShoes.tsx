/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { ChainId } from '@pancakeswap/sdk'
import { Text, Flex, Button } from "@pancakeswap/uikit"
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { GetAllowance, GetPriceNfts, SetPricesNft, GetBalanceOfToken } from "../hook/fetchDataMysteryBox"
import CardShoes from "./CardShoes";
import { useBuyNFT } from "../hook/useBuyNft";
import { useApprove } from "../hook/useApprove";

// Loading

const Loading = () => {
    const rotation = keyframes`
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    `;

    const Spinner = styled.div`
      border: 8px solid rgba(0, 0, 0, 0.1);
      border-top-color: #07d669;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: ${rotation} 1s ease-in-out infinite;
      margin: 0 auto;
    `;

    const Wrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    return (
        <Wrapper>
            <Spinner />
        </Wrapper>
    );
};

interface Props {
    filter?: number
    query?: string
}
const ListShoes: React.FC<Props> = () => {
    const { account, chainId } = useActiveWeb3React();
    const [refresh, setRefresh] = useState(0)
    function onRefresh(newValue: number) {
        setRefresh(newValue)
    }
    const [balance, setBalance] = useState(-1)
    const { handleApprove, requestedApproval } = useApprove(1116, "0x585b34473CEac1D60BD9B9381D6aBaF122008504")
    const { ListPrices } = GetPriceNfts(chainId);
    const { Items } = SetPricesNft(ListPrices);
    const { allowance } = GetAllowance(account, chainId);
    const { balanceOfToken } = GetBalanceOfToken(account, chainId);
    const [currentItems, setCurrentItems] = useState([...Items]);
    const { handleBuy } = useBuyNFT(chainId, onRefresh, balance);

    const onHandleApprove = () => {
        handleApprove();
    }

    const HandleBuyNft = ({ ID }) => {
        setBalance(ID);
    }

    useEffect(() => {
        setCurrentItems([...Items])
    }, [ListPrices, allowance, balanceOfToken, account])


    useEffect(() => {
        if (balance > -1) {
            handleBuy();
            setBalance(-1);
        }
        console.log("allowance", allowance)
    }, [balance])


    return (
        <CsFlexContainer width="100%" flexDirection="column" mt="3rem" height="auto" minHeight="50vh">
            <CsFlex>
                {currentItems?.length !== 0 ?
                    <>
                        {currentItems?.map((item) => {
                            return (
                                <CardShoes
                                    balanceOfToken={balanceOfToken}
                                    ID={item.id}
                                    allowance={allowance}
                                    key={item.id}
                                    nftName={item.name}
                                    nftImage={item.image}
                                    nftPrice={item.price}
                                    nftDesc={item.desc}
                                    nftType={item.nftType}
                                    onHandleBuyNft={HandleBuyNft}
                                    handleApprove={onHandleApprove}
                                />
                            )
                        })}
                    </>
                    :
                    <Flex width='100%' justifyContent='center'>
                        <Text mt="2rem">
                            <Loading />
                        </Text>
                    </Flex>
                }
            </CsFlex>
        </CsFlexContainer>
    )
}
export default ListShoes

const CustomFlex = styled(Flex)`
    margin-bottom:1.5rem;
    .pagination{
        display:flex;
        flex-direction: row;
        width:500px;
        justify-content:space-around;
        align-items:center;
        @media screen and (max-width: 600px){
            width: 100%;
        }
        *{
            list-style-type: none;
        }
    }
    .page-link {
        background:${({ theme }) => theme.colors.tertiary};
        padding:12px;
        border-radius:5px !important;
        border:none !important;
        color:${({ theme }) => theme.colors.text};
        &:focus {
            box-shadow:none !important;
        }
        &:hover{
            background:${({ theme }) => theme.colors.backgroundTab};
        }
    }
    .page-item.disabled .page-link{
        background:${({ theme }) => theme.colors.disabled};
        cursor: not-allowed! important;
        opacity: 0.7;
        pointer-events:none;
    }
    .page-item.active .page-link{
        background:${({ theme }) => theme.colors.primaryBright};
        color:#fff;
    }
`
const CsFlex = styled(Flex)`    
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 30px;
@media screen and (min-width: 769px) and (max-width: 1024px){
    width: 80%;
    justify-content: space-evenly;
    column-gap: 0px;
    padding: 0px;
}
@media screen and (max-width: 768px){
    justify-content: space-between;
    column-gap: 0px;
    padding: 0px;
}
@media screen and (max-width: 600px){
    justify-content: center;
    gap: 0px;
    padding: 0px 10px;
}
`
const CsFlexContainer = styled(Flex)`
    @media screen and (min-width: 769px) and (max-width: 1024px){
        align-items: center;
    }
`