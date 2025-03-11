import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';
import SearchResipes from "./pages/SearchRecipes/SearchResipes.tsx";
import Recipe from "./pages/Recipe/Recipe.tsx";
import AllRecipes from "./pages/AllRecipes/AllRecipes.tsx";
import Selected from "./pages/Selected/Selected.tsx";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App/>}>
            <Route path='/' index element={<AllRecipes/>}/>
            <Route path='/search' element={<SearchResipes/>}/>
            <Route path='/recipe/:id' element={<Recipe/>}/>
            <Route path='/selected/' element={<Selected/>}/>
        </Route>
    )
);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </StrictMode>
,
)
