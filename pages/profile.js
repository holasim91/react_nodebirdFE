import React from 'react'
import AppLayout from '../Components/AppLayout'
import Head from 'next/head'
import NicknameEditForm from '../Components/NicknameEditForm'
import FollowList from '../Components/FollowList'

const Profile = () => {
    const followingList = [{nickname:'숑이'},{nickname:'방구'},{nickname:'둥근'},]
    const followerList = [{nickname:'숑이'},{nickname:'방구'},{nickname:'둥근'},]
    return (
        <>
        <Head>
            <title>프로필 | NodeBirdFE</title>
        </Head>
        <AppLayout>
            <NicknameEditForm />
            <FollowList header='팔로잉 목록' data={followingList}/>
            <FollowList header='팔로워 목록' data={followerList}/>
        </AppLayout>
        </>
    ) 
}

export default Profile
