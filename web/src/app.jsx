import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import InformationView from 'views/informationView';
import MainView from 'views/mainView';
import DebugView from 'views/debugView';
import ChoiceView from 'views/choiceView';
import AssistantView from 'views/assistantView';
import VirtualWaitingRoomView from 'views/virtualWaitingRoom';
import Navbar from 'components/navbar';
import InfoSymptom from 'components/infoSymptom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path='/debug'>
              <DebugView />
            </Route>
            <Route path='/information'>
              <InformationView />
            </Route>
            <Route path='/assistant'>
              <AssistantView />
            </Route>
            <Route path="/room">
              <VirtualWaitingRoomView />
            </Route>
            <Route path='/testinfo'>
              <InfoSymptom symptoms={['stroke', 'minutes', 'unconscious']} />
            </Route>
            <Route path='/main'>
              <MainView />
            </Route>
            <Route path='/'>
              <ChoiceView />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
