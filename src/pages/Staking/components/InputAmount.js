import { formatAmount } from "../../../utils/amount";
import { formatUnits } from "viem";
import { Button } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import { useAccount } from "wagmi";
import useCurrencyPcdBalance from "../../../hooks/useCurrencyPcdBalance";
import useCurrency314Balance from "../../../hooks/useCurrency314Balance";
import { useTranslation } from "react-i18next";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";

export const InputAmount = ({amount, setAmount, x314, tokenValue, tokenAddress, periodValue, setTokenValue, setPeriodValue}) => {


  
  // for translation text
  const { t } = useTranslation()

  // ???
  const {address} = useAccount()

  // for the balance value
  const balanceOfPcd = useCurrencyPcdBalance(x314, address)
  const balanceOfPcd314 = useCurrency314Balance(x314, address)

  let balance = balanceOfPcd;
  if(tokenValue === "pcd") {
    balance = balanceOfPcd;
  } else if(tokenValue === "pcd314") {
    balance = balanceOfPcd314
  }

  return (
    <div className={`border px-3 py-2.5 flex flex-col rounded-xl border-[#9ca3af]`}>
      <div className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-1 text-sm text-slate-400'}>
          <span>{t("staking")}</span>
          <p>
            {tokenValue}
          </p>
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