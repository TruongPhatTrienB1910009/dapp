/* eslint-disable no-await-in-loop */
import { getAddress } from "utils/addressHelpers";
import contracts from "config/constants/contracts";
import multicall from "utils/multicall";
import marketPlaceAbi from "config/abi/marketPlaceAbi.json"
import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";

export const FetchDataRunBoxIsOpen = (idMysteryBox, chainId: number) => {
  const [dataBox, setDataBox] = useState({
    tokenId: 0,
    type: 0
  });
  useEffect(() => {
    const fetchDataBox = async () => {
      try {
        const callBoxId = [
          {
            address: getAddress(contracts.mysteryBox, chainId),
            name: 'mysteryBoxNftMap',
            params: [idMysteryBox]
          }
        ]
        const idRunBox = await multicall(marketPlaceAbi, callBoxId, chainId);
        const index = new BigNumber(idRunBox.toString()).toNumber();
        const callBoxType = [
          {
            address: getAddress(contracts.mysteryBox, chainId),
            name: 'getBoxTypeRunTogether',
            params: [index]
          }
        ]
        const boxType = await multicall(marketPlaceAbi, callBoxType, chainId);
        setDataBox({
          tokenId: new BigNumber(idRunBox.toString()).toNumber(),
          type: new BigNumber(boxType.toString()).toNumber()
        })
      } catch (e) {
        console.log(e)
      }
    }
    fetchDataBox()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idMysteryBox])
  return { dataBox }
}

export const FetchDataNft = (account: string, chainId: number) => {
  const [nftBalance, setNftBalance] = useState(0);
  useEffect(() => {
    const fetchDataBox = async () => {
      try {
        const callBoxId = [
          {
            address: getAddress(contracts.coreMarketPlace, chainId),
            name: 'balanceOf',
            params: [account]
          }
        ]
        const idRunBox = await multicall(marketPlaceAbi, callBoxId, chainId);
        const index = new BigNumber(idRunBox.toString()).toNumber();

        setNftBalance(index)
      } catch (e) {
        console.log(e)
      }
    }
    fetchDataBox()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])
  return { nftBalance }
}


export const GetAllowance = (account: string, chainId: number) => {
  const [nftBalance, setNftBalance] = useState(0);
  useEffect(() => {
    const fetchDataBox = async () => {
      try {
        const callBoxId = [
          {
            address: getAddress(contracts.coreMarketPlace, chainId),
            name: 'balanceOf',
            params: [account]
          }
        ]
        const idRunBox = await multicall(marketPlaceAbi, callBoxId, chainId);
        const index = new BigNumber(idRunBox.toString()).toNumber();

        setNftBalance(index)
      } catch (e) {
        console.log(e)
      }
    }
    fetchDataBox()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])
  return { nftBalance }
}


export const GetPriceNfts = (chainId: number) => {
  const [ListPrices, setListPrices] = useState([]);
  useEffect(() => {
    const Prices = [];
    const fetchDataBox = async () => {
      for (let i = 0; i < 3; i++) {
        try {
          const callBoxId = [
            {
              address: getAddress(contracts.coreMarketPlace, chainId),
              name: 'NFT_PRICE',
              params: [i]
            }
          ]
          const idRunBox = await multicall(marketPlaceAbi, callBoxId, chainId);
          const index = new BigNumber(idRunBox.toString()).toNumber();
          Prices.push((index / 1e18));
        }
        catch (e) {
          console.log("try catch error")
          console.log(e)
        }
      }
      console.log(Prices)
      // setListPrices([...Prices]);

    }
    fetchDataBox();
    console.log(ListPrices)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { ListPrices }
}