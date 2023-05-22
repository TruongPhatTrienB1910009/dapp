import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text, Flex, Button } from "@pancakeswap/uikit"
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { FetchDataNft, FetchTokenOfOwnerByIndex } from "../hook/fetchDataMysteryBox"
import CardShoes from "./CardShoes";

interface Props {
    filter?: number
    query?: string
}
const ListShoes: React.FC<Props> = () => {

    // eslint-disable-next-line prefer-const
    let currentItems = {
        token_id: 0,
        name: "Silver Box",
        image: "/images/luckybox/box0.png",
        comfy: "5",
        efficiency: "5",
        luck: "5",
        sturdence_remain: "5",
        nftType: "5",
        energy_mining: "5",
        mininghydro: "5",
        energy: "5",
        sneaker_config: [
            {
                value: 200
            },
            {
                value: 200
            }
        ],
        sturdence: 7,
        quantity: 0,
        type: "3"
    }

    const { account, chainId } = useActiveWeb3React()
    const { nftBalance } = FetchDataNft(account, chainId)
    const { tokenOfOwnerByIndex } = FetchTokenOfOwnerByIndex(account, nftBalance, chainId);
    const [listCurrentItems, setListCurrentItems] = useState([]);
    useEffect(() => {
        console.log("LIST SHOES", tokenOfOwnerByIndex)
        const arr = []
        for (let i = 0; i < nftBalance; i++) {
            // let obj = { ...currentItems }
            arr.push({ ...currentItems })
            arr[i].token_id = tokenOfOwnerByIndex[i]
        }
        setListCurrentItems(arr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nftBalance, tokenOfOwnerByIndex])

    return (
        <CsFlexContainer width="100%" flexDirection="column" mt="3rem" height="auto" minHeight="50vh">
            <CsFlex>
                {listCurrentItems?.length !== 0 ?
                    <>
                        {listCurrentItems?.map((item, index) => {
                            return (
                                <CardShoes
                                    key={index}
                                    ID={item.token_id}
                                    nftName={item.name}
                                    nftImage={item.image}
                                    nftType={item.type}
                                    speed={item.sneaker_config[1].value}
                                    quantity={item.quantity}
                                />
                            )
                        })}
                    </>
                    :
                    <Flex width='100%' justifyContent='center'>
                        <Text mt="2rem">No Data</Text>
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
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 80px;
    padding: 0px 20px;
@media screen and (min-width: 769px) and (max-width: 1024px){
    width: 80%;
    justify-content: space-between;
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