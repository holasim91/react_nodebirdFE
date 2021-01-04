// 공통적인 것을 처리하기위한 곳(pages내의)
import React from 'react'
import PropTypes from "prop-types";
import Head from 'next/head'
import 'antd/dist/antd.css';

const App = ({Component}) => {
    return (
        <>
        <Head>
            <meta charSet='UTF-8'/>
            <title>NodeBirdFE</title>
        </Head>
        <Component />
        </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App
