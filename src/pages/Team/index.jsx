import React from 'react'
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, getKeyValue } from "@nextui-org/table";
import { useTranslation } from "react-i18next";
function Team(){
  const {t} = useTranslation();
  const testdataRow = [
    {
      key: "1",
      rank: "1",
      teamNumber: "2",
      team: "hhhh紅紅火火",
      totalStakedAmoun: "11498.843",
      totalStakingRewards: "992669.765"
    },
    {
      key: "2",
      rank: "4",
      teamNumber: "1",
      team: "hhhh紅紅火火",
      totalStakedAmoun: "11072498.843",
      totalStakingRewards: "992669.765"
    }
  ]

  const columns = [
    {
      key: t("rank"),
      label: t("rank"),
    },
    {
      key: t("teamNumber"),
      label: t("teamNumber"),
    },
    {
      key: t("team"),
      label: t("team"),
    },
    {
      key: t("totalStakedAmount"),
      label: t("totalStakedAmount"),
    },
    {
      key: t("totalStakingRewards"),
      label: t("totalStakingRewards"),
    }
  ]
  return (
    <div className="container mx-auto max-w-full py-8 px-16">
      <Table aria-label="Example static collection table" className='w-full'>
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>

        <TableBody items={testdataRow}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default Team