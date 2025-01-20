import { type FC, type ReactElement, useEffect, useState } from 'react'

import useTranslations from 'i18n/useTranslations'
import { increment } from 'store/counter/counterSlice'
import { useAppDispatch, useAppSelector } from 'store/store'

import { Button, Counter, Menu, PageMeta } from 'components'

import styles from './home.module.scss'
import Countdown from 'components/Countdown'

const Home: FC = (): ReactElement => {
  const globalCount = useAppSelector((state) => state.counter.value)
  const { t } = useTranslations()
  const dispatch = useAppDispatch()

  const [localCount, setCount] = useState(0)

  useEffect(() => {
    /* Uncomment to test Error Boundary
    throw new Error('💥 KABOOM 💥');
    */
  }, [])

  return (
    <div className="main home">
      <PageMeta title={t.pageNames.home} description="test" />
      <h1>{t.homeText}</h1>
      <Menu />
      <div className={styles.counters}>
        <Countdown targetDate={new Date('2026-10-01').getTime()} />
      </div>
      September or October 2026....

    </div>
  )
}

export { Home }
