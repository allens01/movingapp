import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Header from './layout/Header';

import Feed from './pages/Feed';
import PropertyDetails from './pages/PropertyDetails';
import SearchResults from './pages/SearchResults';

const AppContainer = styled.div`
  padding-top: 3rem;
`;

export default function BasePage() {
  return (
    <>
      <Header />
      <AppContainer>
        <Container>
        <Redirect from='/' to='/feed' />
          <Switch>
            <Route path='/feed'>
              <Feed />
            </Route>
            <Route exact path='/results'>
              <SearchResults />
            </Route>
            <Route exact path='/details'>
              <PropertyDetails />
            </Route>
          </Switch>
        </Container>
      </AppContainer>
    </>
  );
}
