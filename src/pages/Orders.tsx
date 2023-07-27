import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Order} from '../slices/order';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import EachOrder from '../components/EachOrder';

function Orders() {
  const orders = useSelector((state: RootState) => state.order.orders);

  const renderItem = useCallback(({item}: {item: Order}) => {
    return <EachOrder item={item} />;
    // 반복 대상이 되는 애들은 무조건 컴포넌트로 빼주기. 한 파일에 넣으면 최적화가 어렵기 때문
  }, []);

  // 서버에서 받아오는 데이터는 양이 얼마나 될지 모르기 때문에, ScrollView 대신 FlatList를 사용하자
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={item => item.orderId}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Orders;
