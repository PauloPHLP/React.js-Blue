import { homeRoutes } from './pages/Home/home.routes';
import { aquaPageRoutes } from './pages/AquaPage/aquaPage.routes';
import { cornFlowerBluePageRoutes } from './pages/CornFlowerBluePage/cornFlowerBluePage.routes';

export const appRoutes = [...homeRoutes, ...aquaPageRoutes, ...cornFlowerBluePageRoutes];
