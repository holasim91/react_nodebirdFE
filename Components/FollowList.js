import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const FollowListWrapper = styled(List)`
    margin-bottom: 20px;
`;
const LoadMore = styled.div`
    text-align:center;
    margin: 10px 0;
`;
const FollowItems = styled(List.Item)`
    margin-top: 20px;
`;

const FollowList = ({ header, data }) => {
  return (
    <FollowListWrapper
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={(
        <LoadMore>
          <Button>더 보기</Button>
        </LoadMore>
      )}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <FollowItems>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </FollowItems>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
