import React, { useCallback, useState, useEffect } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Select, SelectItem } from "@nextui-org/react";
import useStakingAccount from "../../hooks/useStakingAccount";
import { Account } from "./components/Account";
import { InputAmount } from "./components/InputAmount";
import { TeamName } from "./components/TeamName";
import { STAKING, X314 } from "../../constants";
import { Token } from "../../constants/types";
import useAllowance from "../../hooks/useAllowance";
import { useAccount, useClient, useWriteContract } from "wagmi";
import stakingAbi from "../../assets/abis/Staking.json";
import { parseUnits } from "viem";
import { waitForTransactionReceipt } from "viem/actions";
import { useTranslation } from "react-i18next";
import { FiGift } from "react-icons/fi";
import { getReferrerFromLocal } from "../../utils/referrer";
import { ZeroAddress } from "ethers";
import moment from "moment";

function Staking() {
  // for text translation
  const {t} = useTranslation()

  // UI, for select token part
  const tokenDatas = [
    {key: "pcd ", label: "PCD"},
    {key: "pcd314", label: "PCD314"}
  ] 

  // if return true: user can click the receive button(on claim btn)
  const isOnclaimBtn = () => {
    const data = stackData
    console.log(data)
    if(data.detail) {return true}
    if(data.status == 0) {return true}

    const nowTime = moment()
    const startTime = moment(data.msg.start_time)
    const newTime = nowTime.subtract(data.msg.duration, 'days')
    // condition: now time - duration >= start time
    return !(newTime >= startTime)
  }

  // if return true: user can click the start mining button
  const isOnStart = () => {
    //return !isOnclaimBtn || stackData.status === 0;
    return !stackData.status == 0 || !isOnclaimBtn()
  }

  // test data of fetch database data
  const testData = {
    "status": 1,
    "msg": {
      "address": "abc",
      "total": 1000,
      "released": 20,
      "relay": 10,
      "last_release": "2024-07-13T15:17:07",
      "duration": 7,
      "dividend": 9,
      "refer" : "abc",
      "token": 1,
      "team_id": 1,
      "start_time": "2024-07-13T15:17:07"
    }
  }

  // store the data fetch from database. initial data is testData
  const [stackData, setStackData] = useState(testData);

 // safe token and period selected value;
  const [tokenValue, setTokenValue] = useState("");
  const [periodValue, setPeriodValue] = useState(0);

  //???
  const account = useStakingAccount()

  // user address
  const {address} = useAccount()

  // this part is fetch data from backend database. Change whenever user select token and period
  useEffect(() => {
    const url = "http://127.0.0.1:8000/deposit"
    let token, duration
    duration = periodValue
    
    if(tokenValue === "pcd314") {
      token = 1
    } else {
      token = 0;
    }

    //send token and duration value to you and then fetch data
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        "token": token,
        "duration": duration,
        "a": address
      })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStackData(data)
        console.log(data)
      })
  },[tokenValue, periodValue, address]); 

  // UI, for select period part
  const periodDatas = [
    {key: 7, label: "7day"},
    {key: 30, label: "30day"},
    {key: 90, label: "90day"}
  ];
  
  // select token and period handler, handle value change
  const handleTokenChange = (e) => { 
    setTokenValue(e.target.value);
  };
  const handlePeriodChange = (e) => { setPeriodValue(e.target.value) };



  // new object, construtor:(chain id, address, decimals, symbol, names)
  const x314 = new Token(56, X314, 18, 'X314', 'X-314')

  // store the input value in Staking text input part
  const [amount, setAmount] = useState('')

  // these part IDK
  const [depositing, setDepositing] = useState(false)
  const [claiming, setClaiming] = useState(false)
  const [loitering, setLoitering] = useState(false)
  const {writeContractAsync} = useWriteContract()
  const client = useClient()

  // IDK also
  const {
    value: allowance,
    approve,
    loading: approving
  } = useAllowance(x314, STAKING)

  // start mining button click handler
  const onDeposit = useCallback(async () => {
    setDepositing(true)
    try {
      const hash = await writeContractAsync({
        abi: stakingAbi,
        address: STAKING,
        functionName: 'depositByReferrer',
        args: [
          parseUnits(amount, 18),
          getReferrerFromLocal() || ZeroAddress
        ]
      })

      await waitForTransactionReceipt(client, {
        hash,
        confirmations: 1,
      })

      setAmount('')
    } catch (e) {
      console.log(e)
    } finally {
      setDepositing(false)
    }
  }, [amount, client, writeContractAsync])

  // receive button click handler
  const onClaim = useCallback(async () => {
    setClaiming(true)
    try {
      const hash = await writeContractAsync({
        abi: stakingAbi,
        address: STAKING,
        functionName: 'claim',
      })

      await waitForTransactionReceipt(client, {
        hash,
        confirmations: 1,
      })
    } catch (e) {
      console.log(e)
    } finally {
      setClaiming(false)
    }
  }, [client, writeContractAsync])

  // IDK
  const onLottery = useCallback(async () => {
    setLoitering(true)
    try {
      const hash = await writeContractAsync({
        abi: stakingAbi,
        address: STAKING,
        functionName: 'tryLottery',
        gas: 250000,
      })

      await waitForTransactionReceipt(client, {
        hash,
        confirmations: 1,
      })
    } catch (e) {
      console.log(e)
    } finally {
      setLoitering(false)
    }
  }, [client, writeContractAsync])

  return (
    <div className="container mx-auto max-w-lg py-8 px-4 ">
      <Card className="bg-[#dfdfd8]">

        {/* this part only UI */}
        <CardHeader className="flex justify-between">
          <div className={'flex flex-col'}>
            <p className="text-md">
              {t("staking_mining")}
            </p>
          </div>
          {/* share button in the right corner
          <div>
            <Share/>
          </div>
          */}
        </CardHeader>

        
        <CardBody className={'space-y-8 bg-[#dfdfd8]'}>
          <Account account={account} stackData={stackData} className="bg-[#dfdfd8]"/>
          <div className="flex justify-center">
            {/*  select token part*/}
            <Select 
        label={t("selectToken")} 
        className="max-w-48 pr-4"
        selectedKeys={[tokenValue]}
        onChange={handleTokenChange}
      >
        {tokenDatas.map((animal) => (
          <SelectItem key={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
            </Select>
      
            <Select 
          label={t("selectPeriod")} 
          className="max-w-48 pr-4" 
          selectedKeys={[periodValue]}
          onChange={handlePeriodChange}
          >
        {periodDatas.map((animal) => (
          <SelectItem key={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
            </Select>
          </div>

          <TeamName />
          <InputAmount x314={x314} amount={amount} setAmount={setAmount} tokenValue={tokenValue} setTokenValue={setTokenValue} periodValue={periodValue} setPeriodValue={setPeriodValue}  />
        </CardBody>
        
        <CardFooter className={'space-y-4 flex-col'}>
          <div className={'w-full flex space-x-4'}>
            <Button
                  color={'primary'}
                  className={'w-full disabled:pointer-events-none disabled:grayscale'}
                  size={'lg'}
                  variant={'flat'}
                  isLoading={depositing}
                  onClick={onDeposit}
                  disabled={isOnStart()}
                >
                  {account && account.total > 0 ? t("add") : t("start")}
            </Button>

            <Button
                  color={'secondary'}
                  className={'w-full disabled:pointer-events-none disabled:grayscale'}
                  size={'lg'}
                  variant={'flat'}
                  isLoading={claiming}
                  disabled={isOnclaimBtn()}
                  onClick={onClaim}
                >
                  {t("receive")}
            </Button>
          </div>

        </CardFooter>

      </Card>
    </div>
  )
}

export default Staking