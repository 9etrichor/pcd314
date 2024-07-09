import { formatAmount } from "../../../utils/amount";
import { formatUnits } from "viem";
import { Button } from "@nextui-org/react";
import React from "react";
import { useAccount } from "wagmi";
import useCurrencyBalance from "../../../hooks/useCurrencyBalance";
import { useTranslation } from "react-i18next";
import { AiOutlineTeam } from "react-icons/ai";

export const TeamName = () => {
  const { t } = useTranslation()
  const teamName = "test team"
  return (
    <div className={`border px-3 py-2.5 flex rounded-xl items-center`}>
      <AiOutlineTeam />
      <span className="text-md">Team: {teamName}</span>
    </div>
  )
}