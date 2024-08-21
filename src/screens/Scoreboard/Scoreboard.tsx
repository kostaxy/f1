import React from 'react'
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Drivers from './Drivers';
import Constructors from './Constructors';


type Props = {}

const DriversRoute = () => (<Drivers />)
const ConstructorsRoute = () => (<Constructors />)

const renderScene = SceneMap({
  drivers: DriversRoute,
  teams: ConstructorsRoute,
});

const Scoreboard = (props: Props) => {


  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'drivers', title: 'Drivers' },
    { key: 'teams', title: 'Teams' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => <TabBar {...props} style={{ backgroundColor: '#000000' }} />}
    />
  );
}


export default Scoreboard