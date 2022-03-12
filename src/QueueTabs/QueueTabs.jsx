import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import RedQueue from "../Queus/RedQueue.jsx"
import YellowQueue from "../Queus/YellowQueue.jsx"
import GreenQueue from "../Queus/GreenQueue.jsx"
import { useDispatch, useSelector } from 'react-redux'
import { setActivePatient } from '../ReduxReducers/reducer'



const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};
const Tab = styled(TabUnstyled)`
font-family: IBM Plex Sans, sans-serif;
color: white;
cursor: pointer;
font-size: 0.875rem;
font-weight: bold;
background-color: transparent;
width: 100%;
padding: 12px 16px;
margin: 6px 6px;
border: none;
border-radius: 5px;
display: flex;
justify-content: center;

&:hover {
  background-color: ${blue[400]};
}

&:focus {
  color: #fff;
  border-radius: 3px;
  outline: 2px solid ${blue[200]};
  outline-offset: 2px;
}

&.${tabUnstyledClasses.selected} {
  background-color: ${blue[50]};
  color: ${blue[600]};
}

&.${buttonUnstyledClasses.disabled} {
  opacity: 0.5;
  cursor: not-allowed;
}
`;
const TabsList = styled(TabsListUnstyled)`
min-width: 320px;
background-color: ${blue[500]};
border-radius: 8px;
margin-bottom: 16px;
display: flex;
align-items: center;
justify-content: center;
align-content: space-between;
`;

export default function QueueTabs() {
  
  const queueData = useSelector(state => state.patientQueue.queue)
  const selectedPatient = useSelector(state => state.patientQueue.activePatient)
  const dispatch = useDispatch()

  return (
    <>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab onClick={()=>console.log('red clicked')} >Red</Tab>
          <Tab onClick={()=>console.log('yellow clicked')} >Yellow</Tab>
          <Tab onClick={()=>console.log('green clicked')} >Green</Tab>
        </TabsList>
      </TabsUnstyled>
      {/* 
        <RedQueue />
        <YellowQueue />
      */}
      <GreenQueue />
    </>
  );
}
