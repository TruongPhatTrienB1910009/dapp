/* eslint-disable react-hooks/exhaustive-deps */
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
            address: getAddress(contracts.coreMarketPlace, chainId),
            name: 'mysteryBoxNftMap',
            params: [idMysteryBox]
          }
        ]
        const idRunBox = await multicall(marketPlaceAbi, callBoxId, chainId);
        const index = new BigNumber(idRunBox.toString()).toNumber();
        const callBoxType = [
          {
            address: getAddress(contracts.coreMarketPlace, chainId),
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
  }, [idMysteryBox])
  return { dataBox }
}

export const FetchDataNft = (account: string, chainId: number) => {
  const [nftBalance, setNftBalance] = useState(0);
  useEffect(() => {
    console.log("FetchDataNft")
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

export const FetchTokenOfOwnerByIndex = (account: string, nftBalance: number, chainId: number) => {
  const [tokenOfOwnerByIndex, setTokenOfOwnerByIndex] = useState([]);
  useEffect(() => {
    const fetchDataBox = async () => {
      console.log("FetchTokenOfOwnerByIndex", nftBalance, account, chainId)
      const arr = []
      for (let i = 0; i < nftBalance; i++) {

        const callBoxId = [
          {
            address: getAddress(contracts.coreMarketPlace, chainId),
            name: 'tokenOfOwnerByIndex',
            params: [account, i]
          }
        ]
        // eslint-disable-next-line no-await-in-loop
        const idRunBox = await multicall(marketPlaceAbi, callBoxId, chainId);
        const index = new BigNumber(idRunBox.toString()).toNumber();
        arr.push(index)
      }

      setTokenOfOwnerByIndex(arr);
    }
    fetchDataBox();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, nftBalance])
  return { tokenOfOwnerByIndex }
}