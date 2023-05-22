// eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
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

const tokenOfOwnerByIndex = [4, 5, 8, 9, 10, 11, 12, 13, 15]
let arr = [];
for (let i = 0; i < tokenOfOwnerByIndex.length; i++) {
    const temp = { ...currentItems };
    temp.name += i;
    arr.push(temp);
    console.log(arr)
    arr[i].token_id = i;
    // console.log(i)
    console.log(arr[i].token_id)
    // console.log(arr)
}

// console.log(arr)