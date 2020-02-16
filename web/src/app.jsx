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
      <header>
        <Navbar />
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path='/debug'>
              <DebugView />
            </Route>
            <Route path='/information'>
              <InformationView />
            </Route>
            <Route path='/choice'>
              <ChoiceView />
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
            <Route path='/'>
              <MainView />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
