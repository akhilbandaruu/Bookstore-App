import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import CommonLogin from './pages/CommonLogin';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <AuthLayout />,
			children: [
				{
					path: '/',
					element: <CommonLogin />,
				},
			],
		},
		{
			path: '/user/account',
			element: <MainLayout />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
