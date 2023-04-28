
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { About } from './pages/About'
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Route>
        </Routes>
    )
}