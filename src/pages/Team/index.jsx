import React from 'react'
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, Divider} from "@nextui-org/table";
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
    <div className="container mx-auto max-w-full py-8 px-16 ">
      <Table aria-label="Example static collection table" className='w-full'>
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
      <TableBody items={testdataRow}>
        {(item) => (
          <TableRow key={item.key}>
            <TableCell className='text-black'>{item.rank}</TableCell>
            <TableCell  className='text-black'>{item.teamNumber}</TableCell>
            <TableCell className='text-black'>{item.team}</TableCell>
            <TableCell className='text-black'>{item.totalStakedAmoun}</TableCell>
            <TableCell className='text-black'>{item.totalStakingRewards}</TableCell>
          </TableRow>
        )}
      </TableBody>
      </Table>
    </div>
  )
}

export default Team