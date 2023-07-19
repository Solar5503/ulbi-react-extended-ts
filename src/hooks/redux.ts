import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { allActionCreators } from '../store/reducers/allActionCreators'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>()

export const useTypedActions = () => {
  const typedDispatch = useDispatch<AppDispatch>()

  return useMemo(
    () => bindActionCreators(allActionCreators, typedDispatch),
    [typedDispatch]
  )
}
