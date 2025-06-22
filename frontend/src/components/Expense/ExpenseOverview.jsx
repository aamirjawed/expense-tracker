/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import {prepareExpenseLineBarChartData } from '../../utils/helper'
import CustomLineChart from '../../Charts/CustomLineChart'

const ExpenseOverview = ({transaction, onExpenseIncome}) => {
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        const result = prepareExpenseLineBarChartData(transaction)
        setChartData(result)

        return () => {}
    }, [transaction])
  return (
    <div className='card'>
    <div className='flex items-center justify-between'>
        <div className=''>
            <h5 className='text-lg'>Expense Overview</h5>
            <p className='text-xs text-gray-400 mt-o.5'>Track your spending trends over time and gain insights into where your money goes</p>
        </div>

        <button className='add-btn' onClick={onExpenseIncome}>
            <LuPlus className='text-base' />
            Add Expense
        </button>
    </div>
    <div className=''>
        <CustomLineChart data = {chartData} />
    </div>
    </div>
  )
}

export default ExpenseOverview