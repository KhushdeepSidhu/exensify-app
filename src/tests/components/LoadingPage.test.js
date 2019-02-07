import React from 'react'
import LoadingPage from '../../components/LoginPage'
import { shallow } from 'enzyme'

test ( 'Should render LoadingPage component correctly', () => {
    const wrapper = shallow ( <LoadingPage /> )
    expect ( wrapper ).toMatchSnapshot()
} )