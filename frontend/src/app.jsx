import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData } from './redux/rootSlice';

const App = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try { 
      const response = await axios.get('/api/portfolio/get-portfolio-data'); 
      dispatch(SetPortfolioData(response.data));
    } catch (error) { 
      console.error('Error Response:', error.response); 
      console.log(error.message); 
    } 
  }

  useEffect(() => {
    getPortfolioData()
  }, [])
  
  useEffect(() => {
    // console.log('portfolioData: ', portfolioData)
    // console.log('loading: ', loading )
  }, [portfolioData])

  return (
    <RouterProvider router={router}/> 
  )
}

export default App
