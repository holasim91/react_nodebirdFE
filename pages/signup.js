import React, { useCallback, useState } from "react";
import Head from "next/head";
import AppLayout from "../Components/AppLayout";
import { Checkbox, Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMassage = styled.div`
  color: #eb4d4b;
`;

const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  });

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      console.log('term error!')
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <>
      <Head>
        <title>회원가입 | NodeBirdFE</title>
      </Head>

      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input
              name="user-nickname"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              value={password}
              type="password"
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호확인</label>
            <br />
            <Input
              name="user-password-check"
              value={passwordCheck}
              type="password"
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <ErrorMassage>비밀번호가 일치하지 않습니다</ErrorMassage>
            )}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              내 말에 복종할 것을 동의합니다.
            </Checkbox>
            {termError && <ErrorMassage>동의해!</ErrorMassage>}
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
