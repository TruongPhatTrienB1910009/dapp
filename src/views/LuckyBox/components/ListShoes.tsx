import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text, Flex, Button } from "@pancakeswap/uikit"
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { FetchDataNft } from "../hook/fetchDataMysteryBox"
import CardShoes from "./CardShoes";

interface Props {
    filter?: number
    query?: string
}
const ListShoes: React.FC<Props> = () => {

    const currentItems = [
        {
            id: 0,
            name: "Silver Box",
            image: "/images/luckybox/box0.png",
            nftType: 0,
        },
        {
            id: 1,
            name: "Gold Box",
            image: "/images/luckybox/box1.png",
            nftType: 1,
        },
        {
            id: 2,
            name: "Diamond Box",
            image: "/images/luckybox/box2.png",
            nftType: 2,
        },
    ]

    const { account, chainId } = useActiveWeb3React()
    // How to get data from blockchain <<<< 
    const { nftBalance } = FetchDataNft(account, chainId)
    currentItems[0].quantity = nftBalance;


    return (
        <CsFlexContainer width="100%" flexDirection="column" mt="3rem" height="auto" minHeight="50vh">
            <CsFlex>
                {currentItems?.length !== 0 ?
                    <>
                        {currentItems?.map((item) => {
                            return (
                                <CardShoes
                                    ID={item.token_id}
                                    nftName={item.name}
                                    nftImage={item.image}
                                    nftType={item.type}
                                />
                            )
                        })}
                    </>
                    :
                    <h1>NO DATA</h1>
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