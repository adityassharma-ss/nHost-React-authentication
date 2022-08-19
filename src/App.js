import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NhostClient, NhostReactProvider} from '@nhost/react';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoutes';
import Layout from './components/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { NhostApolloProvider } from '@nhost/react-apollo';

const nhost = new NhostClient({
  subdomain:ProcessingInstruction.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION,

});

function App() {
  return (
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
      <BrowserRouter>
        <Routes>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="/" element={
          <ProtectedRoute><Layout /></ProtectedRoute>
          
          }>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster />


        </NhostApolloProvider>
      
    </NhostReactProvider>
  );
}

export default App;
