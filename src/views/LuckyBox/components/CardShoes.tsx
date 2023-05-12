import {
    Flex,
    EfficiencyIcon,
    LuckIcon,
    DurabilityIcon,
    HydroIcon,
    RunningIcon,
    StarIcon,
    CupIcon,
    SturdanceIcon,
    ProgressShoes,
    Text
} from "@pancakeswap/uikit";
import { useTranslation } from "@pancakeswap/localization";
import React from 'react';
import styled from 'styled-components';
import { renderBGCard } from "utils/renderBGCard";

interface PropsCard {
    ID?: number;
    nftName?: string
    nftImage?: string
    nftType?: string
    speed?: number
    quantity?: number
    randomBoxItem?: any
}

const CardShoes: React.FC<PropsCard> = ({
    // ID,
    nftName,
    nftImage,
    nftType,
    speed,
    quantity,
    randomBoxItem
}) => {
    const { t } = useTranslation()
    console.log(randomBoxItem)
    return (
        <>
            <Container>
                <Flex width="100%" flexDirection="column">
                    <CustomCard background={renderBGCard(Number(nftType))}>
                        <ImgShoes src={nftImage} alt='Image Box' />
                    </CustomCard>
                    <Flex marginTop="10px" width="100%" justifyContent="space-between" alignItems="center" >
                        <ContainerTags background={renderBGCard(Number(nftType))}>
                            <Text bold>{nftName}</Text>
                        </ContainerTags>
                    </Flex>
                    <Flex width="100%" justifyContent="space-between" mt="10px">
                        <Flex alignItems="center">
                            <Flex width="30px">
                                <StarIcon />
                            </Flex>
                            <CustomText ml="5px">Speed</CustomText>
                        </Flex>
                        <CustomText>{speed} cm/s</CustomText>
                    </Flex>
                    <Flex width="100%" justifyContent="space-between" mt="10px">
                        <Flex alignItems="center">
                            <Flex width="30px">
                                <StarIcon />
                            </Flex>
                            <CustomText ml="5px">{t("Quantity")}</CustomText>
                        </Flex>
                        <CustomText>{quantity} {t("NFT(s)")}</CustomText>
                    </Flex>
                </Flex>
                <Button onClick={randomBoxItem}>BUY</Button>
            </Container>
        </>
    );
};

export default CardShoes;

const Container = styled.div<{ isHaving?: boolean, background?: string }>`
    width: 300px;
    height: auto;
    padding: 15px 10px 15px 10px;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 600px){
        padding: 15px 0px 15px 0px;
    }
    background-color: #DBDFEA;
`
const CustomCard = styled.div<{ background?: string }>`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 280px;
    border-radius: 8px;
    position: relative;
    justify-content: center;
    align-items: center;
`
const ImgShoes = styled.img`
    width: auto;
    height:250px;
`
const CustomText = styled(Text)`
    color:#000000;
`
const ContainerRow = styled.div`
    align-items: center;
    width: 100%;
    margin-top:10px;
    margin-bottom:10px;
    display: flex;
    flex-direction:row;
    gap:15px;
`
const ContainerProgress = styled.div`
    width:100%;
`
const ContainerTags = styled(Flex) <{ background?: string }>`
    border-radius: 6px;
    width: 100%;
    height: auto;
    justify-content: start;
    padding:6px 0px 6px 10px;
    align-items: center;
    margin-bottom:10px;
    ${Text}{
        font-size:16px;
        font-weight:bold;
    }
`

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #8294C4;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 20px;
    &:hover {
        background-color: #FFEAD2;
        color: #8294C4;
    }
    font-size: 20px;
    border: 1px solid #FFEAD2;
    font-weight: 600;
    font-family: sans-serif;
`


