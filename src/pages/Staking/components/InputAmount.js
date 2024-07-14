import { formatAmount } from "../../../utils/amount";
import { formatUnits } from "viem";
import { Button } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import { useAccount } from "wagmi";
import useCurrencyBalance from "../../../hooks/useCurrencyBalance";
import { useTranslation } from "react-i18next";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";

export const InputAmount = ({amount, setAmount, x314}) => {

  // safe token and period selected value;
  const [tokenValue, setTokenValue] = useState("");
  const [periodValue, setPeriodValue] = useState("");

  // select token and period handler
  const handleTokenChange = (e) => { setTokenValue(e.target.value) };
  const handlePeriodChange = (e) => { setPeriodValue(e.target.value) };
  
  // for translation text
  const { t } = useTranslation()

  // ???
  const {address} = useAccount()

  // for the balance value
  const balance = useCurrencyBalance(x314, address)

  // for the select token part
  const tokenDatas = [
    {key: "pcd ", label: "PCD"},
    {key: "pcd314", label: "PCD314"}
  ] 

  // for the select period part
  const periodDatas = [
    {key: "7day", label: "7day"},
    {key: "30day", label: "30day"},
    {key: "90day", label: "90day"}
  ];

  return (
    <div className={`border px-3 py-2.5 flex flex-col rounded-xl border-[#9ca3af]`}>
      <div className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-1 text-sm text-slate-400'}>
          <span>{t("staking")}</span>
        </div>

        <div className={'flex items-center space-x-3 text-sm text-slate-400'}>
          <span>{t("balance")}: {formatAmount(formatUnits(balance, x314.decimals))}</span>
          {
            <Button
              size={'sm'}
              className={'px-1 py-0.5 m-0 min-w-0 h-fit'} radius={'sm'} color={'primary'}
              variant={'flat'}
              onClick={() => {
                setAmount(formatUnits(balance, x314.decimals))
              }}
            >
              {t("maximum")}
            </Button>
          }
        </div>
      </div>

      <div className={'flex justify-between items-center my-2 w-full'}>
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
      
      {/* select period part */}
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

        <div className={'w-full max-h-8'}>
          <input
            value={amount}
            className={'w-full text-2xl text-right outline-none disabled:bg-transparent bg-[#dfdfd8] border-b-2 border-b-[#9ca3af]'}
            inputMode="decimal"
            placeholder={'0'}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}