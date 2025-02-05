import { Skeleton } from "@nextui-org/react";
import { formatUnits } from "viem";
import { useTranslation } from "react-i18next";
import { NumberCount } from "../../../components/NumberCount";
import { useMemo } from "react";

export const Account = ({account, stackData}) => {
  console.log(stackData)
  // sum = locked + released
  const sum = useMemo(() => {
    if (stackData.status == 1) {
    //  return parseFloat(formatUnits(stackData.msg.total, 18))
      return stackData.msg.total + stackData.msg.released
    }
    return 0
  }, [stackData])

  const available = useMemo(() => {
    if (stackData.status == 1) {
      return stackData.msg.relay
    }
    return 0
  }, [stackData])

  const locked = useMemo(() => {
    if (stackData.status == 1) {
      return stackData.msg.total
    }
    return 0
  }, [stackData])

  const released = useMemo(() => {
    if (stackData.status == 1) {
      return stackData.msg.released
    }
    return 0

  }, [stackData])

  const proportion = useMemo(() => {
    if (stackData.status == 1) {
      return stackData.msg.released
    }
    return 0

  }, [stackData])

  const propReleased = useMemo(() => {
    if (stackData.status == 1) {
      return stackData.msg.dividend
    }
    return 0

  }, [stackData])

  const pending = useMemo(() => {
    if (account) {
      return parseFloat(formatUnits(account.pending, 18))
    }
    return 0
  }, [account])

  const {t} = useTranslation()
  return (
    <div
      className="flex flex-col gap-y-3 lg:gap-y-5 rounded-xl">
      <div className="inline-flex justify-center items-center">
        <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
          {t("total")}
        </span>
      </div>

      <div
        className="flex justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
        {
          stackData.status == 1? (
            <NumberCount value={sum} decimals={3}/>
          ) : (
            <Skeleton className={'h-10 my-1 rounded-lg w-1/3'}/>
          )
        }
      </div>

      <dl className="flex justify-center items-center divide-x-3 divide-gray-400 dark:divide-gray-700">
        <dt className="pe-3">
          <div className={'w-full flex justify-center text-sm font-semibold text-gray-800 dark:text-gray-200'}>
            {
              stackData.status == 1? (
                <NumberCount value={locked} decimals={3}/>
              ) : (
                <Skeleton className={'h-3 my-1 rounded-lg w-2/3'}/>
              )
            }
          </div>
          <span className="block text-sm text-gray-500 text-center">{t("locked")}</span>
        </dt>
        <dd className="text-start px-3">
          <div className={'w-full flex justify-center text-sm font-semibold text-gray-800 dark:text-gray-200'}>
            {
              stackData.status == 1? (
                <NumberCount value={released} decimals={3}/>
              ) : (
                <Skeleton className={'h-3 my-1 rounded-lg w-2/3'}/>
              )
            }
          </div>
          <span className="block text-sm text-gray-500 text-center">{t("release")}</span>
        </dd>
        <dd className="text-start ps-3">
          <div className={'w-full flex justify-center text-sm font-semibold text-gray-800 dark:text-gray-200'}>
            {
              stackData.status == 1? (
                <NumberCount value={available} decimals={5}/>
              ) : (
                <Skeleton className={'h-3 my-1 rounded-lg w-2/3'}/>
              )
            }
          </div>
          <span className="block text-sm text-gray-500 text-center">{t("available")}</span>
        </dd>
      </dl>

      <div className="inline-flex justify-center items-center">
        <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
          {t("lockDividend")}
        </span>
      </div>

      <dl className="flex w-full justify-center items-center divide-x-3 divide-gray-400/50 dark:divide-gray-700">
        <dt className="pe-3">
          <div className={'w-full flex justify-center text-sm font-semibold text-gray-800 dark:text-gray-200'}>
            {
              stackData.status == 1? (
                <NumberCount value={proportion} decimals={3}/>
              ) : (
                <Skeleton className={'h-3 my-1 rounded-lg w-2/3'}/>
              )
            }
          </div>
          <span className="block text-sm text-gray-500 text-center">{t("proportion")}</span>
        </dt>
        <dd className=" px-3">
          <div className={'w-full flex justify-center text-sm font-semibold text-gray-800 dark:text-gray-200'}>
            {
              stackData.status == 1 ? (
                <NumberCount value={propReleased} decimals={3}/>
              ) : (
                <Skeleton className={'h-3 my-1 rounded-lg w-2/3'}/>
              )
            }
          </div>
          <span className="block text-sm text-gray-500 text-center">{t("release")}</span>
        </dd>
      </dl>
    </div>
  )
}
